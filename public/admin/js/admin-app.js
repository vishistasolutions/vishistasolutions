// Admin Panel Application Controller

document.addEventListener('DOMContentLoaded', function () {
    initAdminApp();
});

let currentSession = null;
let activeTab = 'dashboard';

async function initAdminApp() {
    // Check Auth Status
    if (window.supabaseClient) {
        try {
            const { data } = await window.supabaseClient.auth.getSession();
            if (data && data.session) {
                currentSession = data.session;
            }
        } catch (e) {
            console.warn('Auth session check fallback:', e);
        }
    }

    // Check Local Storage Auth Fallback
    const localAuth = localStorage.getItem('vishista_admin_logged_in');
    if (localAuth === 'true' || currentSession) {
        showAdminDashboard();
    } else {
        showAuthScreen();
    }

    bindAuthForm();
    bindNavItems();
}

// 1. Auth Handlers
function showAuthScreen() {
    document.getElementById('authScreen').classList.remove('d-none');
    document.getElementById('adminAppLayout').classList.add('d-none');
}

function showAdminDashboard() {
    document.getElementById('authScreen').classList.add('d-none');
    document.getElementById('adminAppLayout').classList.remove('d-none');
    loadDashboardData();
    loadProductsModule();
    loadCategoriesModule();
    switchTab('dashboard');
}

function bindAuthForm() {
    const loginForm = document.getElementById('adminLoginForm');
    const forgotView = document.getElementById('forgotPasswordView');
    const resetView = document.getElementById('resetPasswordView');
    const errAlert = document.getElementById('loginErrorAlert');

    // Check if opened via reset link ?reset_token=...
    const urlParams = new URLSearchParams(window.location.search);
    const linkResetToken = urlParams.get('reset_token');
    if (linkResetToken) {
        if (loginForm) loginForm.classList.add('d-none');
        if (forgotView) forgotView.classList.add('d-none');
        if (resetView) {
            resetView.classList.remove('d-none');
            const tokenInput = document.getElementById('resetTokenHidden');
            if (tokenInput) tokenInput.value = linkResetToken;
            const otpContainer = document.getElementById('otpGroupContainer');
            if (otpContainer) otpContainer.classList.add('d-none'); // Token from email link auto-verifies
        }
    }

    // Toggle views
    const showForgotBtn = document.getElementById('showForgotPassBtn');
    if (showForgotBtn) {
        showForgotBtn.addEventListener('click', function () {
            if (loginForm) loginForm.classList.add('d-none');
            if (resetView) resetView.classList.add('d-none');
            if (forgotView) forgotView.classList.remove('d-none');
            if (errAlert) errAlert.classList.add('d-none');
        });
    }

    const backToLoginFromForgotBtn = document.getElementById('backToLoginFromForgotBtn');
    if (backToLoginFromForgotBtn) {
        backToLoginFromForgotBtn.addEventListener('click', function () {
            if (forgotView) forgotView.classList.add('d-none');
            if (resetView) resetView.classList.add('d-none');
            if (loginForm) loginForm.classList.remove('d-none');
        });
    }

    const backToLoginFromResetBtn = document.getElementById('backToLoginFromResetBtn');
    if (backToLoginFromResetBtn) {
        backToLoginFromResetBtn.addEventListener('click', function () {
            if (resetView) resetView.classList.add('d-none');
            if (forgotView) forgotView.classList.add('d-none');
            if (loginForm) loginForm.classList.remove('d-none');
        });
    }

    // Handle Forgot Password submission
    const forgotForm = document.getElementById('forgotPasswordForm');
    if (forgotForm) {
        forgotForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const email = (document.getElementById('forgotEmail').value || '').trim();
            const forgotAlert = document.getElementById('forgotAlert');
            const sendBtn = document.getElementById('sendResetBtn');

            forgotAlert.className = 'alert fs-7 d-none mb-3';
            sendBtn.disabled = true;
            sendBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending Reset Link...';

            try {
                const res = await fetch('/api/admin-forgot-password', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                });
                const data = await res.json();

                if (!res.ok || data.error) {
                    throw new Error(data.error || 'Failed to send reset link');
                }

                forgotAlert.className = 'alert alert-success fs-7 mb-3';
                forgotAlert.innerHTML = `<strong>Success!</strong> ${data.message || 'Password reset link sent to your email.'}`;
                
                // Store reset token
                const tokenInput = document.getElementById('resetTokenHidden');
                if (tokenInput && data.resetToken) tokenInput.value = data.resetToken;

                setTimeout(() => {
                    forgotView.classList.add('d-none');
                    resetView.classList.remove('d-none');
                    const resetAlert = document.getElementById('resetAlert');
                    if (resetAlert) {
                        resetAlert.className = 'alert alert-info fs-7 mb-3';
                        resetAlert.innerHTML = `Reset link &amp; code sent to <strong>${email}</strong>. Enter the OTP code or click the email link directly.`;
                    }
                }, 2000);

            } catch (err) {
                forgotAlert.className = 'alert alert-danger fs-7 mb-3';
                forgotAlert.textContent = err.message;
            } finally {
                sendBtn.disabled = false;
                sendBtn.innerHTML = 'Send Reset Link &rarr;';
            }
        });
    }

    // Handle Reset Password submission
    const resetForm = document.getElementById('resetPasswordForm');
    if (resetForm) {
        resetForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const token = document.getElementById('resetTokenHidden').value;
            const otp = document.getElementById('resetOtpCode').value;
            const newPassword = document.getElementById('newPasswordInput').value;
            const confirmPassword = document.getElementById('confirmPasswordInput').value;
            const resetAlert = document.getElementById('resetAlert');
            const submitBtn = document.getElementById('submitResetBtn');

            resetAlert.className = 'alert fs-7 d-none mb-3';

            if (newPassword !== confirmPassword) {
                resetAlert.className = 'alert alert-danger fs-7 mb-3';
                resetAlert.textContent = 'Passwords do not match. Please re-enter.';
                return;
            }

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Saving New Password...';

            try {
                const res = await fetch('/api/admin-reset-password', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ resetToken: token, otp, newPassword })
                });
                const data = await res.json();

                if (!res.ok || data.error) {
                    throw new Error(data.error || 'Failed to reset password');
                }

                resetAlert.className = 'alert alert-success fs-7 mb-3';
                resetAlert.innerHTML = `<strong>Success!</strong> ${data.message}`;

                setTimeout(() => {
                    resetView.classList.add('d-none');
                    loginForm.classList.remove('d-none');
                    const emailInput = document.getElementById('loginEmail');
                    const passInput = document.getElementById('loginPassword');
                    if (emailInput && data.email) emailInput.value = data.email;
                    if (passInput) passInput.value = newPassword;
                    errAlert.className = 'alert alert-success fs-7 mb-3';
                    errAlert.textContent = 'Password updated in database! Click Sign In to continue.';
                    errAlert.classList.remove('d-none');
                    window.history.replaceState({}, document.title, window.location.pathname);
                }, 1800);

            } catch (err) {
                resetAlert.className = 'alert alert-danger fs-7 mb-3';
                resetAlert.textContent = err.message;
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Save New Password &rarr;';
            }
        });
    }

    // Handle Login submission with strict DB password validation
    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const email = (document.getElementById('loginEmail').value || '').trim();
            const password = document.getElementById('loginPassword').value;
            const signInBtn = document.getElementById('adminSignInBtn');

            errAlert.classList.add('d-none');
            signInBtn.disabled = true;
            signInBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Authenticating...';

            try {
                // Strict Custom DB Verification (checks against updated database password)
                const res = await fetch('/api/admin-login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                const data = await res.json();

                if (res.ok && data.success) {
                    localStorage.setItem('vishista_admin_logged_in', 'true');
                    showAdminDashboard();
                    return;
                } else {
                    throw new Error(data.error || 'Invalid password.');
                }
            } catch (err) {
                errAlert.className = 'alert alert-danger fs-7 mb-3';
                errAlert.textContent = err.message || 'Invalid password.';
                errAlert.classList.remove('d-none');
            } finally {
                signInBtn.disabled = false;
                signInBtn.innerHTML = 'Sign In to Dashboard &rarr;';
            }
        });
    }

    const logoutBtn = document.getElementById('adminLogoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async function () {
            localStorage.removeItem('vishista_admin_logged_in');
            showAuthScreen();
        });
    }
}

