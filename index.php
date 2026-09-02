
<?php include('header.php'); ?>


<!-- Animated Hero Section -->
<section class="hero-animated-section position-relative text-white overflow-hidden py-5 d-flex align-items-center" style="min-height: 88vh;">
    <!-- Animated Background Image Container with Auto Slider -->
    <div class="hero-bg-animated-wrapper">
        <div class="hero-slide active" style="background-image: url('images/sections/hero-banner-1.jpg');"></div>
        <div class="hero-bg-overlay"></div>
    </div>

    <div class="tf-container position-relative py-5" style="z-index: 2;">
        <div class="row align-items-center g-4">
            <div class="col-lg-9 col-xl-8">
                
                <!-- Animated Badge -->
                <div class="hero-badge-wrap mb-4">
                    <span class="badge hero-badge text-uppercase px-4 py-3 fw-black tracking-wider shadow-lg">
                        <i class="icon icon-storefront me-2 text-warning"></i> Vishista Office Solutions Pvt Ltd
                    </span>
                </div>

                <!-- Animated Main Heading -->
                <h1 class="display-3 fw-extrabold text-white mb-4 hero-title" style="line-height: 1.12; font-family: 'Inter', sans-serif; text-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                    Transforming Workspaces.<br>
                    <span class="text-gradient-red">Elevating Possibilities.</span>
                </h1>

                <!-- Animated Subheading -->
                <p class="fs-5 text-white mb-5 hero-subtitle fw-semibold" style="max-width: 720px; line-height: 1.7; font-size: 1.25rem !important; text-shadow: 2px 2px 8px #000000, 0 0 12px #000000, 0 2px 4px #000000 !important;">
                    Premium office furniture, interior systems, and turnkey workspace solutions designed for modern corporate businesses, MNCs, educational institutions, and professional environments.
                </p>

            </div>
        </div>
    </div>
</section>

<style>
    .hero-animated-section {
        background-color: #0f0f0f;
        overflow: hidden !important;
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
    }
    .hero-animated-section::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
    }
    .hero-bg-animated-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden !important;
        z-index: 1;
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
    }
    .hero-bg-animated-wrapper::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
    }
    .hero-slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        opacity: 0;
        transform: scale(1.04);
        transition: opacity 0.8s ease-in-out, transform 2.5s ease-out;
    }
    .hero-slide.active {
        opacity: 1;
        transform: scale(1);
    }
    .hero-bg-overlay {
        display: none !important;
    }

    .hero-badge-wrap {
        animation: fadeInDown 0.8s ease-out forwards;
    }
    .hero-badge {
        background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%);
        border: 2px solid rgba(255, 255, 255, 0.6);
        color: #ffffff !important;
        border-radius: 50px;
        letter-spacing: 1.5px;
        font-size: 1.15rem !important;
        font-weight: 800 !important;
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.6);
        display: inline-flex;
        align-items: center;
    }

    .hero-title {
        animation: fadeInUp 0.9s ease-out 0.2s both;
        color: #ffffff !important;
        font-weight: 900 !important;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.9) !important;
    }
    .text-gradient-red {
        color: #ff3333 !important;
        background: none !important;
        -webkit-text-fill-color: #ff3333 !important;
        font-weight: 900 !important;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 51, 51, 0.5) !important;
    }

    .hero-subtitle {
        animation: fadeInUp 0.9s ease-out 0.4s both;
        color: #ffffff !important;
        font-weight: 700 !important;
        background: none !important;
        border: none !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        padding: 0 !important;
        text-shadow: 2px 2px 8px #000000, 0 0 12px #000000, 0 2px 4px #000000 !important;
    }

    .hero-actions {
        animation: fadeInUp 0.9s ease-out 0.6s both;
    }

    .hero-btn-primary {
        background-color: #d32f2f;
        border: none;
        border-radius: 6px;
        font-size: 15px;
        box-shadow: 0 8px 25px rgba(211, 47, 47, 0.4);
        transition: all 0.3s ease;
    }
    .hero-btn-primary:hover {
        background-color: #b71c1c;
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(211, 47, 47, 0.6);
    }

    .hero-btn-secondary {
        border-radius: 6px;
        font-size: 15px;
        backdrop-filter: blur(4px);
        transition: all 0.3s ease;
    }
    .hero-btn-secondary:hover {
        background-color: rgba(255,255,255,0.15);
        transform: translateY(-3px);
    }

    .hero-stats {
        animation: fadeInUp 0.9s ease-out 0.8s both;
    }

    .glass-stat-chip {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        padding: 8px 16px;
        border-radius: 50px;
        backdrop-filter: blur(10px);
        display: inline-flex;
        align-items: center;
        transition: all 0.3s ease;
        animation: heroFloat 4s infinite ease-in-out;
    }
    .glass-stat-chip:hover {
        background: rgba(255, 255, 255, 0.16);
        border-color: rgba(255, 82, 82, 0.5);
    }

    @keyframes heroFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .hero-badge {
            font-size: 0.95rem !important;
            padding: 8px 16px !important;
            letter-spacing: 1px !important;
            white-space: normal;
            text-align: center;
        }
        .hero-title {
            font-size: 2.2rem !important;
        }
        .hero-subtitle {
            font-size: 1.05rem !important;
        }
    }
