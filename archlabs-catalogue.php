<?php include('header.php'); ?>

<!-- Page Header Banner with Filter Controls -->
<section class="py-5 bg-dark text-white text-center position-relative" style="background: linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url('images/sections/hero-workspace.jpg') center/cover no-repeat;">
    <div class="tf-container py-4">
        <span id="seriesBadge" class="badge bg-danger text-uppercase px-3 py-2 mb-3 fw-bold tracking-widest fs-7">Vishista Signature Line</span>
        <h1 id="seriesTitle" class="display-4 fw-bold text-white mt-2 mb-3">Our Exclusive Collection</h1>
        <p id="seriesSubtitle" class="fs-5 text-white-50 max-w-700 mx-auto mb-4" style="max-width: 750px;">
            ArchLabs Architectural Seating & Turnkey Product Lines. Engineered for Movement. Designed for Focus.
        </p>

        <!-- Filter Action Controls -->
        <div class="d-flex flex-wrap justify-content-center align-items-center gap-3">
            <button type="button" class="btn btn-danger btn-lg px-4 py-2.5 fw-bold text-uppercase rounded-pill shadow-lg d-inline-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#seriesFilterModal" style="background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none; font-size: 15px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                <span>Filter by Series</span>
            </button>

            <button type="button" id="showAllSeriesBtn" class="btn btn-outline-light btn-lg px-4 py-2.5 fw-bold text-uppercase rounded-pill shadow-sm" onclick="filterExclusiveSeries('all')" style="display: none; font-size: 15px;">
                View All Series
            </button>
        </div>
    </div>
</section>