function toggleMobileSidebar(show) {
    const sidebar = document.querySelector('.admin-sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (!sidebar) return;

    const shouldShow = (typeof show === 'boolean') ? show : !sidebar.classList.contains('show');
    if (shouldShow) {
        sidebar.classList.add('show');
        if (backdrop) backdrop.classList.remove('d-none');
    } else {
        sidebar.classList.remove('show');
        if (backdrop) backdrop.classList.add('d-none');
    }
}

// 2. Navigation Tabs
function bindNavItems() {
    const navItems = document.querySelectorAll('.admin-nav-item[data-tab]');
    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    const sidebarToggle = document.getElementById('sidebarToggleBtn');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function () {
            toggleMobileSidebar();
        });
    }
}

function switchTab(tabName) {
    activeTab = tabName;
    document.querySelectorAll('.admin-nav-item').forEach(el => el.classList.remove('active'));
    const activeNav = document.querySelector(`.admin-nav-item[data-tab="${tabName}"]`);
    if (activeNav) activeNav.classList.add('active');

    document.querySelectorAll('.tab-view-content').forEach(el => el.classList.add('d-none'));
    const targetView = document.getElementById(`view-${tabName}`);
    if (targetView) targetView.classList.remove('d-none');

    toggleMobileSidebar(false);

    if (tabName === 'dashboard') loadDashboardData();
    if (tabName === 'products') loadProductsModule();
    if (tabName === 'categories') loadCategoriesModule();
    if (tabName === 'subcategories') loadSubcategoriesModule();
    if (tabName === 'hero') loadHeroModule();
    if (tabName === 'about') loadAboutModule();
    if (tabName === 'footer') loadFooterModule();
}

// Generic Image Upload Helper
async function handleImageUploadGeneric(input, hiddenInputId, previewImgId, previewContainerId) {
    const file = input.files[0];
    if (!file) return;

    try {
        const uploadResult = await uploadToCloudinary(file);
        document.getElementById(hiddenInputId).value = uploadResult.url;
        document.getElementById(previewImgId).src = uploadResult.url;
        document.getElementById(previewContainerId).classList.remove('d-none');
        alert('Image uploaded successfully!');
    } catch (err) {
        alert(`Image upload failed: ${err.message}`);
    }
}

// 3. Module: Dashboard
async function loadDashboardData() {
    const products = await CMSDataStore.get('products');
    const categories = await CMSDataStore.get('categories');

    if (document.getElementById('statTotalProducts')) document.getElementById('statTotalProducts').textContent = products ? products.length : 0;
    if (document.getElementById('statTotalCategories')) document.getElementById('statTotalCategories').textContent = categories ? categories.length : 0;

    const publishedCount = (products || []).filter(p => p.is_visible !== false && p.is_published !== false).length;
    if (document.getElementById('statPublishedItems')) document.getElementById('statPublishedItems').textContent = publishedCount;
}

// 4. Module: Products CMS & Search/Filters
let cachedProductsList = [];

async function loadProductsModule() {
    cachedProductsList = await CMSDataStore.get('products');
    const categories = await CMSDataStore.get('categories');
    
    // Populate Category filter dropdown
    const catFilter = document.getElementById('productCategoryFilter');
    if (catFilter && categories) {
        let catOptions = '<option value="">All Categories</option>';
        categories.forEach(c => {
            catOptions += `<option value="${c.slug}">${c.name}</option>`;
        });
        catFilter.innerHTML = catOptions;
    }

    filterProductsTable();
}