</style>

<!-- Company Introduction Section -->

<!-- Company Introduction Section -->
<section class="py-5 bg-light">
    <div class="tf-container py-4">
        <div class="row align-items-center g-5">
            <div class="col-lg-6">
                <div class="pe-lg-4">
                    <span class="text-danger fw-black text-uppercase tracking-wider d-block mb-3" style="font-size: 1.6rem !important; letter-spacing: 2px; font-weight: 900 !important; color: #d32f2f !important;">Corporate Overview</span>
                    <h2 class="fw-extrabold text-dark mb-4" style="font-size: 3.2rem !important; line-height: 1.15; font-weight: 800 !important; color: #111111 !important;">
                        Creating Workspaces That Work for You
                    </h2>
                    <p class="text-dark fw-bold mb-3" style="font-size: 1.35rem !important; line-height: 1.7; color: #111111 !important;">
                        <strong>Vishista Office Solutions Pvt Ltd</strong> is a leading provider of premium office furniture, interior systems, and turnkey workspace solutions, serving corporate, commercial, and institutional clients across Telangana and Andhra Pradesh.
                    </p>
                    <p class="text-dark fw-bold mb-3" style="font-size: 1.35rem !important; line-height: 1.7; color: #111111 !important;">
                        With a strong focus on quality, innovation, and customer satisfaction, the company delivers modern, efficient, and future-ready work environments tailored to the evolving needs of today's businesses.
                    </p>
                    <p class="text-dark fw-bold mb-4" style="font-size: 1.35rem !important; line-height: 1.7; color: #111111 !important;">
                        Our expertise spans design consultation, product selection, multi-vendor coordination, installation, and dedicated after-sales support — making us a trusted partner for organizations seeking reliable and professional workspace transformation.
                    </p>
                    <a href="about.html" class="btn btn-dark btn-lg px-4 py-3 fw-bold text-uppercase shadow-sm" style="border-radius: 4px; font-size: 14px;">
                        Discover Our Story &rarr;
                    </a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="position-relative rounded-4 overflow-hidden shadow-sm bg-white p-3 border border-1 border-light-subtle d-flex align-items-center justify-content-center">
                    <img src="images/sections/corporate-chair.jpg" alt="Corporate Executive Workspace" class="img-fluid w-100 rounded-3" style="object-fit: contain; max-height: 500px;">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Explore Our Workspace Solutions (Product Categories Grid) -->