<!-- Filter Series Modal -->
<div class="modal fade" id="seriesFilterModal" tabindex="-1" aria-labelledby="seriesFilterModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="modal-header bg-dark text-white border-0 px-4 py-3" style="background: linear-gradient(135deg, #111111 0%, #222222 100%);">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 mb-1 fs-7">Catalogue Navigation</span>
                    <h4 class="modal-title fw-bold text-white mb-0" id="seriesFilterModalLabel">Filter by Product Series</h4>
                </div>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4 bg-light">
                <p class="text-secondary fw-semibold mb-3">Select a series below to isolate and view only that specific collection:</p>
                <div class="row g-2" id="archlabs-filter-buttons">
                    <div class="col-12 mb-1">
                        <button type="button" class="btn btn-danger w-100 text-start py-2.5 px-3 fw-bold rounded-3" onclick="filterExclusiveSeries('all')" data-bs-dismiss="modal" style="background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); border: none;">
                            ✓ Show All Series (Complete Showcase)
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('mesh-series')" data-bs-dismiss="modal">
                            &bull; Mesh Series (30 Models)
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('leather-series')" data-bs-dismiss="modal">
                            &bull; Leather Series (5 Models)
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('training-series')" data-bs-dismiss="modal">
                            &bull; Training Series (7 Models)
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('metro-linea')" data-bs-dismiss="modal">
                            &bull; Metro Linea Public Seating
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('cafeteria-series')" data-bs-dismiss="modal">
                            &bull; Cafeteria Series (7 Models)
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('workstations-ha')" data-bs-dismiss="modal">
                            &bull; Workstations - Height Adjustable Series
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('workstations-ds')" data-bs-dismiss="modal">
                            &bull; Workstations - Desking Series
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('workstations-panel')" data-bs-dismiss="modal">
                            &bull; Workstations - Panel Series
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('tables-cabin')" data-bs-dismiss="modal">
                            &bull; Tables - Cabin Tables
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('tables-meeting')" data-bs-dismiss="modal">
                            &bull; Tables - Meeting Tables
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('storage-prelam')" data-bs-dismiss="modal">
                            &bull; Storage - Prelam Storage Systems
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('pods')" data-bs-dismiss="modal">
                            &bull; Acoustic Work Pods
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('carpets')" data-bs-dismiss="modal">
                            &bull; Interface Carpet Tiles
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('outdoor')" data-bs-dismiss="modal">
                            &bull; Outdoor Furniture
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('educational')" data-bs-dismiss="modal">
                            &bull; Educational Solutions
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-outline-dark w-100 text-start py-2.5 px-3 fw-bold rounded-3 series-filter-btn" onclick="filterExclusiveSeries('accessories')" data-bs-dismiss="modal">
                            &bull; Workspace Accessories
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Main Catalogue Container -->
<div class="py-5 bg-white">
    <div class="tf-container">

        <!-- CMS Dynamic Container (populated by public-sync.js when DB has data) -->
        <div id="archlabs-cms-container" style="display:none;"></div>

        <!-- Static Fallback Content (hidden when CMS loads) -->
        <div id="archlabs-static-content">

        <!-- 1. MESH SERIES -->
        <section id="mesh-series" class="catalogue-series-section mb-5 pt-4" data-series-slug="mesh-series">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1">30 Line-Wise Models</span>
                    <h2 class="fw-bold text-dark mb-0">Mesh Series</h2>
                    <p class="text-muted fs-7 mb-0">Engineered for Movement &amp; All-Day Ergonomic Focus</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('ArchLabs Mesh Series Chairs')">Enquire for Mesh Series</button>
            </div>

            <div class="row g-4">
                
                <!-- Veloz -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_4.png" alt="Veloz Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Veloz</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Synchro-tilt with multi-position lock, 3D armrest with gel PU pad, Aluminium diecast base, Adjustable headrest.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Veloz Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feather -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_5.png" alt="Feather Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Feather</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Seamless reclining mechanism, Adjustable armrests, High-resilience cushioning, Adjustable headrest, Smooth castors.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Feather Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Eiffel -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_6.png" alt="Eiffel Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Eiffel</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Contoured backrest, Integrated lumbar support, High-density foam seat, Smooth-reclining mechanism.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Eiffel Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mustang -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_7.png" alt="Mustang Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Mustang</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Generously-padded seat, Adjustable backrest, Smooth recline, Reinforced heavy-duty base.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Mustang Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bravo -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_8.png" alt="Bravo Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Bravo</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Plush cushioning, Smooth-reclining mechanism, Adjustable armrests, Heavy-duty castors, Robust Frame.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Bravo Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Polar -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_9.png" alt="Polar Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Polar</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">High density moulded foam, Reinforced base, Adjustable armrests, Integrated lumbar support.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Polar Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Glanza -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_10.png" alt="Glanza Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Glanza</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Sturdy Metal base, High density moulded foam, Contoured backrest, Smooth-reclining mechanism.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Glanza Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Yaris -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_11.png" alt="Yaris Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Yaris</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Supportive mesh back, Adjustable armrests, High density foam, Smooth-tilt mechanism.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Yaris Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quartz -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_12.png" alt="Quartz Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Quartz</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Robust Metal Frame, Multi-Position Locking, Synchronized reclining, Customizable seating position.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Quartz Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Ditto -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_13.png" alt="Ditto Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Ditto</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Gas lift height adjustment, Robust Metal Frame, Premium Cushioning, Ergonomic backrest.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Ditto Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Velfire -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_14.png" alt="Velfire Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Velfire</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">High back &amp; Medium back configurations, Breathable mesh back, Robust Metal Frame.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Velfire Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Optimus -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_15.png" alt="Optimus Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Optimus</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">High back &amp; Medium back configurations, Premium cushioning, Smooth reclining mechanism.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Optimus Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Zoom -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_16.png" alt="Zoom Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Zoom</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">High back &amp; Medium back options, Ergonomic backrest, Premium cushioning, Modern aesthetic.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Zoom Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Comfy -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_17.png" alt="Comfy Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Comfy</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Ergonomic backrest, Reclining mechanism, High &amp; Medium back options, Premium cushioning.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Comfy Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Rio -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_18.png" alt="Rio Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Rio</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Adjustable armrests, High &amp; Medium back configurations, Smooth-Reclining Mechanism.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Rio Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hilite -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_19.png" alt="Hilite Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Hilite</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Light looks, Adjustable armrests, Smooth-rolling castors, High &amp; Medium back.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Hilite Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Ecco -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_20.png" alt="Ecco Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Ecco</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">5-star caster base, Essential ergonomic support, Breathable mesh back &amp; seat.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Ecco Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Vento -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_21.png" alt="Vento Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Vento</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Superior lumbar support, 5-star caster base, Adjustable armrests, Stylish design.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Vento Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Aura -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_22.png" alt="Aura Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Aura</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">All-day comfort, Ergonomic backrest, Effortless functionality in a sleek breathable design.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Aura Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Dynamic -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_23.png" alt="Dynamic Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Dynamic</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Smooth-Reclining Mechanism, Ergonomic backrest, Adjustable armrests, Premium Cushioning.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Dynamic Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Butterfly -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_24.png" alt="Butterfly Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Butterfly</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Dynamic flexibility, Ergonomic mesh back, Smooth-Reclining Mechanism.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Butterfly Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mystic -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_25.png" alt="Mystic Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Mystic</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Classic Design, Ergonomic backrest, Smooth-Reclining Mechanism, Adjustable armrests.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Mystic Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Breeze -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_26.png" alt="Breeze Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Breeze</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Light on looks, Sculpted lumbar support, High back configuration, Breathable mesh.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Breeze Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Matrix -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_27.png" alt="Matrix Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Matrix 1</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Advanced ergonomics, Bold design language, Exceptional posture support.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Matrix Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Marvel 1 & 2 -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_29.png" alt="Marvel Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Marvel 1 &amp; 2</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Central lumbar support, Premium metal detailing, Intelligently engineered to adapt.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Marvel Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Jazz -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_30.png" alt="Jazz Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Jazz</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Central lumbar support, Breathable mesh back, Ergonomic features adapting to you.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Jazz Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Flash -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_31.png" alt="Flash Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Flash</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Sleek Design, Breathable mesh back, Ergonomic features keeping you focused.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Flash Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bonai -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_32.png" alt="Bonai Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Bonai</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Distinctive back-frame structure, 5-star caster base, Perfect posture support.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Bonai Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- X Mesh -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_33.png" alt="X Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">X Mesh</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Essential features, Breathable mesh, 5-star caster base, Premium cushioning.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs X Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Spenser -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_34.png" alt="Spenser Mesh Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Spenser</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Distinctive back frame, Integrated lumbar support, Reliable everyday performance.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Spenser Mesh Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- 2. LEATHER SERIES -->
        <section id="leather-series" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="leather-series">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-dark text-white text-uppercase px-2 py-1 fs-7 mb-1">5 Executive Models</span>
                    <h2 class="fw-bold text-dark mb-0">Leather Series</h2>
                    <p class="text-muted fs-7 mb-0">Luxurious Diamond Stitching, Refined Details &amp; Command Posture</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('ArchLabs Leather Series')">Enquire for Leather Series</button>
            </div>

            <div class="row g-4">
                
                <!-- Luxe -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_36.png" alt="Luxe Leather Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Luxe</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Luxurious diamond stitch quilted upholstery, 3D adjustable armrests, Class 4 gas lift, Seat slide adjustment.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Luxe Leather Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Elara -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_37.png" alt="Elara Leather Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Elara</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Contoured high back, Deep multi-density cushioning, Synchronized tilt with seat slide, 3D armrests.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Elara Leather Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Regent -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_38.png" alt="Regent Leather Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Regent</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Tall commanding high back, Fixed chrome armrests, Strong metal chrome frame, Premium leatherette.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Regent Leather Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Forma -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_39.png" alt="Forma Leather Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Forma</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Signature ribbed horizontal channel cushioning, Floating headrest, Exposed chrome accents.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Forma Leather Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Nero -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_40.png" alt="Nero Leather Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Nero</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Streamlined silhouette, Horizontal channel tufting, Fixed chrome arms, Pneumatic lift height adjustment.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Nero Leather Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- 3. TRAINING SERIES -->
        <section id="training-series" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="training-series">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-warning text-dark text-uppercase px-2 py-1 fs-7 mb-1">Flexible Learning Solutions</span>
                    <h2 class="fw-bold text-dark mb-0">Training Series</h2>
                    <p class="text-muted fs-7 mb-0">Versatile Training Chairs with Writing Pads, Storage &amp; Twin-Back Models</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('ArchLabs Training Series')">Enquire for Training Chairs</button>
            </div>

            <div class="row g-4">
                
                <!-- Arc Standard -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_43.png" alt="Arc Standard Training Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Arc Standard</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Ventilated back, Lightweight &amp; durable build, Seat/Back with handle options.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Arc Standard Training Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Cove Cushioned -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_44.png" alt="Cove Cushioned Training Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Cove Cushioned</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Breathable fabric cushioning, Extra comfort &amp; focus, Low maintenance build.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Cove Cushioned Training Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pivot Writing Table -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_45.png" alt="Pivot Writing Table Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Pivot Writing Table</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Integrated writing tablet, Configured for note-taking, Handle &amp; Cushion variants.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Pivot Writing Table Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pivot Full Writing Table -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_46.png" alt="Pivot Full Writing Table Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Pivot Full Writing Table</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Full writing surface for examination &amp; training, Enhanced comfort, Cushion option.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Pivot Full Writing Table Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Stack Storage Variants -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_47.png" alt="Stack Storage Training Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Stack Storage Variants</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Under-seat storage wire basket for bags &amp; books, Open back with storage &amp; cushion options.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs Stack Storage Training Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ArchTwin -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_49.png" alt="ArchTwin Training Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">ArchTwin</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Distinctive twin-back design with built-in handles, available in Sky Blue, Fresh Green, Sage Green.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs ArchTwin Training Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ArchTwin Flip-up Table -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_50.png" alt="ArchTwin with Flip-up Table" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">ArchTwin Flip-Up Table</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Smart training chair with flip-up writing tablet for on-the-go collaborative learning.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs ArchTwin with Flip-up Table')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- 4. METRO LINEA PUBLIC SEATING -->
        <section id="metro-linea" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="metro-linea">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-info text-dark text-uppercase px-2 py-1 fs-7 mb-1">Heavy-Duty Public Infrastructure</span>
                    <h2 class="fw-bold text-dark mb-0">Metro Linea Public Seating</h2>
                    <p class="text-muted fs-7 mb-0">Designed for Airports, Railway Terminals, Hospitals &amp; Banks</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Metro Linea Public Seating')">Enquire for Metro Linea</button>
            </div>

            <div class="row g-4">
                
                <!-- Metro Linea 2 Seater -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_53.png" alt="Metro Linea 2 Seater" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Metro Linea 2 Seater</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Corrosion-resistant steel public bench, Charcoal Black finish, Low maintenance &amp; durable.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Metro Linea 2 Seater Bench')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Metro Linea 3 Seater -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_54.png" alt="Metro Linea 3 Seater" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Metro Linea 3 Seater</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Red Wine powder-coated finish, Heavy-duty 3-seater public waiting bench.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Metro Linea 3 Seater Bench')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Metro Linea 5 Seater -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_55.png" alt="Metro Linea 5 Seater" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">Metro Linea 5 Seater</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Silver Grey 5-seater high-capacity waiting bench for busy transit hubs &amp; financial institutions.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Metro Linea 5 Seater Bench')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- 5. CAFETERIA SERIES -->
        <section id="cafeteria-series" class="catalogue-series-section mb-4 pt-4 border-top" data-series-slug="cafeteria-series">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-success text-white text-uppercase px-2 py-1 fs-7 mb-1">7 Contemporary Models</span>
                    <h2 class="fw-bold text-dark mb-0">Cafeteria Series</h2>
                    <p class="text-muted fs-7 mb-0">Vibrant Dining, Pantry &amp; Hospitality Seating Solutions</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Cafeteria Series Chairs')">Enquire for Cafeteria Chairs</button>
            </div>

            <div class="row g-4">
                
                <!-- AC01 Stack Chair -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_57.png" alt="AC01 Stack Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">AC01 Stack Chair</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Lightweight, durable stackable cafeteria chair designed for everyday high-volume dining.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs AC01 Stack Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AC02 Curve Chair -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_58.png" alt="AC02 Curve Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">AC02 Curve Chair</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Comfortable contoured shell chair for corporate pantries, cafes, and resturants.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs AC02 Curve Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AC03 Arc Chair -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_59.png" alt="AC03 Arc Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">AC03 Arc Chair</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Where Comfort Meets Style. Sleek curved profile available in multiple vibrant color shades.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs AC03 Arc Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AC04 Spindle Chair -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_60.png" alt="AC04 Spindle Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">AC04 Spindle Chair</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Timeless spindle back design bringing character and color to breakout spaces.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs AC04 Spindle Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AC06 Timber Chair -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_61.png" alt="AC06 Timber Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">AC06 Timber Chair</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Simple form, vibrant colors, durable polypropelene &amp; wood finish options.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs AC06 Timber Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AC07 Lounge Chair -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_62.png" alt="AC07 Lounge Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">AC07 Lounge Chair</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Stylish yet simple form for modern cafeteria lounges and reception corners.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs AC07 Lounge Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AC08 Crest Chair -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/archlabs/pages/page_63.png" alt="AC08 Crest Chair" class="card-img-top" style="background: #ffffff;">
                        <div class="card-body p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-dark mb-0">AC08 Crest Chair</h4>
                                <span class="badge bg-light text-danger border fs-7">ArchLabs Seating</span>
                            </div>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Elevate your space with Modern Elegance. Premium molded cafe armchair.</p>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('ArchLabs AC08 Crest Chair')">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- WORKSTATIONS CATALOGUE SECTIONS -->
        <section id="workstations-ha" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="workstations-ha">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1">Motorized Ergonomic Desks</span>
                    <h2 class="fw-bold text-dark mb-0">Workstations - Height Adjustable Series</h2>
                    <p class="text-muted fs-7 mb-0">Dual-motor sit-stand desks engineered for active wellness</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Height Adjustable Series Workstations')">Enquire Series</button>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/categories/cat_workstations.jpg" alt="Model HA-01 Sit-Stand Executive Desk" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model HA-01 Sit-Stand Executive Desk</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Dual Motor / 120kg Capacity / Digital Memory Presets (650-1300mm transition height).</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model HA-01 Sit-Stand Executive Desk')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/sections/hero-workspace.jpg" alt="Model HA-02 Back-to-Back Bench System" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model HA-02 Back-to-Back Bench System</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Central Cable Spine / Integrated Acoustic Divider Screen / Cable Snake Conduits.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model HA-02 Back-to-Back Bench System')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/sections/vishista_exclusive.jpg" alt="Model HA-03 Corner L-Desk Managerial" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model HA-03 Corner L-Desk Managerial</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">3-Leg Motorized System / Side Credenza Unit / Wireless Charging Hub.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model HA-03 Corner L-Desk Managerial')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="workstations-ds" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="workstations-ds">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1">Open-Plan Desking</span>
                    <h2 class="fw-bold text-dark mb-0">Workstations - Desking Series</h2>
                    <p class="text-muted fs-7 mb-0">Linear and back-to-back desking systems with clean metal profiles</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Desking Series Workstations')">Enquire Series</button>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/categories/cat_workstations.jpg" alt="Model DS-Linear 4-Person Cluster" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model DS-Linear 4-Person Cluster</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Powder Coated Metal Leg Frame / Fabric Privacy Screen / Base Raceway.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model DS-Linear 4-Person Cluster')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/sections/vishista_exclusive.jpg" alt="Model DS-Loop Leg 2-Person Bench" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model DS-Loop Leg 2-Person Bench</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Loop Frame Steel Legs / Prelam Wood Top / Under-desk Cable Tray.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model DS-Loop Leg 2-Person Bench')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="workstations-panel" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="workstations-panel">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1">Acoustic Partition Systems</span>
                    <h2 class="fw-bold text-dark mb-0">Workstations - Panel Series</h2>
                    <p class="text-muted fs-7 mb-0">Acoustic panel-based partitions providing privacy and wire raceways</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Panel Series Workstations')">Enquire Series</button>
            </div>
            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/categories/cat_workstations.jpg" alt="Model PS-60mm Tile Partition System" class="card-img-top" style="background: #ffffff; height: 260px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model PS-60mm Tile Partition System</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">60mm Panel Thickness / Fabric &amp; Glass Tiles / Base Raceway Wiring Conduits.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model PS-60mm Tile Partition System')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- TABLES CATALOGUE SECTIONS -->
        <section id="tables-cabin" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="tables-cabin">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1">Executive Cabin Desks</span>
                    <h2 class="fw-bold text-dark mb-0">Tables - Cabin Tables</h2>
                    <p class="text-muted fs-7 mb-0">Director &amp; managerial executive table suites</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Cabin Tables Catalogue')">Enquire Series</button>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/categories/cat_tables.png" alt="Model CB-Executive Director Desk" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model CB-Executive Director Desk</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Veneer Finish / Leatherette Writing Pad / Side Credenza Storage Unit.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model CB-Executive Director Desk')">Enquire Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/categories/cat_tables.png" alt="Model CB-Managerial Side Return Desk" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model CB-Managerial Side Return Desk</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Prelam Wood Finish / Lockable Drawer Pedestal / Wire Pass Grommets.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model CB-Managerial Side Return Desk')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="tables-meeting" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="tables-meeting">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1">Boardroom Conference Tables</span>
                    <h2 class="fw-bold text-dark mb-0">Tables - Meeting Tables</h2>
                    <p class="text-muted fs-7 mb-0">Pop-up connectivity boxes and cable troughs</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Meeting Tables Catalogue')">Enquire Series</button>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/categories/cat_tables.png" alt="Model MT-12 Seater Boardroom Table" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model MT-12 Seater Boardroom Table</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Dual Pop-up Power Box / Boat Shape Top / Heavy Duty Steel Base Frame.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model MT-12 Seater Boardroom Table')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- STORAGE CATALOGUE SECTIONS -->
        <section id="storage-prelam" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="storage-prelam">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1">Office Storage Cabinets</span>
                    <h2 class="fw-bold text-dark mb-0">Storage - Prelam Storage Systems</h2>
                    <p class="text-muted fs-7 mb-0">Laminate wood credenzas, pedestals, and tall storage</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Prelam Storage Systems')">Enquire Series</button>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/categories/cat_storage.png" alt="Model ST-Mobile Pedestal (3 Drawer)" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model ST-Mobile Pedestal (3 Drawer)</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Central Keyed Locking / Castor Wheels / Stationary Tray Included.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model ST-Mobile Pedestal')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PODS CATALOGUE SECTION -->
        <section id="pods" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="pods">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1">Sound Isolation Booths</span>
                    <h2 class="fw-bold text-dark mb-0">Acoustic Work Pods</h2>
                    <p class="text-muted fs-7 mb-0">Private telephone pods &amp; acoustic meeting booths</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Acoustic Pods Catalogue')">Enquire Pods</button>
            </div>
            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/categories/cat_pods.jpg" alt="Model PD-Solo Acoustic Telephone Booth" class="card-img-top" style="background: #ffffff; height: 260px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model PD-Solo Acoustic Telephone Booth</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Sound Reduction 32dB / Silent Ventilation Fan / Motion Sensor LED / Power Hub.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model PD-Solo Acoustic Telephone Booth')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CARPETS CATALOGUE SECTION -->
        <section id="carpets" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="carpets">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1">Acoustic Flooring</span>
                    <h2 class="fw-bold text-dark mb-0">Interface Carpet Tiles</h2>
                    <p class="text-muted fs-7 mb-0">Modular acoustic carpet tiles and geometric planks</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Interface Carpet Tiles')">Enquire Carpets</button>
            </div>
            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/categories/cat_carpets.jpg" alt="Model CP-Acoustic Nylon Modular Tile" class="card-img-top" style="background: #ffffff; height: 260px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model CP-Acoustic Nylon Modular Tile</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">50x50cm Modular Tiles / Sound Dampening Cushion Backing / Stain Shield Treatment.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model CP-Acoustic Nylon Modular Tile')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- OUTDOOR CATALOGUE SECTION -->
        <section id="outdoor" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="outdoor">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1">Terrace &amp; Cafe Seating</span>
                    <h2 class="fw-bold text-dark mb-0">Outdoor Furniture</h2>
                    <p class="text-muted fs-7 mb-0">Synthetic wicker &amp; aluminum patio dining sets</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Outdoor Furniture Catalogue')">Enquire Outdoor</button>
            </div>
            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/categories/cat_outdoor.jpg" alt="Model OD-Synthetic Wicker Terrace Lounge" class="card-img-top" style="background: #ffffff; height: 260px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model OD-Synthetic Wicker Terrace Lounge</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">UV-Resistant All-Weather Wicker / Water Repellent Cushions / Aluminium Frame.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model OD-Synthetic Wicker Terrace Lounge')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- EDUCATIONAL CATALOGUE SECTION -->
        <section id="educational" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="educational">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1">Institutional Solutions</span>
                    <h2 class="fw-bold text-dark mb-0">Educational Solutions</h2>
                    <p class="text-muted fs-7 mb-0">Classroom desks, library carrels, hostel beds &amp; auditorium chairs</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Educational Solutions Catalogue')">Enquire Educational</button>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/categories/cat_education.png" alt="Model ED-Single Student Ergonomic Desk" class="card-img-top" style="background: #ffffff; height: 240px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model ED-Single Student Ergonomic Desk</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">Rounded Wood Edges / Metal Frame / Bag Hook / Under-desk Book Shelf.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model ED-Single Student Ergonomic Desk')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ACCESSORIES CATALOGUE SECTION -->
        <section id="accessories" class="catalogue-series-section mb-5 pt-4 border-top" data-series-slug="accessories">
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-2 border-danger">
                <div>
                    <span class="badge bg-danger text-uppercase px-2 py-1 fs-7 mb-1">Ergonomic Tools</span>
                    <h2 class="fw-bold text-dark mb-0">Workspace Accessories</h2>
                    <p class="text-muted fs-7 mb-0">Monitor arms, power modules &amp; cable management</p>
                </div>
                <button type="button" class="btn btn-danger btn-sm text-uppercase fw-bold" onclick="openEnquiryModal('Workspace Accessories Catalogue')">Enquire Accessories</button>
            </div>
            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="card border h-100 shadow-sm rounded-3 overflow-hidden product-card-hover">
                        <img src="images/categories/cat_workstations.jpg" alt="Model AC-Gas Spring Dual Monitor Arm" class="card-img-top" style="background: #ffffff; height: 260px; object-fit: cover;">
                        <div class="card-body p-4 d-flex flex-column">
                            <h4 class="fw-bold text-dark mb-2">Model AC-Gas Spring Dual Monitor Arm</h4>
                            <p class="text-secondary fs-7 mb-3 flex-grow-1">VESA Mount / Quick Release Clamp / Integrated Cable Passage Passage.</p>
                            <button type="button" class="btn btn-danger text-uppercase fw-bold fs-7 py-2" onclick="openEnquiryModal('Model AC-Gas Spring Dual Monitor Arm')">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </div><!-- end archlabs-static-content -->
    </div>