function filterProductsTable() {
    const tbody = document.getElementById('productsTableBody');
    if (!tbody) return;

    const search = (document.getElementById('productSearchInput')?.value || '').toLowerCase().trim();
    const catFilter = document.getElementById('productCategoryFilter')?.value || '';
    const visFilter = document.getElementById('productVisibilityFilter')?.value || '';
    const pubFilter = document.getElementById('productPublishedFilter')?.value || '';

    if (!cachedProductsList || cachedProductsList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-muted">No products found. Click "+ Add Product" to create one.</td></tr>`;
        return;
    }

    const filtered = cachedProductsList.filter((prod) => {
        const nameStr = (prod.name || '').toLowerCase();
        const descStr = (prod.description || '').toLowerCase();
        const matchesSearch = !search || nameStr.includes(search) || descStr.includes(search);

        const matchesCategory = !catFilter || isSameCategory(prod.category_slug, catFilter);

        const isVis = prod.is_visible !== false;
        const matchesVisibility = !visFilter || (visFilter === 'visible' && isVis) || (visFilter === 'hidden' && !isVis);

        const isPub = prod.is_published !== false;
        const matchesPublished = !pubFilter || (pubFilter === 'published' && isPub) || (pubFilter === 'unpublished' && !isPub);

        return matchesSearch && matchesCategory && matchesVisibility && matchesPublished;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-muted">No matching products found for the selected filters.</td></tr>`;
        return;
    }

    let html = '';
    filtered.forEach((prod) => {
        const realIndex = cachedProductsList.indexOf(prod);
        const isVisible = prod.is_visible !== false;
        const isPublished = prod.is_published !== false;

        html += `
        <tr>
            <td>
                <img src="${prod.main_image || prod.image || 'images/logo/logo-symbol.png'}" alt="${prod.name}" style="width: 48px; height: 48px; object-fit: contain; border-radius: 6px; background: #fff;" onerror="this.src='images/logo/logo-symbol.png'">
            </td>
            <td class="fw-bold text-dark">${prod.name}</td>
            <td>
                <span class="badge bg-light text-dark border">${prod.subcategory || prod.category_slug || 'General'}</span>
            </td>
            <td class="fs-7 text-secondary">${prod.price || 'Enquire'}</td>
            <td>
                <span class="${isVisible ? 'badge bg-success-subtle text-success border border-success' : 'badge bg-danger-subtle text-danger border border-danger'}">
                    ${isVisible ? 'VISIBLE' : 'HIDDEN'}
                </span>
            </td>
            <td>
                <span class="${isPublished ? 'badge bg-primary-subtle text-primary border border-primary' : 'badge bg-secondary-subtle text-secondary border'}">
                    ${isPublished ? 'PUBLISHED' : 'UNPUBLISHED'}
                </span>
            </td>
            <td>${prod.display_order || realIndex + 1}</td>
            <td>
                <div class="action-btn-group d-flex flex-wrap gap-1">
                    <button class="btn btn-sm btn-primary px-2 py-1 fs-7" onclick="editProductModal(${realIndex})">Edit</button>
                    <button class="btn btn-sm ${isVisible ? 'btn-outline-secondary' : 'btn-outline-success'} px-2 py-1 fs-7" onclick="toggleProductVisibility(${realIndex})">${isVisible ? 'Hide' : 'Show'}</button>
                    <button class="btn btn-sm ${isPublished ? 'btn-outline-warning' : 'btn-outline-info'} px-2 py-1 fs-7" onclick="toggleProductPublished(${realIndex})">${isPublished ? 'Unpublish' : 'Publish'}</button>
                    <button class="btn btn-sm btn-outline-danger px-2 py-1 fs-7" onclick="deleteProduct(${realIndex})">Delete</button>
                </div>
            </td>
        </tr>`;
    });
    tbody.innerHTML = html;
}

let currentProductAdditionalImages = [];

async function populateCategoryDropdown(selectEl, selectedSlug) {
    if (!selectEl) return;
    const categories = await CMSDataStore.get('categories');
    if (!categories || categories.length === 0) return;

    let html = '';
    categories.forEach(cat => {
        const slug = cat.slug || cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const isSelected = (selectedSlug === slug || selectedSlug === cat.name) ? 'selected' : '';
        html += `<option value="${slug}" ${isSelected}>${cat.name}</option>`;
    });
    selectEl.innerHTML = html;
}

function isSameCategory(c1, c2) {
    if (!c1 || !c2) return false;
    const s1 = String(c1).toLowerCase().replace(/[^a-z0-9]/g, '');
    const s2 = String(c2).toLowerCase().replace(/[^a-z0-9]/g, '');
    if (s1 === s2) return true;
    if (s1.replace(/s$/, '') === s2.replace(/s$/, '')) return true;
    if (s1 === s2 + 's' || s2 === s1 + 's') return true;
    return false;
}

async function onProductCategoryChange(selectedSubcategory) {
    const catSelect = document.getElementById('productCategorySelect');
    const subSelect = document.getElementById('productSubcategorySelect');
    if (!catSelect || !subSelect) return;

    const catVal = catSelect.value;
    const categories = await CMSDataStore.get('categories');
    const subcategories = await CMSDataStore.get('subcategories');

    // Find matching category object
    const matchedCategory = (categories || []).find(c => isSameCategory(c.slug, catVal) || isSameCategory(c.name, catVal) || c.id === catVal);
    const catId = matchedCategory ? matchedCategory.id : null;
    const catSlug = matchedCategory ? matchedCategory.slug : catVal;

    const filteredSubs = (subcategories || []).filter(s => 
        (catId && s.category_id === catId) ||
        isSameCategory(s.category_slug, catVal) ||
        isSameCategory(s.category_slug, catSlug) ||
        (matchedCategory && isSameCategory(s.category_slug, matchedCategory.name))
    );

    let html = '<option value="">General / None</option>';
    filteredSubs.forEach(sub => {
        const isSel = (selectedSubcategory === sub.name || selectedSubcategory === sub.slug) ? 'selected' : '';
        html += `<option value="${sub.name}" ${isSel}>${sub.name}</option>`;
    });

    subSelect.innerHTML = html;
}

function renderAdditionalImagesPreview() {
    const container = document.getElementById('additionalImagesPreviewList');
    if (!container) return;

    let html = '';
    currentProductAdditionalImages.forEach((imgUrl, idx) => {
        html += `
        <div class="position-relative d-inline-block m-1" style="width: 65px; height: 65px;">
            <img src="${imgUrl}" style="width: 65px; height: 65px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1;">
            <button type="button" class="btn btn-danger btn-sm position-absolute top-0 end-0 p-0 rounded-circle text-center" style="width: 20px; height: 20px; line-height: 18px; font-size: 11px; transform: translate(30%, -30%);" onclick="removeAdditionalProductImage(${idx})">&times;</button>
        </div>`;
    });
    container.innerHTML = html;
}

function removeAdditionalProductImage(index) {
    currentProductAdditionalImages.splice(index, 1);
    renderAdditionalImagesPreview();
}

async function handleAdditionalProductImageUpload(input) {
    const file = input.files[0];
    if (!file) return;

    try {
        const uploadResult = await uploadToCloudinary(file);
        currentProductAdditionalImages.push(uploadResult.url);
        renderAdditionalImagesPreview();
        alert('✓ Additional image added to gallery!');
    } catch (err) {
        alert(`Image upload failed: ${err.message}`);
    }
}

async function openAddProductModal() {
    currentProductAdditionalImages = [];
    renderAdditionalImagesPreview();

    const selectEl = document.getElementById('productCategorySelect');
    await populateCategoryDropdown(selectEl, 'archlabs-seating');
    await onProductCategoryChange();

    document.getElementById('productModalTitle').textContent = 'Add New Product';
    document.getElementById('productIdInput').value = '';
    document.getElementById('productNameInput').value = '';
    document.getElementById('productPriceInput').value = '';
    document.getElementById('productDescInput').value = '';
    if (document.getElementById('productVisibleCheck')) document.getElementById('productVisibleCheck').checked = true;
    if (document.getElementById('productPublishedCheck')) document.getElementById('productPublishedCheck').checked = true;
    document.getElementById('productMainImageUrl').value = '';
    document.getElementById('productImagePreviewContainer').classList.add('d-none');
    document.getElementById('productImagePreview').src = '';

    const modal = new bootstrap.Modal(document.getElementById('productFormModal'));
    modal.show();
}

async function editProductModal(index) {
    const products = await CMSDataStore.get('products');
    const prod = products[index];
    if (!prod) return;

    currentProductAdditionalImages = Array.isArray(prod.additional_images) ? [...prod.additional_images] : (prod.additional_images ? [prod.additional_images] : []);
    renderAdditionalImagesPreview();

    const selectEl = document.getElementById('productCategorySelect');
    await populateCategoryDropdown(selectEl, prod.category_slug);
    await onProductCategoryChange(prod.subcategory);

    document.getElementById('productModalTitle').textContent = 'Edit Product';
    document.getElementById('productIdInput').value = index;
    document.getElementById('productNameInput').value = prod.name || '';
    document.getElementById('productPriceInput').value = prod.price || '';
    document.getElementById('productDescInput').value = prod.description || '';
    if (document.getElementById('productVisibleCheck')) document.getElementById('productVisibleCheck').checked = prod.is_visible !== false;
    if (document.getElementById('productPublishedCheck')) document.getElementById('productPublishedCheck').checked = prod.is_published !== false;
    document.getElementById('productMainImageUrl').value = prod.main_image || prod.image || '';

    const imgPath = prod.main_image || prod.image;
    if (imgPath) {
        document.getElementById('productImagePreview').src = imgPath;
        document.getElementById('productImagePreviewContainer').classList.remove('d-none');
    } else {
        document.getElementById('productImagePreviewContainer').classList.add('d-none');
    }

    const modal = new bootstrap.Modal(document.getElementById('productFormModal'));
    modal.show();
}

async function handleCloudinaryProductUpload(input) {
    const file = input.files[0];
    if (!file) return;

    const progressDiv = document.getElementById('productUploadProgress');
    const progressBar = document.getElementById('productProgressBar');
    if (progressDiv) progressDiv.classList.remove('d-none');
    if (progressBar) progressBar.style.width = '0%';

    try {
        const uploadResult = await uploadToCloudinary(file, (percent) => {
            if (progressBar) progressBar.style.width = `${percent}%`;
        });

        document.getElementById('productMainImageUrl').value = uploadResult.url;
        document.getElementById('productImagePreview').src = uploadResult.url;
        document.getElementById('productImagePreviewContainer').classList.remove('d-none');
        alert('Image uploaded successfully!');
    } catch (err) {
        alert(`Image upload failed: ${err.message}`);
    } finally {
        if (progressDiv) progressDiv.classList.add('d-none');
    }
}

async function saveProductForm(e) {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Saving...';
    }

    const indexVal = document.getElementById('productIdInput').value;
    const name = document.getElementById('productNameInput').value.trim();
    const category_slug = document.getElementById('productCategorySelect').value;
    const subcategorySelect = document.getElementById('productSubcategorySelect');
    const subcategory = subcategorySelect ? subcategorySelect.value : '';
    const price = document.getElementById('productPriceInput').value.trim() || null;
    const description = document.getElementById('productDescInput').value.trim();
    const is_visible = document.getElementById('productVisibleCheck') ? document.getElementById('productVisibleCheck').checked : true;
    const is_published = document.getElementById('productPublishedCheck') ? document.getElementById('productPublishedCheck').checked : true;
    const main_image = document.getElementById('productMainImageUrl').value.trim() || 'images/logo/logo-symbol.png';

    if (!name) {
        alert('Please enter a product name.');
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = 'Save Product &rarr;'; }
        return;
    }

    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    try {
        const products = await CMSDataStore.get('products');
        
        let payload = {
            name,
            slug,
            category_slug,
            subcategory,
            price,
            description,
            main_image,
            additional_images: [...currentProductAdditionalImages],
            is_visible,
            display_order: products.length + 1
        };

        if (indexVal !== '' && !isNaN(indexVal) && products[indexVal]) {
            const existing = products[indexVal];
            const targetId = existing.id || existing.slug;
            payload = { ...existing, ...payload, updated_at: new Date().toISOString() };
            await CMSDataStore.updateRecord('products', targetId, payload);
        } else {
            payload.created_at = new Date().toISOString();
            await CMSDataStore.insertRecord('products', payload);
        }

        alert('✓ Product updated and saved successfully to database!');

        const modalEl = document.getElementById('productFormModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();

        await loadProductsModule();
        await loadDashboardData();
    } catch (err) {
        alert(`❌ Save Failed: ${err.message}`);
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Save Product &rarr;';
        }
    }
}