<section class="py-5 bg-white">
    <div class="tf-container py-4">
        <div class="text-center mb-5" style="max-width: 700px; margin: 0 auto;">
            <span class="text-danger fw-black text-uppercase tracking-wider d-block mb-2" style="font-size: 1.2rem !important; letter-spacing: 1.5px; font-weight: 800 !important; color: #d32f2f !important;">Product Categories</span>
            <h2 class="display-6 fw-extrabold text-dark mt-2 mb-3" style="font-weight: 800 !important;">Explore Our Workspace Solutions</h2>
            <p class="text-secondary fw-semibold" style="font-size: 1.15rem !important;">Discover our comprehensive collection of modular office furniture, ergonomic seating, acoustic pods, and turnkey architectural products.</p>
        </div>

        <div class="row g-4" id="categoriesGridContainer">
            
            <!-- Workstations -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <a href="product-categories.html?category=workstations" class="position-relative overflow-hidden d-block" style="height: 250px; width: 100%; background: #f8f9fa;">
                        <img src="images/categories/cat_workstations.jpg" alt="Workstations" class="w-100 h-100" style="object-fit: cover; object-position: center; width: 100% !important; height: 100% !important; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold shadow-sm">Modular Workspace</span>
                    </a>
                    <div class="card-body p-4 d-flex flex-column">
                        <h3 class="fw-black text-dark mb-2" style="font-size: 1.65rem !important; font-weight: 900 !important; color: #111111 !important; font-family: 'Inter', sans-serif;">
                            <a href="product-categories.html?category=workstations" class="text-decoration-none text-dark">Workstations</a>
                        </h3>
                        <p class="text-secondary mb-4 flex-grow-1" style="font-size: 1.15rem !important; font-weight: 600 !important; line-height: 1.6 !important; color: #333333 !important;">Height Adjustable Series, Desking Series, and Panel Series designed for collaborative and ergonomic team layouts.</p>
                        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
                            <a href="product-categories.html?category=workstations" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3 py-2" style="font-size: 13px;">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-extrabold p-0 text-decoration-none" style="font-size: 15px;" onclick="openEnquiryModal('Workstations Series')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tables -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <a href="product-categories.html?category=tables" class="position-relative overflow-hidden d-block" style="height: 250px; width: 100%; background: #f8f9fa;">
                        <img src="images/categories/cat_tables.png" alt="Tables" class="w-100 h-100" style="object-fit: cover; object-position: center; width: 100% !important; height: 100% !important; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold shadow-sm">Executive Suite</span>
                    </a>
                    <div class="card-body p-4 d-flex flex-column">
                        <h3 class="fw-black text-dark mb-2" style="font-size: 1.65rem !important; font-weight: 900 !important; color: #111111 !important; font-family: 'Inter', sans-serif;">
                            <a href="product-categories.html?category=tables" class="text-decoration-none text-dark">Tables</a>
                        </h3>
                        <p class="text-secondary mb-4 flex-grow-1" style="font-size: 1.15rem !important; font-weight: 600 !important; line-height: 1.6 !important; color: #333333 !important;">Executive Cabin Tables, Conference Meeting Tables, Cafe Tables, and Modular Training Tables for modern corporate suites.</p>
                        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
                            <a href="product-categories.html?category=tables" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3 py-2" style="font-size: 13px;">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-extrabold p-0 text-decoration-none" style="font-size: 15px;" onclick="openEnquiryModal('Corporate Tables')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Storage -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <a href="product-categories.html?category=storage" class="position-relative overflow-hidden d-block" style="height: 250px; width: 100%; background: #f8f9fa;">
                        <img src="images/categories/cat_storage.png" alt="Storage Systems" class="w-100 h-100" style="object-fit: cover; object-position: center; width: 100% !important; height: 100% !important; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold shadow-sm">Storage Systems</span>
                    </a>
                    <div class="card-body p-4 d-flex flex-column">
                        <h3 class="fw-black text-dark mb-2" style="font-size: 1.65rem !important; font-weight: 900 !important; color: #111111 !important; font-family: 'Inter', sans-serif;">
                            <a href="product-categories.html?category=storage" class="text-decoration-none text-dark">Storage Systems</a>
                        </h3>
                        <p class="text-secondary mb-4 flex-grow-1" style="font-size: 1.15rem !important; font-weight: 600 !important; line-height: 1.6 !important; color: #333333 !important;">Prelam Storage Credenzas, Heavy-Duty Metal Filing Cabinets, High-Density Compactor Storage, and Personal Lockers.</p>
                        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
                            <a href="product-categories.html?category=storage" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3 py-2" style="font-size: 13px;">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-extrabold p-0 text-decoration-none" style="font-size: 15px;" onclick="openEnquiryModal('Storage Systems')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Seating -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <a href="product-categories.html?category=seating" class="position-relative overflow-hidden d-block" style="height: 250px; width: 100%; background: #f8f9fa;">
                        <img src="images/categories/cat_seating.jpg" alt="Seating" class="w-100 h-100" style="object-fit: cover; object-position: center; width: 100% !important; height: 100% !important; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold shadow-sm">Seating</span>
                    </a>
                    <div class="card-body p-4 d-flex flex-column">
                        <h3 class="fw-black text-dark mb-2" style="font-size: 1.65rem !important; font-weight: 900 !important; color: #111111 !important; font-family: 'Inter', sans-serif;">
                            <a href="product-categories.html?category=seating" class="text-decoration-none text-dark">Seating</a>
                        </h3>
                        <p class="text-secondary mb-4 flex-grow-1" style="font-size: 1.15rem !important; font-weight: 600 !important; line-height: 1.6 !important; color: #333333 !important;">Premium High-Back Mesh Chairs, Genuine Leather Executive Armchairs, Training Chairs, and Cafe Seating.</p>
                        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
                            <a href="product-categories.html?category=seating" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3 py-2" style="font-size: 13px;">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-extrabold p-0 text-decoration-none" style="font-size: 15px;" onclick="openEnquiryModal('Ergonomic Chairs')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Soft Seating -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <a href="product-categories.html?category=soft-seating" class="position-relative overflow-hidden d-block" style="height: 250px; width: 100%; background: #f8f9fa;">
                        <img src="images/categories/cat_soft_seating.jpg" alt="Soft Seating" class="w-100 h-100" style="object-fit: cover; object-position: center; width: 100% !important; height: 100% !important; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold shadow-sm">Soft Seating</span>
                    </a>
                    <div class="card-body p-4 d-flex flex-column">
                        <h3 class="fw-black text-dark mb-2" style="font-size: 1.65rem !important; font-weight: 900 !important; color: #111111 !important; font-family: 'Inter', sans-serif;">
                            <a href="product-categories.html?category=soft-seating" class="text-decoration-none text-dark">Soft Seating</a>
                        </h3>
                        <p class="text-secondary mb-4 flex-grow-1" style="font-size: 1.15rem !important; font-weight: 600 !important; line-height: 1.6 !important; color: #333333 !important;">Lounge Chairs, Executive Sofas, Modular Collaborative Seating, Pouffes, and Occasional Center Tables.</p>
                        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
                            <a href="product-categories.html?category=soft-seating" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3 py-2" style="font-size: 13px;">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-extrabold p-0 text-decoration-none" style="font-size: 15px;" onclick="openEnquiryModal('Soft Seating')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pods -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <a href="product-categories.html?category=pods" class="position-relative overflow-hidden d-block" style="height: 250px; width: 100%; background: #f8f9fa;">
                        <img src="images/categories/cat_pods.jpg" alt="Pods" class="w-100 h-100" style="object-fit: cover; object-position: center; width: 100% !important; height: 100% !important; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold shadow-sm">Pods</span>
                    </a>
                    <div class="card-body p-4 d-flex flex-column">
                        <h3 class="fw-black text-dark mb-2" style="font-size: 1.65rem !important; font-weight: 900 !important; color: #111111 !important; font-family: 'Inter', sans-serif;">
                            <a href="product-categories.html?category=pods" class="text-decoration-none text-dark">Pods</a>
                        </h3>
                        <p class="text-secondary mb-4 flex-grow-1" style="font-size: 1.15rem !important; font-weight: 600 !important; line-height: 1.6 !important; color: #333333 !important;">Private Acoustic Phone Pods and Collaborative Meeting Pods engineered for sound isolation and distraction-free calls.</p>
                        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
                            <a href="product-categories.html?category=pods" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3 py-2" style="font-size: 13px;">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-extrabold p-0 text-decoration-none" style="font-size: 15px;" onclick="openEnquiryModal('Pods')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Carpets -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <a href="product-categories.html?category=carpets" class="position-relative overflow-hidden d-block" style="height: 250px; width: 100%; background: #f8f9fa;">
                        <img src="images/categories/cat_carpets.jpg" alt="Carpets" class="w-100 h-100" style="object-fit: cover; object-position: center; width: 100% !important; height: 100% !important; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold shadow-sm">Carpets</span>
                    </a>
                    <div class="card-body p-4 d-flex flex-column">
                        <h3 class="fw-black text-dark mb-2" style="font-size: 1.65rem !important; font-weight: 900 !important; color: #111111 !important; font-family: 'Inter', sans-serif;">
                            <a href="product-categories.html?category=carpets" class="text-decoration-none text-dark">Carpets</a>
                        </h3>
                        <p class="text-secondary mb-4 flex-grow-1" style="font-size: 1.15rem !important; font-weight: 600 !important; line-height: 1.6 !important; color: #333333 !important;">High-performance Interface Carpet Tiles designed for heavy traffic commercial office floors.</p>
                        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
                            <a href="product-categories.html?category=carpets" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3 py-2" style="font-size: 13px;">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-extrabold p-0 text-decoration-none" style="font-size: 15px;" onclick="openEnquiryModal('Carpets')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Outdoor -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <a href="product-categories.html?category=outdoor" class="position-relative overflow-hidden d-block" style="height: 250px; width: 100%; background: #f8f9fa;">
                        <img src="images/categories/cat_outdoor.jpg" alt="Outdoor" class="w-100 h-100" style="object-fit: cover; object-position: center; width: 100% !important; height: 100% !important; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold shadow-sm">Outdoor</span>
                    </a>
                    <div class="card-body p-4 d-flex flex-column">
                        <h3 class="fw-black text-dark mb-2" style="font-size: 1.65rem !important; font-weight: 900 !important; color: #111111 !important; font-family: 'Inter', sans-serif;">
                            <a href="product-categories.html?category=outdoor" class="text-decoration-none text-dark">Outdoor</a>
                        </h3>
                        <p class="text-secondary mb-4 flex-grow-1" style="font-size: 1.15rem !important; font-weight: 600 !important; line-height: 1.6 !important; color: #333333 !important;">Weatherproof Loom Crafts outdoor lounge sets, patio tables, and terrace seating for corporate cafeterias.</p>
                        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
                            <a href="product-categories.html?category=outdoor" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3 py-2" style="font-size: 13px;">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-extrabold p-0 text-decoration-none" style="font-size: 15px;" onclick="openEnquiryModal('Outdoor')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Educational -->
            <div class="col-lg-4 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-3 overflow-hidden product-cat-card" style="transition: all 0.3s ease;">
                    <a href="product-categories.html?category=educational" class="position-relative overflow-hidden d-block" style="height: 250px; width: 100%; background: #f8f9fa;">
                        <img src="images/categories/cat_education.png" alt="Educational" class="w-100 h-100" style="object-fit: cover; object-position: center; width: 100% !important; height: 100% !important; transition: transform 0.5s ease;">
                        <span class="position-absolute top-0 end-0 bg-danger text-white fs-7 px-3 py-1 m-3 rounded-pill fw-bold shadow-sm">Educational</span>
                    </a>
                    <div class="card-body p-4 d-flex flex-column">
                        <h3 class="fw-black text-dark mb-2" style="font-size: 1.65rem !important; font-weight: 900 !important; color: #111111 !important; font-family: 'Inter', sans-serif;">
                            <a href="product-categories.html?category=educational" class="text-decoration-none text-dark">Educational</a>
                        </h3>
                        <p class="text-secondary mb-4 flex-grow-1" style="font-size: 1.15rem !important; font-weight: 600 !important; line-height: 1.6 !important; color: #333333 !important;">Ergonomic Classroom Desks, Library Furniture, Hostel Storage Units, and Heavy-Duty Auditorium Seating.</p>
                        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
                            <a href="product-categories.html?category=educational" class="btn btn-outline-danger btn-sm fw-bold text-uppercase px-3 py-2" style="font-size: 13px;">Explore Category</a>
                            <button type="button" class="btn btn-link text-danger fw-extrabold p-0 text-decoration-none" style="font-size: 15px;" onclick="openEnquiryModal('Educational')">Enquire &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="py-5 bg-light">
    <div class="tf-container py-4">
        <div class="text-center mb-5" style="max-width: 700px; margin: 0 auto;">
            <span class="text-danger fw-black text-uppercase tracking-wider d-block mb-2" style="font-size: 1.2rem !important; letter-spacing: 1.5px; font-weight: 800 !important; color: #d32f2f !important;">Our Excellence</span>
            <h2 class="display-6 fw-extrabold text-dark mt-2 mb-3" style="font-weight: 800 !important;">Why Choose Vishista Office Solutions</h2>
            <p class="text-secondary fw-semibold" style="font-size: 1.15rem !important;">We combine deep domain experience with premium product lines to deliver world-class turnkey workspace environments.</p>
        </div>

        <div class="scrolling-marquee-container">
            <div class="scrolling-marquee-track">
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">01</span>
                    <h5 class="fw-bold text-dark mb-2">20+ Years of Industry Expertise</h5>
                    <p class="text-secondary fs-7 mb-0">Decades of leadership delivering complex, large-scale MNC and enterprise workspace projects across South India.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">02</span>
                    <h5 class="fw-bold text-dark mb-2">End-to-End Workspace Solutions</h5>
                    <p class="text-secondary fs-7 mb-0">Complete single-window support from initial space planning and product selection to installation and after-sales care.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">03</span>
                    <h5 class="fw-bold text-dark mb-2">Trusted by Large MNCs</h5>
                    <p class="text-secondary fs-7 mb-0">Proven track record of fulfilling strict architectural standards and multi-vendor requirements for global corporations.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">04</span>
                    <h5 class="fw-bold text-dark mb-2">Premium OEM Partnerships</h5>
                    <p class="text-secondary fs-7 mb-0">Direct access to industry-leading manufacturers including VIAK, ESS, DURIAN, Interface, and Loom Crafts.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">05</span>
                    <h5 class="fw-bold text-dark mb-2">Customer-Centric Approach</h5>
                    <p class="text-secondary fs-7 mb-0">Customized layout proposals tailored specifically to your floor plan, corporate identity, and budget targets.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">06</span>
                    <h5 class="fw-bold text-dark mb-2">Strong Leadership Execution</h5>
                    <p class="text-secondary fs-7 mb-0">Guided by seasoned executives with extensive background in executive workspace systems.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">07</span>
                    <h5 class="fw-bold text-dark mb-2">Timely Delivery, Every Time</h5>
                    <p class="text-secondary fs-7 mb-0">Streamlined supply chain logistics and dedicated site supervision ensuring prompt project handovers.</p>
                </div>
                <div class="card border-0 shadow-sm p-4 rounded-3 bg-white" style="width: 320px; flex-shrink: 0;">
                    <span class="fs-1 fw-extrabold text-danger mb-3 d-block">08</span>
                    <h5 class="fw-bold text-dark mb-2">Commitment to Excellence</h5>
                    <p class="text-secondary fs-7 mb-0">Uncompromising quality assurance across materials, structural integrity, and ergonomic performance.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action Banner -->