</div>

<style>
    .product-card-hover {
        transition: all 0.3s ease;
    }
    .product-card-hover:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.12) !important;
    }
    .series-filter-btn:hover {
        background-color: #d32f2f !important;
        color: #ffffff !important;
        border-color: #d32f2f !important;
    }
</style>

<script>
function filterExclusiveSeries(slug) {
    if (!slug) slug = 'all';
    slug = slug.toLowerCase().replace(/^#/, '');

    const sections = document.querySelectorAll('.catalogue-series-section');
    const badgeEl = document.getElementById('seriesBadge');
    const titleEl = document.getElementById('seriesTitle');
    const subtitleEl = document.getElementById('seriesSubtitle');
    const showAllBtn = document.getElementById('showAllSeriesBtn');

    if (slug === 'all') {
        sections.forEach(sec => {
            sec.style.display = 'block';
        });
        if (badgeEl) badgeEl.textContent = 'Vishista Signature Line';
        if (titleEl) titleEl.textContent = 'Our Exclusive Collection';
        if (subtitleEl) subtitleEl.textContent = 'ArchLabs Architectural Seating & Turnkey Product Lines. Engineered for Movement. Designed for Focus.';
        if (showAllBtn) showAllBtn.style.display = 'none';
        return;
    }

    let matched = false;
    sections.forEach(sec => {
        const secId = (sec.id || '').toLowerCase();
        const secSlug = (sec.getAttribute('data-series-slug') || '').toLowerCase();

        if (secId === slug || secSlug === slug) {
            sec.style.display = 'block';
            sec.classList.remove('border-top');
            matched = true;

            const secHeading = sec.querySelector('h2');
            if (secHeading && titleEl) {
                titleEl.textContent = secHeading.textContent;
            }
            if (badgeEl) {
                badgeEl.textContent = 'Exclusive Series Showcase';
            }
            if (subtitleEl) {
                subtitleEl.textContent = 'Viewing isolated series models engineered with precision architecture.';
            }
        } else {
            sec.style.display = 'none';
        }
    });

    if (matched) {
        if (showAllBtn) showAllBtn.style.display = 'inline-flex';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Fallback show all
        sections.forEach(sec => { sec.style.display = 'block'; });
        if (showAllBtn) showAllBtn.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const seriesParam = urlParams.get('series') || window.location.hash.replace('#', '');
    if (seriesParam) {
        filterExclusiveSeries(seriesParam);
    }
});

window.addEventListener('hashchange', function() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        filterExclusiveSeries(hash);
    }
});
</script>

<?php include('footer.php'); ?>