async function toggleProductVisibility(index) {
    try {
        const products = await CMSDataStore.get('products');
        if (products && products[index]) {
            const targetProd = products[index];
            targetProd.is_visible = (targetProd.is_visible === false) ? true : false;
            
            const identifier = targetProd.id || targetProd.slug;
            await CMSDataStore.updateRecord('products', identifier, { is_visible: targetProd.is_visible });
            
            await loadProductsModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Visibility update failed: ${err.message}`);
    }
}

async function toggleProductPublished(index) {
    try {
        const products = await CMSDataStore.get('products');
        if (products && products[index]) {
            const targetProd = products[index];
            targetProd.is_published = (targetProd.is_published === false) ? true : false;
            targetProd.is_visible = targetProd.is_published;

            const identifier = targetProd.id || targetProd.slug;
            await CMSDataStore.updateRecord('products', identifier, { is_published: targetProd.is_published, is_visible: targetProd.is_visible });

            await loadProductsModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Published status update failed: ${err.message}`);
    }
}

async function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        try {
            const products = await CMSDataStore.get('products');
            const targetProd = products[index];
            if (targetProd) {
                if (targetProd.id) await CMSDataStore.deleteRecord('products', targetProd.id);
                if (targetProd.slug) await CMSDataStore.deleteRecord('products', targetProd.slug);
            }
            await loadProductsModule();
            await loadDashboardData();
        } catch (err) {
            alert(`Product deletion failed: ${err.message}`);
        }
    }
}


// 5. Module: Categories CMS
async function loadCategoriesModule() {
    const categories = await CMSDataStore.get('categories');
    const subcategories = await CMSDataStore.get('subcategories');
    const tbody = document.getElementById('categoriesTableBody');
    if (tbody) {
        if (!categories || categories.length === 0) {
            tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-muted">No categories configured. Click "+ Add Category" to create one.</td></tr>`;
        } else {
            let html = '';
            categories.forEach((cat, index) => {
                const isVisible = cat.is_visible !== false;
                const isPublished = cat.is_published !== false;
                const subCount = (subcategories || []).filter(s => isSameCategory(s.category_slug, cat.slug) || isSameCategory(s.category_slug, cat.name) || s.category_id === cat.id).length;

                html += `
                <tr>
                    <td>
                        <img src="${cat.image_url || 'images/logo/logo-symbol.png'}" alt="${cat.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 6px; background: #fff;" onerror="this.src='images/logo/logo-symbol.png'">
                    </td>
                    <td class="fw-bold text-dark">${cat.name}</td>
                    <td><code>${cat.slug}</code></td>
                    <td><span class="badge bg-primary-subtle text-primary border border-primary font-monospace px-2 py-1">${subCount} Subcategor${subCount === 1 ? 'y' : 'ies'}</span></td>
                    <td>
                        <span class="${isVisible ? 'badge bg-success-subtle text-success border border-success' : 'badge bg-danger-subtle text-danger border border-danger'}">
                            ${isVisible ? 'VISIBLE' : 'HIDDEN'}
                        </span>
                    </td>
                    <td>
                        <span class="${isPublished ? 'badge bg-primary-subtle text-primary border border-primary' : 'badge bg-secondary-subtle text-secondary border'}">
                            ${isPublished ? 'PUBLISHED' : 'UNPUBLISHED'}
                        </span>
                    </td>
                    <td>${cat.display_order || index + 1}</td>
                    <td>
                        <div class="action-btn-group d-flex flex-wrap gap-1">
                            <button class="btn btn-sm btn-primary px-2 py-1 fs-7" onclick="editCategoryModal(${index})">Edit</button>
                            <button class="btn btn-sm ${isVisible ? 'btn-outline-secondary' : 'btn-outline-success'} px-2 py-1 fs-7" onclick="toggleCategoryVisibility(${index})">${isVisible ? 'Hide' : 'Show'}</button>
                            <button class="btn btn-sm ${isPublished ? 'btn-outline-warning' : 'btn-outline-info'} px-2 py-1 fs-7" onclick="toggleCategoryPublished(${index})">${isPublished ? 'Unpublish' : 'Publish'}</button>
                            <button class="btn btn-sm btn-outline-danger px-2 py-1 fs-7" onclick="deleteCategory(${index})">Delete</button>
                        </div>
                    </td>
                </tr>`;
            });
            tbody.innerHTML = html;
        }
    }

    await loadSubcategoriesTable();
}