<section class="py-5 text-white" style="background: linear-gradient(135deg, #111111 0%, #292929 100%);">
    <div class="tf-container text-center py-5">
        <h2 class="fw-extrabold text-white mb-3" style="font-size: 2.8rem !important; font-weight: 800 !important;">Ready to Elevate Your Workspace?</h2>
        <p class="text-white-50 mb-5" style="max-width: 750px; margin: 0 auto; font-size: 1.35rem !important; font-weight: 600 !important; color: #e0e0e0 !important; line-height: 1.6;">
            Connect with our workspace design specialists today to schedule a consultation or receive a detailed corporate proposal.
        </p>
        <div class="d-flex justify-content-center">
            <a href="contact.html" class="btn btn-danger btn-lg px-5 py-3 fw-black text-uppercase shadow-lg" style="border-radius: 6px; background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none; font-size: 18px; letter-spacing: 1px;">
                Get in Touch &rarr;
            </a>
        </div>
    </div>
</section>

<style>
    @keyframes popupBounce {
        0% { transform: scale(0.8) translateY(-20px); opacity: 0; }
        100% { transform: scale(1) translateY(0); opacity: 1; }
    }
    .product-cat-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 16px 35px rgba(0,0,0,0.15) !important;
    }
    .product-cat-card:hover img {
        transform: scale(1.08);
    }
</style><?php include('footer.php'); ?>