async function loadSubcategoriesTable() {
    const subcategories = await CMSDataStore.get('subcategories');
    const categories = await CMSDataStore.get('categories');
    const products = await CMSDataStore.get('products');
    const tbody = document.getElementById('subcategoriesTableBody');
    if (!tbody) return;

    if (!subcategories || subcategories.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">No subcategories configured. Click "+ Add Subcategory" to create one.</td></tr>`;
        return;
    }

    let html = '';
    subcategories.forEach((sub, index) => {
        const parentCat = (categories || []).find(c => c.slug === sub.category_slug || c.name === sub.category_slug);
        const parentName = parentCat ? parentCat.name : (sub.category_slug || 'General');
        const prodCount = (products || []).filter(p => p.subcategory === sub.name || p.subcategory === sub.slug).length;

        html += `
        <tr>
            <td class="fw-bold text-dark">${sub.name}</td>
            <td><span class="badge bg-light text-dark border">${parentName}</span></td>
            <td><code>${sub.slug || '-'}</code></td>
            <td><span class="badge bg-primary-subtle text-primary border font-monospace px-2 py-1">${prodCount} Products</span></td>
            <td>${sub.display_order || index + 1}</td>
            <td>
                <div class="action-btn-group d-flex gap-1">
                    <button class="btn btn-sm btn-primary px-2 py-1 fs-7" onclick="editSubcategoryModal(${index})">Edit</button>
                    <button class="btn btn-sm btn-outline-danger px-2 py-1 fs-7" onclick="deleteSubcategory(${index})">Delete</button>
                </div>
            </td>
        </tr>`;
    });
    tbody.innerHTML = html;
}

async function loadSubcategoriesModule() {
    const categories = await CMSDataStore.get('categories');
    const filterSelect = document.getElementById('dedicatedSubcategoryFilterSelect');
    if (filterSelect) {
        const currentVal = filterSelect.value;
        let html = '<option value="">All Categories</option>';
        (categories || []).forEach(cat => {
            const slug = cat.slug || cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const isSel = (currentVal === slug || currentVal === cat.name) ? 'selected' : '';
            html += `<option value="${slug}" ${isSel}>${cat.name}</option>`;
        });
        filterSelect.innerHTML = html;
    }
    await renderDedicatedSubcategoriesTable();
}

async function renderDedicatedSubcategoriesTable() {
    const subcategories = await CMSDataStore.get('subcategories');
    const categories = await CMSDataStore.get('categories');
    const products = await CMSDataStore.get('products');
    const tbody = document.getElementById('dedicatedSubcategoriesTableBody');
    const countBadge = document.getElementById('dedicatedSubcategoryCountBadge');
    if (!tbody) return;

    const filterSelect = document.getElementById('dedicatedSubcategoryFilterSelect');
    const filterVal = filterSelect ? filterSelect.value : '';

    let list = subcategories || [];
    if (filterVal) {
        list = list.filter(s => {
            const sSlug = (s.category_slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            const fSlug = filterVal.toLowerCase().replace(/[^a-z0-9]/g, '');
            return sSlug === fSlug || sSlug.replace(/s$/, '') === fSlug.replace(/s$/, '') || sSlug + 's' === fSlug || fSlug + 's' === sSlug;
        });
    }

    if (countBadge) {
        countBadge.textContent = `${list.length} Subcategor${list.length === 1 ? 'y' : 'ies'}`;
    }

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">No subcategories found${filterVal ? ' for this category' : ''}. Click "+ Add Subcategory" to create one.</td></tr>`;
        return;
    }

    let html = '';
    list.forEach((sub, i) => {
        const realIndex = (subcategories || []).indexOf(sub);
        const parentCat = (categories || []).find(c => {
            const cSlug = (c.slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            const cName = (c.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            const sCat = (sub.category_slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            return cSlug === sCat || cName === sCat || cSlug.replace(/s$/, '') === sCat.replace(/s$/, '');
        });
        const parentName = parentCat ? parentCat.name : (sub.category_slug || 'General');
        const prodCount = (products || []).filter(p => p.subcategory === sub.name || p.subcategory === sub.slug).length;

        html += `
        <tr>
            <td class="fw-bold text-dark fs-6">${sub.name}</td>
            <td><span class="badge bg-light text-dark border px-2 py-1">${parentName}</span></td>
            <td><code>${sub.slug || '-'}</code></td>
            <td><span class="badge bg-primary-subtle text-primary border font-monospace px-2 py-1">${prodCount} Products</span></td>
            <td>${sub.display_order || realIndex + 1}</td>
            <td>
                <div class="action-btn-group d-flex gap-1">
                    <button class="btn btn-sm btn-primary px-2 py-1 fs-7" onclick="editSubcategoryModal(${realIndex})">Edit</button>
                    <button class="btn btn-sm btn-outline-danger px-2 py-1 fs-7" onclick="deleteSubcategory(${realIndex})">Delete</button>
                </div>
            </td>
        </tr>`;
    });
    tbody.innerHTML = html;
}

async function openAddSubcategoryModal() {
    const selectEl = document.getElementById('subcategoryCategorySelect');
    await populateCategoryDropdown(selectEl);

    document.getElementById('subcategoryModalTitle').textContent = 'Add New Subcategory';
    document.getElementById('subcategoryIdInput').value = '';
    document.getElementById('subcategoryNameInput').value = '';
    document.getElementById('subcategoryOrderInput').value = '0';

    const modal = new bootstrap.Modal(document.getElementById('subcategoryFormModal'));
    modal.show();
}

async function editSubcategoryModal(index) {
    const subcategories = await CMSDataStore.get('subcategories');
    const sub = subcategories[index];
    if (!sub) return;

    const selectEl = document.getElementById('subcategoryCategorySelect');
    await populateCategoryDropdown(selectEl, sub.category_slug);

    document.getElementById('subcategoryModalTitle').textContent = 'Edit Subcategory';
    document.getElementById('subcategoryIdInput').value = index;
    document.getElementById('subcategoryNameInput').value = sub.name || '';
    document.getElementById('subcategoryOrderInput').value = sub.display_order || 0;

    const modal = new bootstrap.Modal(document.getElementById('subcategoryFormModal'));
    modal.show();
}

async function saveSubcategoryForm(e) {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = 'Saving...'; }

    const indexVal = document.getElementById('subcategoryIdInput').value;
    const category_slug = document.getElementById('subcategoryCategorySelect').value;
    const name = document.getElementById('subcategoryNameInput').value.trim();
    const display_order = parseInt(document.getElementById('subcategoryOrderInput').value || '0', 10);
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    if (!name || !category_slug) {
        alert('Please enter subcategory name and select a parent category.');
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = 'Save Subcategory &rarr;'; }
        return;
    }

    try {
        const subcategories = await CMSDataStore.get('subcategories');
        let payload = {
            name,
            slug,
            category_slug,
            display_order
        };

        if (indexVal !== '' && !isNaN(indexVal) && subcategories[indexVal]) {
            const existing = subcategories[indexVal];
            const targetId = existing.id || existing.slug;
            payload = { ...existing, ...payload };
            await CMSDataStore.updateRecord('subcategories', targetId, payload);
        } else {
            payload.created_at = new Date().toISOString();
            await CMSDataStore.insertRecord('subcategories', payload);
        }

        alert('✓ Subcategory saved successfully to database!');

        const modalEl = document.getElementById('subcategoryFormModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();

        await loadCategoriesModule();
        await loadSubcategoriesModule();
    } catch (err) {
        alert(`❌ Subcategory Save Failed: ${err.message}`);
    } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = 'Save Subcategory &rarr;'; }
    }
}

async function deleteSubcategory(index) {
    try {
        const subcategories = await CMSDataStore.get('subcategories');
        const products = await CMSDataStore.get('products');
        const targetSub = subcategories[index];

        if (!targetSub) return;

        const attachedProducts = (products || []).filter(p => p.subcategory === targetSub.name || p.subcategory === targetSub.slug);
        if (attachedProducts.length > 0) {
            if (!confirm(`⚠️ Warning: ${attachedProducts.length} product(s) belong to subcategory "${targetSub.name}". Deleting this subcategory will reset their subcategory tag. Continue?`)) {
                return;
            }
        } else {
            if (!confirm(`Are you sure you want to delete subcategory "${targetSub.name}"?`)) return;
        }

        if (targetSub.id) await CMSDataStore.deleteRecord('subcategories', targetSub.id);
        if (targetSub.slug) await CMSDataStore.deleteRecord('subcategories', targetSub.slug);

        await loadCategoriesModule();
        await loadSubcategoriesModule();
    } catch (err) {
        alert(`Subcategory deletion failed: ${err.message}`);
    }
}

function openAddCategoryModal() {
    document.getElementById('categoryModalTitle').textContent = 'Add New Category';
    document.getElementById('categoryIdInput').value = '';
    document.getElementById('categoryNameInput').value = '';
    document.getElementById('categoryDescInput').value = '';
    document.getElementById('categoryOrderInput').value = '0';
    if (document.getElementById('categoryVisibleCheck')) document.getElementById('categoryVisibleCheck').checked = true;
    if (document.getElementById('categoryPublishedCheck')) document.getElementById('categoryPublishedCheck').checked = true;
    document.getElementById('categoryImageUrl').value = '';
    document.getElementById('categoryImagePreviewContainer').classList.add('d-none');
    document.getElementById('categoryImagePreview').src = '';

    const modal = new bootstrap.Modal(document.getElementById('categoryFormModal'));
    modal.show();
}

async function editCategoryModal(index) {
    const categories = await CMSDataStore.get('categories');
    const cat = categories[index];
    if (!cat) return;

    document.getElementById('categoryModalTitle').textContent = 'Edit Category';
    document.getElementById('categoryIdInput').value = index;
    document.getElementById('categoryNameInput').value = cat.name || '';
    document.getElementById('categoryDescInput').value = cat.description || '';
    document.getElementById('categoryOrderInput').value = cat.display_order || 0;
    if (document.getElementById('categoryVisibleCheck')) document.getElementById('categoryVisibleCheck').checked = cat.is_visible !== false;
    if (document.getElementById('categoryPublishedCheck')) document.getElementById('categoryPublishedCheck').checked = cat.is_published !== false;
    document.getElementById('categoryImageUrl').value = cat.image_url || '';

    if (cat.image_url) {
        document.getElementById('categoryImagePreview').src = cat.image_url;
        document.getElementById('categoryImagePreviewContainer').classList.remove('d-none');
    } else {
        document.getElementById('categoryImagePreviewContainer').classList.add('d-none');
    }

    const modal = new bootstrap.Modal(document.getElementById('categoryFormModal'));
    modal.show();
}

async function saveCategoryForm(e) {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = 'Saving...'; }

    const indexVal = document.getElementById('categoryIdInput').value;
    const name = document.getElementById('categoryNameInput').value.trim();
    const description = document.getElementById('categoryDescInput').value.trim();
    const display_order = parseInt(document.getElementById('categoryOrderInput').value || '0', 10);
    const is_visible = document.getElementById('categoryVisibleCheck') ? document.getElementById('categoryVisibleCheck').checked : true;
    const is_published = document.getElementById('categoryPublishedCheck') ? document.getElementById('categoryPublishedCheck').checked : true;
    const image_url = document.getElementById('categoryImageUrl').value.trim() || 'images/logo/logo-symbol.png';
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    try {
        const categories = await CMSDataStore.get('categories');
        let payload = {
            name,
            slug,
            description,
            image_url,
            display_order,
            is_visible
        };

        if (indexVal !== '' && !isNaN(indexVal) && categories[indexVal]) {
            const existing = categories[indexVal];
            const targetId = existing.id || existing.slug;
            payload = { ...existing, ...payload, updated_at: new Date().toISOString() };
            await CMSDataStore.updateRecord('categories', targetId, payload);
        } else {
            payload.created_at = new Date().toISOString();
            await CMSDataStore.insertRecord('categories', payload);
        }

        alert('✓ Category saved successfully to database!');

        const modalEl = document.getElementById('categoryFormModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();

        await loadCategoriesModule();
        await loadDashboardData();
    } catch (err) {
        alert(`❌ Category Save Failed: ${err.message}`);
    } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = 'Save Category &rarr;'; }
    }
}

async function toggleCategoryVisibility(index) {
    try {
        const categories = await CMSDataStore.get('categories');
        if (categories && categories[index]) {
            const targetCat = categories[index];
            targetCat.is_visible = (targetCat.is_visible === false) ? true : false;

            const identifier = targetCat.id || targetCat.slug;
            await CMSDataStore.updateRecord('categories', identifier, { is_visible: targetCat.is_visible });

            await loadCategoriesModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Visibility update failed: ${err.message}`);
    }
}

async function toggleCategoryPublished(index) {
    try {
        const categories = await CMSDataStore.get('categories');
        if (categories && categories[index]) {
            const targetCat = categories[index];
            targetCat.is_published = (targetCat.is_published === false) ? true : false;
            targetCat.is_visible = targetCat.is_published;

            const identifier = targetCat.id || targetCat.slug;
            await CMSDataStore.updateRecord('categories', identifier, { is_published: targetCat.is_published, is_visible: targetCat.is_visible });

            await loadCategoriesModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Published status update failed: ${err.message}`);
    }
}

async function deleteCategory(index) {
    try {
        const categories = await CMSDataStore.get('categories');
        const subcategories = await CMSDataStore.get('subcategories');
        const products = await CMSDataStore.get('products');
        const targetCat = categories[index];

        if (!targetCat) return;

        // Safety Check: Check if subcategories or products belong to category
        const attachedSubs = (subcategories || []).filter(s => s.category_slug === targetCat.slug);
        const attachedProds = (products || []).filter(p => p.category_slug === targetCat.slug);

        if (attachedSubs.length > 0 || attachedProds.length > 0) {
            alert(`⚠️ Cannot delete category "${targetCat.name}" because ${attachedSubs.length} subcategory(ies) and ${attachedProds.length} product(s) belong to it. Please reassign or delete dependent subcategories/products first.`);
            return;
        }

        if (confirm(`Are you sure you want to delete category "${targetCat.name}"?`)) {
            if (targetCat.id) await CMSDataStore.deleteRecord('categories', targetCat.id);
            if (targetCat.slug) await CMSDataStore.deleteRecord('categories', targetCat.slug);

            await loadCategoriesModule();
            await loadDashboardData();
        }
    } catch (err) {
        alert(`Category deletion failed: ${err.message}`);
    }
}

// 7. Module: Hero CMS
let _currentHeroSlides = [];

function parseHeroSlideList(hero) {
    if (!hero) return ['images/sections/hero-slide-1.png', 'images/sections/hero-slide-2.png', 'images/sections/hero-slide-3.png'];
    if (hero.background_image) {
        const raw = String(hero.background_image).trim();
        if (raw.startsWith('[') && raw.endsWith(']')) {
            try {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            } catch (e) {}
        }
        if (raw.includes('|||')) {
            return raw.split('|||').map(s => s.trim()).filter(Boolean);
        }
        if (raw.startsWith('data:image')) {
            return [raw];
        }
        const split = raw.split(',').map(s => s.trim()).filter(Boolean);
        if (split.length > 0) return split;
    }
    const legacy = [hero.slide_1, hero.slide_2, hero.slide_3].filter(Boolean);
    if (legacy.length > 0) return legacy;
    return [
        'images/sections/hero-slide-1.png',
        'images/sections/hero-slide-2.png',
        'images/sections/hero-slide-3.png'
    ];
}

async function loadHeroModule() {
    const heroData = await CMSDataStore.get('hero_sections');
    const hero = (heroData && heroData[0]) ? heroData[0] : {
        heading: 'Transforming Workspaces.<br><span class="text-gradient-red">Elevating Possibilities.</span>',
        description: 'Premium office furniture, interior systems, and turnkey workspace solutions designed for modern corporate businesses...',
        slide_1: 'images/sections/hero-slide-1.png',
        slide_2: 'images/sections/hero-slide-2.png',
        slide_3: 'images/sections/hero-slide-3.png',
        background_image: 'images/sections/hero-slide-1.png'
    };

    if (document.getElementById('heroHeadingInput')) document.getElementById('heroHeadingInput').value = hero.heading || '';
    if (document.getElementById('heroDescInput')) document.getElementById('heroDescInput').value = hero.description || '';
    
    _currentHeroSlides = parseHeroSlideList(hero);
    renderHeroSlidesList();
}

function renderHeroSlidesList() {
    const container = document.getElementById('heroSlidesListContainer');
    if (!container) return;

    if (_currentHeroSlides.length === 0) {
        container.innerHTML = `<div class="col-12 text-center py-4 text-muted">No hero slides found. Click "+ Add New Hero Slide" above to add background images.</div>`;
        return;
    }

    let html = '';
    _currentHeroSlides.forEach((slideUrl, idx) => {
        const hasImg = Boolean(slideUrl && slideUrl.trim());
        const previewContent = hasImg ? `
            <img id="heroSlidePreview_${idx}" src="${slideUrl}" alt="Slide ${idx + 1}" class="w-100 h-100" style="object-fit: cover;">
            <span class="position-absolute top-0 start-0 bg-dark text-white fw-bold px-2 py-1 m-2 rounded fs-7 shadow-sm">Slide ${idx + 1}</span>
            <button type="button" class="btn btn-sm btn-danger position-absolute top-0 end-0 m-2 fw-bold" title="Delete this slide" onclick="deleteHeroSlideItem(${idx})">
                ✕ Delete
            </button>
        ` : `
            <div class="d-flex flex-column align-items-center justify-content-center h-100 p-3" style="border-bottom: 1px dashed #cbd5e1; cursor: pointer;" onclick="document.getElementById('heroSlideFile_${idx}').click()">
                <div class="text-danger fs-1 mb-1">🖼️</div>
                <div class="fw-bold text-dark fs-7">No Image Selected</div>
                <small class="text-muted fs-8">Click to upload photo or enter URL below</small>
                <span class="position-absolute top-0 start-0 bg-dark text-white fw-bold px-2 py-1 m-2 rounded fs-7 shadow-sm">Slide ${idx + 1}</span>
                <button type="button" class="btn btn-sm btn-danger position-absolute top-0 end-0 m-2 fw-bold" title="Delete this slide" onclick="event.stopPropagation(); deleteHeroSlideItem(${idx})">
                    ✕ Delete
                </button>
            </div>
        `;

        html += `
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 border shadow-sm rounded-3 overflow-hidden bg-white">
                <div id="heroSlidePreviewWrap_${idx}" class="position-relative bg-light text-center" style="height: 180px; overflow: hidden;">
                    ${previewContent}
                </div>
                <div class="card-body p-3 d-flex flex-column gap-2">
                    <label class="form-label fw-semibold fs-7 mb-0">Image URL / Path</label>
                    <input type="text" class="form-control form-control-sm" id="heroSlideInput_${idx}" value="${slideUrl || ''}" placeholder="Paste Image URL or Click Upload below..." oninput="onHeroSlideUrlChange(${idx}, this.value)">
                    
                    <div class="d-flex gap-2 mt-1">
                        <button type="button" class="btn btn-sm btn-outline-dark w-100 fw-bold fs-7 py-2" onclick="document.getElementById('heroSlideFile_${idx}').click()">
                            📤 Upload Image
                        </button>
                        <input type="file" id="heroSlideFile_${idx}" class="d-none" accept="image/*" onchange="handleHeroSlideUpload(this, ${idx})">
                    </div>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

function onHeroSlideUrlChange(index, val) {
    const trimmed = (val || '').trim();
    _currentHeroSlides[index] = trimmed;
    const wrap = document.getElementById(`heroSlidePreviewWrap_${index}`);
    if (!wrap) return;

    if (trimmed) {
        wrap.innerHTML = `
            <img id="heroSlidePreview_${index}" src="${trimmed}" alt="Slide ${index + 1}" class="w-100 h-100" style="object-fit: cover;">
            <span class="position-absolute top-0 start-0 bg-dark text-white fw-bold px-2 py-1 m-2 rounded fs-7 shadow-sm">Slide ${index + 1}</span>
            <button type="button" class="btn btn-sm btn-danger position-absolute top-0 end-0 m-2 fw-bold" title="Delete this slide" onclick="deleteHeroSlideItem(${index})">
                ✕ Delete
            </button>
        `;
    } else {
        wrap.innerHTML = `
            <div class="d-flex flex-column align-items-center justify-content-center h-100 p-3" style="border-bottom: 1px dashed #cbd5e1; cursor: pointer;" onclick="document.getElementById('heroSlideFile_${index}').click()">
                <div class="text-danger fs-1 mb-1">🖼️</div>
                <div class="fw-bold text-dark fs-7">No Image Selected</div>
                <small class="text-muted fs-8">Click to upload photo or enter URL below</small>
                <span class="position-absolute top-0 start-0 bg-dark text-white fw-bold px-2 py-1 m-2 rounded fs-7 shadow-sm">Slide ${index + 1}</span>
                <button type="button" class="btn btn-sm btn-danger position-absolute top-0 end-0 m-2 fw-bold" title="Delete this slide" onclick="event.stopPropagation(); deleteHeroSlideItem(${index})">
                    ✕ Delete
                </button>
            </div>
        `;
    }
}

function addHeroSlideItem(defaultUrl = '') {
    _currentHeroSlides.push(defaultUrl || '');
    renderHeroSlidesList();
}

function deleteHeroSlideItem(index) {
    if (_currentHeroSlides.length <= 1) {
        alert('You must have at least 1 hero background slide.');
        return;
    }
    if (confirm(`Are you sure you want to delete Slide ${index + 1}?`)) {
        _currentHeroSlides.splice(index, 1);
        renderHeroSlidesList();
    }
}

async function handleHeroSlideUpload(input, index) {
    if (!input.files || !input.files[0]) return;
    const file = input.files[0];
    const wrap = document.getElementById(`heroSlidePreviewWrap_${index}`);

    if (wrap) {
        wrap.style.opacity = '0.5';
    }

    try {
        const uploadResult = await uploadToCloudinary(file);
        const imageUrl = uploadResult.url;

        _currentHeroSlides[index] = imageUrl;
        renderHeroSlidesList();
        alert(`✓ Slide ${index + 1} image uploaded successfully to Cloudinary!`);
    } catch (err) {
        if (wrap) wrap.style.opacity = '1';
        alert(`Slide upload error: ${err.message}`);
    }
}

async function saveHeroCMS(e) {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = 'Saving Hero Content...'; }

    const heading = document.getElementById('heroHeadingInput').value;
    const description = document.getElementById('heroDescInput').value;
    
    // Collect non-empty slides
    const cleanSlides = _currentHeroSlides.map(s => String(s).trim()).filter(Boolean);
    if (cleanSlides.length === 0) {
        cleanSlides.push('images/sections/hero-slide-1.png');
    }

    const bg_image_url = cleanSlides[0] || 'images/sections/hero-slide-1.png';
    const background_image = cleanSlides.join('|||');

    try {
        const heroRecord = [{ heading, description, bg_image_url, background_image, is_custom_updated: true }];
        await CMSDataStore.save('hero_sections', heroRecord);
        alert('✓ Hero section and all background slides updated successfully in database!');
    } catch (err) {
        alert(`Failed to update Hero section: ${err.message}`);
    } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = 'Save Hero Content &rarr;'; }
    }
}

// 8. Module: About Us CMS
async function loadAboutModule() {
    const aboutData = await CMSDataStore.get('about_sections');
    const about = (aboutData && aboutData[0]) ? aboutData[0] : {
        title: 'Creating Workspaces That Work for You',
        main_description: 'At Vishista Office Solutions Pvt Ltd, we specialize in delivering world-class workspace environments.'
    };

    document.getElementById('aboutTitleInput').value = about.title || '';
    document.getElementById('aboutDescInput').value = about.main_description || '';
}

async function saveAboutCMS(e) {
    e.preventDefault();
    const title = document.getElementById('aboutTitleInput').value;
    const main_description = document.getElementById('aboutDescInput').value;

    try {
        const aboutRecord = [{ title, main_description, is_custom_updated: true }];
        await CMSDataStore.save('about_sections', aboutRecord);
        alert('✓ About Us content updated successfully in database!');
    } catch (err) {
        alert(`Failed to update About Us section: ${err.message}`);
    }
}

// 9. Module: Footer CMS
async function loadFooterModule() {
    const footerData = await CMSDataStore.get('footer_content');
    const footer = (footerData && footerData[0]) ? footerData[0] : {
        company_description: 'Vishista Office Solutions Pvt Ltd is a premier provider of corporate office furniture...',
        address: 'Plot No 45, Jubilee Hills, Road No 36, Hyderabad, Telangana 500033',
        phone: '+91 98490 58444',
        email: 'info@vishista.com'
    };

    document.getElementById('footerCompanyDescInput').value = footer.company_description || '';
    document.getElementById('footerAddressInput').value = footer.address || '';
    document.getElementById('footerPhoneInput').value = footer.phone || '';
    document.getElementById('footerEmailInput').value = footer.email || '';
}

async function saveFooterCMS(e) {
    e.preventDefault();
    const company_description = document.getElementById('footerCompanyDescInput').value;
    const address = document.getElementById('footerAddressInput').value;
    const phone = document.getElementById('footerPhoneInput').value;
    const email = document.getElementById('footerEmailInput').value;

    try {
        const footerRecord = [{ company_description, address, phone, email, is_custom_updated: true }];
        await CMSDataStore.save('footer_content', footerRecord);
        alert('✓ Footer contact details updated successfully in database!');
    } catch (err) {
        alert(`Failed to update Footer content: ${err.message}`);
    }
}

// Export functions to global scope
window.showAdminDashboard = showAdminDashboard;
window.showAuthScreen = showAuthScreen;
window.switchTab = switchTab;
window.handleImageUploadGeneric = handleImageUploadGeneric;
window.openAddProductModal = openAddProductModal;
window.editProductModal = editProductModal;
window.handleCloudinaryProductUpload = handleCloudinaryProductUpload;
window.saveProductForm = saveProductForm;
window.toggleProductVisibility = toggleProductVisibility;
window.deleteProduct = deleteProduct;
window.openAddCategoryModal = openAddCategoryModal;
window.editCategoryModal = editCategoryModal;
window.saveCategoryForm = saveCategoryForm;
window.toggleCategoryVisibility = toggleCategoryVisibility;
window.toggleCategoryPublished = toggleCategoryPublished;
window.deleteCategory = deleteCategory;
window.openAddProjectModal = openAddProjectModal;
window.editProjectModal = editProjectModal;
window.saveProjectForm = saveProjectForm;
window.toggleProjectVisibility = toggleProjectVisibility;
window.deleteProject = deleteProject;
window.saveHeroCMS = saveHeroCMS;
window.saveAboutCMS = saveAboutCMS;
window.saveFooterCMS = saveFooterCMS;
window.openAddSubcategoryModal = openAddSubcategoryModal;
window.editSubcategoryModal = editSubcategoryModal;
window.saveSubcategoryForm = saveSubcategoryForm;
window.deleteSubcategory = deleteSubcategory;
window.loadSubcategoriesModule = loadSubcategoriesModule;
window.renderDedicatedSubcategoriesTable = renderDedicatedSubcategoriesTable;
window.addHeroSlideItem = addHeroSlideItem;
window.deleteHeroSlideItem = deleteHeroSlideItem;
window.handleHeroSlideUpload = handleHeroSlideUpload;
window.onHeroSlideUrlChange = onHeroSlideUrlChange;
window.onProductCategoryChange = onProductCategoryChange;
window.handleAdditionalProductImageUpload = handleAdditionalProductImageUpload;
window.removeAdditionalProductImage = removeAdditionalProductImage;
window.toggleMobileSidebar = toggleMobileSidebar;


