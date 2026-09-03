// Supabase & Cloudinary Configuration for Vishista Office Solutions CMS

const SUPABASE_URL = 'https://oseccrcffoyttjgpazrt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zZWNjcmNmZm95dHRqZ3BhenJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NTM4OTEsImV4cCI6MjEwMzMyOTg5MX0.ESJ0iK2zcCPZZCZtfeYW7uObbEP7JxXUYJiSi9a4pzA';

const CLOUDINARY_CLOUD_NAME = 'iw4ntmv5';
const CLOUDINARY_API_KEY = '835971439824578';
const CLOUDINARY_API_SECRET = 'x0YUpiLEmElqBjSifMgbfaF6UGs';
const CLOUDINARY_UPLOAD_PRESET = 'ml_default';

// Embedded Seed Data Dataset for Fail-Safe CMS Resolution
const VISHISTA_SEED_DATA = {
  "archlabs_series": [
  {
    "name": "Mesh Series",
    "slug": "mesh-series",
    "badge_text": "30 Line-Wise Models",
    "description": "Engineered for Movement &amp; All-Day Ergonomic Focus",
    "enquiry_label": "ArchLabs Mesh Series Chairs",
    "display_order": 1,
    "is_visible": true
  },
  {
    "name": "Leather Series",
    "slug": "leather-series",
    "badge_text": "5 Executive Models",
    "description": "Luxurious Diamond Stitching, Refined Details &amp; Command Posture",
    "enquiry_label": "ArchLabs Leather Series",
    "display_order": 2,
    "is_visible": true
  },
  {
    "name": "Training Series",
    "slug": "training-series",
    "badge_text": "Flexible Learning Solutions",
    "description": "Versatile Training Chairs with Writing Pads, Storage &amp; Twin-Back Models",
    "enquiry_label": "ArchLabs Training Series",
    "display_order": 3,
    "is_visible": true
  },
  {
    "name": "Metro Linea Public Seating",
    "slug": "metro-linea",
    "badge_text": "Heavy-Duty Public Infrastructure",
    "description": "Designed for Airports, Railway Terminals, Hospitals &amp; Banks",
    "enquiry_label": "Metro Linea Public Seating",
    "display_order": 4,
    "is_visible": true
  },
  {
    "name": "Cafeteria Series",
    "slug": "cafeteria-series",
    "badge_text": "7 Contemporary Models",
    "description": "Vibrant Dining, Pantry &amp; Hospitality Seating Solutions",
    "enquiry_label": "Cafeteria Series Chairs",
    "display_order": 5,
    "is_visible": true
  },
  {
    "name": "Workstations - Height Adjustable Series",
    "slug": "workstations-ha",
    "badge_text": "Motorized Ergonomic Desks",
    "description": "Dual-motor sit-stand desks engineered for active wellness",
    "enquiry_label": "Height Adjustable Series Workstations",
    "display_order": 6,
    "is_visible": true
  },
  {
    "name": "Workstations - Desking Series",
    "slug": "workstations-ds",
    "badge_text": "Open-Plan Desking",
    "description": "Linear and back-to-back desking systems with clean metal profiles",
    "enquiry_label": "Desking Series Workstations",
    "display_order": 7,
    "is_visible": true
  },
  {
    "name": "Workstations - Panel Series",
    "slug": "workstations-panel",
    "badge_text": "Acoustic Partition Systems",
    "description": "Acoustic panel-based partitions providing privacy and wire raceways",
    "enquiry_label": "Panel Series Workstations",
    "display_order": 8,
    "is_visible": true
  },
  {
    "name": "Tables - Cabin Tables",
    "slug": "tables-cabin",
    "badge_text": "Executive Cabin Desks",
    "description": "Director &amp; managerial executive table suites",
    "enquiry_label": "Cabin Tables Catalogue",
    "display_order": 9,
    "is_visible": true
  },
  {
    "name": "Tables - Meeting Tables",
    "slug": "tables-meeting",
    "badge_text": "Boardroom Conference Tables",
    "description": "Pop-up connectivity boxes and cable troughs",
    "enquiry_label": "Meeting Tables Catalogue",
    "display_order": 10,
    "is_visible": true
  },
  {
    "name": "Storage - Prelam Storage Systems",
    "slug": "storage-prelam",
    "badge_text": "Office Storage Cabinets",
    "description": "Laminate wood credenzas, pedestals, and tall storage",
    "enquiry_label": "Prelam Storage Systems",
    "display_order": 11,
    "is_visible": true
  },
  {
    "name": "Acoustic Work Pods",
    "slug": "pods",
    "badge_text": "Sound Isolation Booths",
    "description": "Private telephone pods &amp; acoustic meeting booths",
    "enquiry_label": "Acoustic Pods Catalogue",
    "display_order": 12,
    "is_visible": true
  },
  {
    "name": "Interface Carpet Tiles",
    "slug": "carpets",
    "badge_text": "Acoustic Flooring",
    "description": "Modular acoustic carpet tiles and geometric planks",
    "enquiry_label": "Interface Carpet Tiles",
    "display_order": 13,
    "is_visible": true
  },
  {
    "name": "Outdoor Furniture",
    "slug": "outdoor",
    "badge_text": "Terrace &amp; Cafe Seating",
    "description": "Synthetic wicker &amp; aluminum patio dining sets",
    "enquiry_label": "Outdoor Furniture Catalogue",
    "display_order": 14,
    "is_visible": true
  },
  {
    "name": "Educational Solutions",
    "slug": "educational",
    "badge_text": "Institutional Solutions",
    "description": "Classroom desks, library carrels, hostel beds &amp; auditorium chairs",
    "enquiry_label": "Educational Solutions Catalogue",
    "display_order": 15,
    "is_visible": true
  },
  {
    "name": "Workspace Accessories",
    "slug": "accessories",
    "badge_text": "Ergonomic Tools",
    "description": "Monitor arms, power modules &amp; cable management",
    "enquiry_label": "Workspace Accessories Catalogue",
    "display_order": 16,
    "is_visible": true
  }
],
  "archlabs_products": [
  {
    "name": "Veloz",
    "slug": "veloz",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_4.png",
    "badge_label": "ArchLabs Seating",
    "description": "Synchro-tilt with multi-position lock, 3D armrest with gel PU pad, Aluminium diecast base, Adjustable headrest.",
    "display_order": 1,
    "is_visible": true
  },
  {
    "name": "Feather",
    "slug": "feather",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_5.png",
    "badge_label": "ArchLabs Seating",
    "description": "Seamless reclining mechanism, Adjustable armrests, High-resilience cushioning, Adjustable headrest, Smooth castors.",
    "display_order": 2,
    "is_visible": true
  },
  {
    "name": "Eiffel",
    "slug": "eiffel",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_6.png",
    "badge_label": "ArchLabs Seating",
    "description": "Contoured backrest, Integrated lumbar support, High-density foam seat, Smooth-reclining mechanism.",
    "display_order": 3,
    "is_visible": true
  },
  {
    "name": "Mustang",
    "slug": "mustang",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_7.png",
    "badge_label": "ArchLabs Seating",
    "description": "Generously-padded seat, Adjustable backrest, Smooth recline, Reinforced heavy-duty base.",
    "display_order": 4,
    "is_visible": true
  },
  {
    "name": "Bravo",
    "slug": "bravo",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_8.png",
    "badge_label": "ArchLabs Seating",
    "description": "Plush cushioning, Smooth-reclining mechanism, Adjustable armrests, Heavy-duty castors, Robust Frame.",
    "display_order": 5,
    "is_visible": true
  },
  {
    "name": "Polar",
    "slug": "polar",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_9.png",
    "badge_label": "ArchLabs Seating",
    "description": "High density moulded foam, Reinforced base, Adjustable armrests, Integrated lumbar support.",
    "display_order": 6,
    "is_visible": true
  },
  {
    "name": "Glanza",
    "slug": "glanza",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_10.png",
    "badge_label": "ArchLabs Seating",
    "description": "Sturdy Metal base, High density moulded foam, Contoured backrest, Smooth-reclining mechanism.",
    "display_order": 7,
    "is_visible": true
  },
  {
    "name": "Yaris",
    "slug": "yaris",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_11.png",
    "badge_label": "ArchLabs Seating",
    "description": "Supportive mesh back, Adjustable armrests, High density foam, Smooth-tilt mechanism.",
    "display_order": 8,
    "is_visible": true
  },
  {
    "name": "Quartz",
    "slug": "quartz",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_12.png",
    "badge_label": "ArchLabs Seating",
    "description": "Robust Metal Frame, Multi-Position Locking, Synchronized reclining, Customizable seating position.",
    "display_order": 9,
    "is_visible": true
  },
  {
    "name": "Ditto",
    "slug": "ditto",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_13.png",
    "badge_label": "ArchLabs Seating",
    "description": "Gas lift height adjustment, Robust Metal Frame, Premium Cushioning, Ergonomic backrest.",
    "display_order": 10,
    "is_visible": true
  },
  {
    "name": "Velfire",
    "slug": "velfire",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_14.png",
    "badge_label": "ArchLabs Seating",
    "description": "High back &amp; Medium back configurations, Breathable mesh back, Robust Metal Frame.",
    "display_order": 11,
    "is_visible": true
  },
  {
    "name": "Optimus",
    "slug": "optimus",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_15.png",
    "badge_label": "ArchLabs Seating",
    "description": "High back &amp; Medium back configurations, Premium cushioning, Smooth reclining mechanism.",
    "display_order": 12,
    "is_visible": true
  },
  {
    "name": "Zoom",
    "slug": "zoom",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_16.png",
    "badge_label": "ArchLabs Seating",
    "description": "High back &amp; Medium back options, Ergonomic backrest, Premium cushioning, Modern aesthetic.",
    "display_order": 13,
    "is_visible": true
  },
  {
    "name": "Comfy",
    "slug": "comfy",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_17.png",
    "badge_label": "ArchLabs Seating",
    "description": "Ergonomic backrest, Reclining mechanism, High &amp; Medium back options, Premium cushioning.",
    "display_order": 14,
    "is_visible": true
  },
  {
    "name": "Rio",
    "slug": "rio",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_18.png",
    "badge_label": "ArchLabs Seating",
    "description": "Adjustable armrests, High &amp; Medium back configurations, Smooth-Reclining Mechanism.",
    "display_order": 15,
    "is_visible": true
  },
  {
    "name": "Hilite",
    "slug": "hilite",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_19.png",
    "badge_label": "ArchLabs Seating",
    "description": "Light looks, Adjustable armrests, Smooth-rolling castors, High &amp; Medium back.",
    "display_order": 16,
    "is_visible": true
  },
  {
    "name": "Ecco",
    "slug": "ecco",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_20.png",
    "badge_label": "ArchLabs Seating",
    "description": "5-star caster base, Essential ergonomic support, Breathable mesh back &amp; seat.",
    "display_order": 17,
    "is_visible": true
  },
  {
    "name": "Vento",
    "slug": "vento",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_21.png",
    "badge_label": "ArchLabs Seating",
    "description": "Superior lumbar support, 5-star caster base, Adjustable armrests, Stylish design.",
    "display_order": 18,
    "is_visible": true
  },
  {
    "name": "Aura",
    "slug": "aura",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_22.png",
    "badge_label": "ArchLabs Seating",
    "description": "All-day comfort, Ergonomic backrest, Effortless functionality in a sleek breathable design.",
    "display_order": 19,
    "is_visible": true
  },
  {
    "name": "Dynamic",
    "slug": "dynamic",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_23.png",
    "badge_label": "ArchLabs Seating",
    "description": "Smooth-Reclining Mechanism, Ergonomic backrest, Adjustable armrests, Premium Cushioning.",
    "display_order": 20,
    "is_visible": true
  },
  {
    "name": "Butterfly",
    "slug": "butterfly",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_24.png",
    "badge_label": "ArchLabs Seating",
    "description": "Dynamic flexibility, Ergonomic mesh back, Smooth-Reclining Mechanism.",
    "display_order": 21,
    "is_visible": true
  },
  {
    "name": "Mystic",
    "slug": "mystic",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_25.png",
    "badge_label": "ArchLabs Seating",
    "description": "Classic Design, Ergonomic backrest, Smooth-Reclining Mechanism, Adjustable armrests.",
    "display_order": 22,
    "is_visible": true
  },
  {
    "name": "Breeze",
    "slug": "breeze",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_26.png",
    "badge_label": "ArchLabs Seating",
    "description": "Light on looks, Sculpted lumbar support, High back configuration, Breathable mesh.",
    "display_order": 23,
    "is_visible": true
  },
  {
    "name": "Matrix 1",
    "slug": "matrix-1",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_27.png",
    "badge_label": "ArchLabs Seating",
    "description": "Advanced ergonomics, Bold design language, Exceptional posture support.",
    "display_order": 24,
    "is_visible": true
  },
  {
    "name": "Marvel 1 &amp; 2",
    "slug": "marvel-1-amp-2",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_29.png",
    "badge_label": "ArchLabs Seating",
    "description": "Central lumbar support, Premium metal detailing, Intelligently engineered to adapt.",
    "display_order": 25,
    "is_visible": true
  },
  {
    "name": "Jazz",
    "slug": "jazz",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_30.png",
    "badge_label": "ArchLabs Seating",
    "description": "Central lumbar support, Breathable mesh back, Ergonomic features adapting to you.",
    "display_order": 26,
    "is_visible": true
  },
  {
    "name": "Flash",
    "slug": "flash",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_31.png",
    "badge_label": "ArchLabs Seating",
    "description": "Sleek Design, Breathable mesh back, Ergonomic features keeping you focused.",
    "display_order": 27,
    "is_visible": true
  },
  {
    "name": "Bonai",
    "slug": "bonai",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_32.png",
    "badge_label": "ArchLabs Seating",
    "description": "Distinctive back-frame structure, 5-star caster base, Perfect posture support.",
    "display_order": 28,
    "is_visible": true
  },
  {
    "name": "X Mesh",
    "slug": "x-mesh",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_33.png",
    "badge_label": "ArchLabs Seating",
    "description": "Essential features, Breathable mesh, 5-star caster base, Premium cushioning.",
    "display_order": 29,
    "is_visible": true
  },
  {
    "name": "Spenser",
    "slug": "spenser",
    "series_slug": "mesh-series",
    "image_url": "images/archlabs/pages/page_34.png",
    "badge_label": "ArchLabs Seating",
    "description": "Distinctive back frame, Integrated lumbar support, Reliable everyday performance.",
    "display_order": 30,
    "is_visible": true
  },
  {
    "name": "Luxe",
    "slug": "luxe",
    "series_slug": "leather-series",
    "image_url": "images/archlabs/pages/page_36.png",
    "badge_label": "ArchLabs Seating",
    "description": "Luxurious diamond stitch quilted upholstery, 3D adjustable armrests, Class 4 gas lift, Seat slide adjustment.",
    "display_order": 1,
    "is_visible": true
  },
  {
    "name": "Elara",
    "slug": "elara",
    "series_slug": "leather-series",
    "image_url": "images/archlabs/pages/page_37.png",
    "badge_label": "ArchLabs Seating",
    "description": "Contoured high back, Deep multi-density cushioning, Synchronized tilt with seat slide, 3D armrests.",
    "display_order": 2,
    "is_visible": true
  },
  {
    "name": "Regent",
    "slug": "regent",
    "series_slug": "leather-series",
    "image_url": "images/archlabs/pages/page_38.png",
    "badge_label": "ArchLabs Seating",
    "description": "Tall commanding high back, Fixed chrome armrests, Strong metal chrome frame, Premium leatherette.",
    "display_order": 3,
    "is_visible": true
  },
  {
    "name": "Forma",
    "slug": "forma",
    "series_slug": "leather-series",
    "image_url": "images/archlabs/pages/page_39.png",
    "badge_label": "ArchLabs Seating",
    "description": "Signature ribbed horizontal channel cushioning, Floating headrest, Exposed chrome accents.",
    "display_order": 4,
    "is_visible": true
  },
  {
    "name": "Nero",
    "slug": "nero",
    "series_slug": "leather-series",
    "image_url": "images/archlabs/pages/page_40.png",
    "badge_label": "ArchLabs Seating",
    "description": "Streamlined silhouette, Horizontal channel tufting, Fixed chrome arms, Pneumatic lift height adjustment.",
    "display_order": 5,
    "is_visible": true
  },
  {
    "name": "Arc Standard",
    "slug": "arc-standard",
    "series_slug": "training-series",
    "image_url": "images/archlabs/pages/page_43.png",
    "badge_label": "ArchLabs Seating",
    "description": "Ventilated back, Lightweight &amp; durable build, Seat/Back with handle options.",
    "display_order": 1,
    "is_visible": true
  },
  {
    "name": "Cove Cushioned",
    "slug": "cove-cushioned",
    "series_slug": "training-series",
    "image_url": "images/archlabs/pages/page_44.png",
    "badge_label": "ArchLabs Seating",
    "description": "Breathable fabric cushioning, Extra comfort &amp; focus, Low maintenance build.",
    "display_order": 2,
    "is_visible": true
  },
  {
    "name": "Pivot Writing Table",
    "slug": "pivot-writing-table",
    "series_slug": "training-series",
    "image_url": "images/archlabs/pages/page_45.png",
    "badge_label": "ArchLabs Seating",
    "description": "Integrated writing tablet, Configured for note-taking, Handle &amp; Cushion variants.",
    "display_order": 3,
    "is_visible": true
  },
  {
    "name": "Pivot Full Writing Table",
    "slug": "pivot-full-writing-table",
    "series_slug": "training-series",
    "image_url": "images/archlabs/pages/page_46.png",
    "badge_label": "ArchLabs Seating",
    "description": "Full writing surface for examination &amp; training, Enhanced comfort, Cushion option.",
    "display_order": 4,
    "is_visible": true
  },
  {
    "name": "Stack Storage Variants",
    "slug": "stack-storage-variants",
    "series_slug": "training-series",
    "image_url": "images/archlabs/pages/page_47.png",
    "badge_label": "ArchLabs Seating",
    "description": "Under-seat storage wire basket for bags &amp; books, Open back with storage &amp; cushion options.",
    "display_order": 5,
    "is_visible": true
  },
  {
    "name": "ArchTwin",
    "slug": "archtwin",
    "series_slug": "training-series",
    "image_url": "images/archlabs/pages/page_49.png",
    "badge_label": "ArchLabs Seating",
    "description": "Distinctive twin-back design with built-in handles, available in Sky Blue, Fresh Green, Sage Green.",
    "display_order": 6,
    "is_visible": true
  },
  {
    "name": "ArchTwin Flip-Up Table",
    "slug": "archtwin-flip-up-table",
    "series_slug": "training-series",
    "image_url": "images/archlabs/pages/page_50.png",
    "badge_label": "ArchLabs Seating",
    "description": "Smart training chair with flip-up writing tablet for on-the-go collaborative learning.",
    "display_order": 7,
    "is_visible": true
  },
  {
    "name": "Metro Linea 2 Seater",
    "slug": "metro-linea-2-seater",
    "series_slug": "metro-linea",
    "image_url": "images/archlabs/pages/page_53.png",
    "badge_label": "ArchLabs Seating",
    "description": "Corrosion-resistant steel public bench, Charcoal Black finish, Low maintenance &amp; durable.",
    "display_order": 1,
    "is_visible": true
  },
  {
    "name": "Metro Linea 3 Seater",
    "slug": "metro-linea-3-seater",
    "series_slug": "metro-linea",
    "image_url": "images/archlabs/pages/page_54.png",
    "badge_label": "ArchLabs Seating",
    "description": "Red Wine powder-coated finish, Heavy-duty 3-seater public waiting bench.",
    "display_order": 2,
    "is_visible": true
  },
  {
    "name": "Metro Linea 5 Seater",
    "slug": "metro-linea-5-seater",
    "series_slug": "metro-linea",
    "image_url": "images/archlabs/pages/page_55.png",
    "badge_label": "ArchLabs Seating",
    "description": "Silver Grey 5-seater high-capacity waiting bench for busy transit hubs &amp; financial institutions.",
    "display_order": 3,
    "is_visible": true
  },
  {
    "name": "AC01 Stack Chair",
    "slug": "ac01-stack-chair",
    "series_slug": "cafeteria-series",
    "image_url": "images/archlabs/pages/page_57.png",
    "badge_label": "ArchLabs Seating",
    "description": "Lightweight, durable stackable cafeteria chair designed for everyday high-volume dining.",
    "display_order": 1,
    "is_visible": true
  },
  {
    "name": "AC02 Curve Chair",
    "slug": "ac02-curve-chair",
    "series_slug": "cafeteria-series",
    "image_url": "images/archlabs/pages/page_58.png",
    "badge_label": "ArchLabs Seating",
    "description": "Comfortable contoured shell chair for corporate pantries, cafes, and resturants.",
    "display_order": 2,
    "is_visible": true
  },
  {
    "name": "AC03 Arc Chair",
    "slug": "ac03-arc-chair",
    "series_slug": "cafeteria-series",
    "image_url": "images/archlabs/pages/page_59.png",
    "badge_label": "ArchLabs Seating",
    "description": "Where Comfort Meets Style. Sleek curved profile available in multiple vibrant color shades.",
    "display_order": 3,
    "is_visible": true
  },
  {
    "name": "AC04 Spindle Chair",
    "slug": "ac04-spindle-chair",
    "series_slug": "cafeteria-series",
    "image_url": "images/archlabs/pages/page_60.png",
    "badge_label": "ArchLabs Seating",
    "description": "Timeless spindle back design bringing character and color to breakout spaces.",
    "display_order": 4,
    "is_visible": true
  },
  {
    "name": "AC06 Timber Chair",
    "slug": "ac06-timber-chair",
    "series_slug": "cafeteria-series",
    "image_url": "images/archlabs/pages/page_61.png",
    "badge_label": "ArchLabs Seating",
    "description": "Simple form, vibrant colors, durable polypropelene &amp; wood finish options.",
    "display_order": 5,
    "is_visible": true
  },
  {
    "name": "AC07 Lounge Chair",
    "slug": "ac07-lounge-chair",
    "series_slug": "cafeteria-series",
    "image_url": "images/archlabs/pages/page_62.png",
    "badge_label": "ArchLabs Seating",
    "description": "Stylish yet simple form for modern cafeteria lounges and reception corners.",
    "display_order": 6,
    "is_visible": true
  },
  {
    "name": "AC08 Crest Chair",
    "slug": "ac08-crest-chair",
    "series_slug": "cafeteria-series",
    "image_url": "images/archlabs/pages/page_63.png",
    "badge_label": "ArchLabs Seating",
    "description": "Elevate your space with Modern Elegance. Premium molded cafe armchair.",
    "display_order": 7,
    "is_visible": true
  }
],
  "categories": [
    {
      "name": "Workstations",
      "slug": "workstations",
      "description": "Height adjustable sit-stand desks, linear open-plan desking, and acoustic panel partitions",
      "image_url": "images/categories/cat_workstations.jpg",
      "display_order": 1,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Tables",
      "slug": "tables",
      "description": "Executive director desks, boardroom meeting tables, cafe counters, and training desks",
      "image_url": "images/categories/cat_tables.png",
      "display_order": 2,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Storage",
      "slug": "storage",
      "description": "Prelam credenzas, steel filing cabinets, high-density mobile compactors, and employee lockers",
      "image_url": "images/categories/cat_storage.png",
      "display_order": 3,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Seating",
      "slug": "seating",
      "description": "High-performance mesh chairs, executive leather armchairs, training chairs, and cafe seating",
      "image_url": "images/categories/cat_seating.jpg",
      "display_order": 4,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Soft Seating",
      "slug": "soft-seating",
      "description": "Executive leather couches, modular lounge sofas, collaborative booths, and pouffes",
      "image_url": "images/categories/cat_soft_seating.jpg",
      "display_order": 5,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Pods",
      "slug": "pods",
      "description": "Solo phone booths and soundproof acoustic meeting pods",
      "image_url": "images/categories/cat_pods.jpg",
      "display_order": 6,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Carpets",
      "slug": "carpets",
      "description": "Acoustic modular carpet tiles in contemporary geometric patterns",
      "image_url": "images/categories/cat_carpets.jpg",
      "display_order": 7,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Outdoor",
      "slug": "outdoor",
      "description": "Synthetic wicker terrace seating, patio umbrellas, and garden breakout sets",
      "image_url": "images/categories/cat_outdoor.jpg",
      "display_order": 8,
      "is_visible": true,
      "is_published": true
    },
    {
      "name": "Educational",
      "slug": "educational",
      "description": "Student classroom desks, library reading carrels, hostel bunk beds, and auditorium chairs",
      "image_url": "images/categories/cat_education.png",
      "display_order": 9,
      "is_visible": true,
      "is_published": true
    }
  ],
  "subcategories": [
    { "name": "Height Adjustable Series", "slug": "height-adjustable-series", "category_slug": "workstations", "display_order": 1 },
    { "name": "Desking Series", "slug": "desking-series", "category_slug": "workstations", "display_order": 2 },
    { "name": "Panel Series", "slug": "panel-series", "category_slug": "workstations", "display_order": 3 },
    { "name": "Cabin Tables", "slug": "cabin-tables", "category_slug": "tables", "display_order": 1 },
    { "name": "Meeting Tables", "slug": "meeting-tables", "category_slug": "tables", "display_order": 2 },
    { "name": "Cafe Tables", "slug": "cafe-tables", "category_slug": "tables", "display_order": 3 },
    { "name": "Training Tables", "slug": "training-tables", "category_slug": "tables", "display_order": 4 },
    { "name": "Prelam Storage", "slug": "prelam-storage", "category_slug": "storage", "display_order": 1 },
    { "name": "Metal Storage", "slug": "metal-storage", "category_slug": "storage", "display_order": 2 },
    { "name": "Compactor Storage", "slug": "compactor-storage", "category_slug": "storage", "display_order": 3 },
    { "name": "Locker", "slug": "locker", "category_slug": "storage", "display_order": 4 },
    { "name": "Mesh Chair", "slug": "mesh-chair", "category_slug": "seating", "display_order": 1 },
    { "name": "Leather Chair", "slug": "leather-chair", "category_slug": "seating", "display_order": 2 },
    { "name": "Training Chair", "slug": "training-chair", "category_slug": "seating", "display_order": 3 },
    { "name": "Cafe Chair", "slug": "cafe-chair", "category_slug": "seating", "display_order": 4 },
    { "name": "Lounge", "slug": "lounge", "category_slug": "soft-seating", "display_order": 1 },
    { "name": "Sofa", "slug": "sofa", "category_slug": "soft-seating", "display_order": 2 },
    { "name": "Collaborative", "slug": "collaborative", "category_slug": "soft-seating", "display_order": 3 },
    { "name": "Pouffe", "slug": "pouffe", "category_slug": "soft-seating", "display_order": 4 },
    { "name": "Occasional Tables", "slug": "occasional-tables", "category_slug": "soft-seating", "display_order": 5 },
    { "name": "Classroom", "slug": "classroom", "category_slug": "educational", "display_order": 1 },
    { "name": "Library", "slug": "library", "category_slug": "educational", "display_order": 2 },
    { "name": "Hostel", "slug": "hostel", "category_slug": "educational", "display_order": 3 },
    { "name": "Auditorium", "slug": "auditorium", "category_slug": "educational", "display_order": 4 }
  ],
  "products": [
    {
      "name": "Veloz Mesh Chair",
      "slug": "veloz-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Veloz ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_4.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 1
    },
    {
      "name": "Feather Mesh Chair",
      "slug": "feather-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Feather ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_5.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 2
    },
    {
      "name": "Eiffel Mesh Chair",
      "slug": "eiffel-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Eiffel ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_6.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 3
    },
    {
      "name": "Mustang Mesh Chair",
      "slug": "mustang-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Mustang ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_7.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 4
    },
    {
      "name": "Bravo Mesh Chair",
      "slug": "bravo-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Bravo ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_8.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 5
    },
    {
      "name": "Polar Mesh Chair",
      "slug": "polar-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Polar ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_9.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 6
    },
    {
      "name": "Glanza Mesh Chair",
      "slug": "glanza-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Glanza ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_10.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 7
    },
    {
      "name": "Yaris Mesh Chair",
      "slug": "yaris-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Yaris ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_11.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 8
    },
    {
      "name": "Quartz Mesh Chair",
      "slug": "quartz-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Quartz ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_12.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 9
    },
    {
      "name": "Ditto Mesh Chair",
      "slug": "ditto-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Ditto ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_13.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 10
    },
    {
      "name": "Velfire Mesh Chair",
      "slug": "velfire-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Velfire ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_14.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 11
    },
    {
      "name": "Optimus Mesh Chair",
      "slug": "optimus-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Optimus ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_15.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 12
    },
    {
      "name": "Zoom Mesh Chair",
      "slug": "zoom-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Zoom ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_16.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 13
    },
    {
      "name": "Comfy Mesh Chair",
      "slug": "comfy-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Comfy ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_17.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 14
    },
    {
      "name": "Rio Mesh Chair",
      "slug": "rio-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Rio ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_18.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 15
    },
    {
      "name": "Hilite Mesh Chair",
      "slug": "hilite-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Hilite ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_19.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 16
    },
    {
      "name": "Ecco Mesh Chair",
      "slug": "ecco-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Ecco ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_20.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 17
    },
    {
      "name": "Vento Mesh Chair",
      "slug": "vento-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Vento ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_21.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 18
    },
    {
      "name": "Aura Mesh Chair",
      "slug": "aura-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Aura ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_22.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 19
    },
    {
      "name": "Dynamic Mesh Chair",
      "slug": "dynamic-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Dynamic ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_23.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 20
    },
    {
      "name": "Butterfly Mesh Chair",
      "slug": "butterfly-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Butterfly ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_24.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 21
    },
    {
      "name": "Mystic Mesh Chair",
      "slug": "mystic-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Mystic ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_25.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 22
    },
    {
      "name": "Breeze Mesh Chair",
      "slug": "breeze-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Breeze ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_26.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 23
    },
    {
      "name": "Matrix 1 Mesh Chair",
      "slug": "matrix-1-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Matrix 1 ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_27.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 24
    },
    {
      "name": "Marvel 1 & 2 Mesh Chair",
      "slug": "marvel-1-2-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Marvel 1 & 2 ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_28.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 25
    },
    {
      "name": "Jazz Mesh Chair",
      "slug": "jazz-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Jazz ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_29.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 26
    },
    {
      "name": "Flash Mesh Chair",
      "slug": "flash-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Flash ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_30.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 27
    },
    {
      "name": "Bonai Mesh Chair",
      "slug": "bonai-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Bonai ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_31.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 28
    },
    {
      "name": "X Mesh Mesh Chair",
      "slug": "x-mesh-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "X Mesh ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_32.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 29
    },
    {
      "name": "Spenser Mesh Chair",
      "slug": "spenser-mesh-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Mesh Series",
      "description": "Spenser ergonomic office chair featuring synchro-tilt mechanism, breathable mesh back, adjustable lumbar support, and heavy-duty nylon base.",
      "specifications": "Synchro-tilt mechanism, Class-4 Gas Lift, Breathable Korean Mesh, Nylon/Diecast Base.",
      "main_image": "images/archlabs/pages/page_33.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 30
    },
    {
      "name": "Luxe Leather Chair",
      "slug": "luxe-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Luxe executive leather chair with top-grain leather upholstery, deep cushioning, and polished aluminium armrests.",
      "specifications": "Top-grain Genuine Leather, Knee-Tilt Lock Mechanism, Polished Diecast Aluminium Base.",
      "main_image": "images/archlabs/pages/page_36.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 31
    },
    {
      "name": "Elara Leather Chair",
      "slug": "elara-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Elara executive leather chair with top-grain leather upholstery, deep cushioning, and polished aluminium armrests.",
      "specifications": "Top-grain Genuine Leather, Knee-Tilt Lock Mechanism, Polished Diecast Aluminium Base.",
      "main_image": "images/archlabs/pages/page_37.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 32
    },
    {
      "name": "Regent Leather Chair",
      "slug": "regent-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Regent executive leather chair with top-grain leather upholstery, deep cushioning, and polished aluminium armrests.",
      "specifications": "Top-grain Genuine Leather, Knee-Tilt Lock Mechanism, Polished Diecast Aluminium Base.",
      "main_image": "images/archlabs/pages/page_38.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 33
    },
    {
      "name": "Forma Leather Chair",
      "slug": "forma-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Forma executive leather chair with top-grain leather upholstery, deep cushioning, and polished aluminium armrests.",
      "specifications": "Top-grain Genuine Leather, Knee-Tilt Lock Mechanism, Polished Diecast Aluminium Base.",
      "main_image": "images/archlabs/pages/page_39.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 34
    },
    {
      "name": "Nero Leather Chair",
      "slug": "nero-leather-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Leather Series",
      "description": "Nero executive leather chair with top-grain leather upholstery, deep cushioning, and polished aluminium armrests.",
      "specifications": "Top-grain Genuine Leather, Knee-Tilt Lock Mechanism, Polished Diecast Aluminium Base.",
      "main_image": "images/archlabs/pages/page_40.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 35
    },
    {
      "name": "Arc Standard Chair",
      "slug": "arc-standard-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "Arc Standard training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_42.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 36
    },
    {
      "name": "Cove Cushioned Chair",
      "slug": "cove-cushioned-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "Cove Cushioned training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_43.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 37
    },
    {
      "name": "Pivot Writing Table Chair",
      "slug": "pivot-writing-table-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "Pivot Writing Table training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_44.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 38
    },
    {
      "name": "Pivot Full Writing Table Chair",
      "slug": "pivot-full-writing-table-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "Pivot Full Writing Table training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_45.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 39
    },
    {
      "name": "Stack Storage Variants Chair",
      "slug": "stack-storage-variants-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "Stack Storage Variants training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_46.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 40
    },
    {
      "name": "ArchTwin Chair",
      "slug": "archtwin-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "ArchTwin training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_47.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 41
    },
    {
      "name": "ArchTwin Flip-Up Table Chair",
      "slug": "archtwin-flip-up-table-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Training Series",
      "description": "ArchTwin Flip-Up Table training chair engineered for seminars, classrooms, and corporate learning centers.",
      "specifications": "Stackable steel frame, optional foldable writing tablet, high-density foam seat.",
      "main_image": "images/archlabs/pages/page_48.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 42
    },
    {
      "name": "Metro Linea 2 Seater",
      "slug": "metro-linea-2-seater",
      "category_slug": "archlabs-seating",
      "subcategory": "Metro Linea",
      "description": "Metro Linea 2 Seater heavy-duty perforated steel beam seating for airports, waiting rooms, and public lobbies.",
      "specifications": "Perforated steel seats, chrome plated beam legs, anti-skid rubber feet.",
      "main_image": "images/archlabs/pages/page_50.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 43
    },
    {
      "name": "Metro Linea 3 Seater",
      "slug": "metro-linea-3-seater",
      "category_slug": "archlabs-seating",
      "subcategory": "Metro Linea",
      "description": "Metro Linea 3 Seater heavy-duty perforated steel beam seating for airports, waiting rooms, and public lobbies.",
      "specifications": "Perforated steel seats, chrome plated beam legs, anti-skid rubber feet.",
      "main_image": "images/archlabs/pages/page_51.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 44
    },
    {
      "name": "Metro Linea 5 Seater",
      "slug": "metro-linea-5-seater",
      "category_slug": "archlabs-seating",
      "subcategory": "Metro Linea",
      "description": "Metro Linea 5 Seater heavy-duty perforated steel beam seating for airports, waiting rooms, and public lobbies.",
      "specifications": "Perforated steel seats, chrome plated beam legs, anti-skid rubber feet.",
      "main_image": "images/archlabs/pages/page_52.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 45
    },
    {
      "name": "AC01 Stack Chair",
      "slug": "ac01-stack-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC01 Stack Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_54.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 46
    },
    {
      "name": "AC02 Curve Chair",
      "slug": "ac02-curve-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC02 Curve Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_55.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 47
    },
    {
      "name": "AC03 Arc Chair",
      "slug": "ac03-arc-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC03 Arc Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_56.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 48
    },
    {
      "name": "AC04 Spindle Chair",
      "slug": "ac04-spindle-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC04 Spindle Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_57.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 49
    },
    {
      "name": "AC06 Timber Chair",
      "slug": "ac06-timber-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC06 Timber Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_58.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 50
    },
    {
      "name": "AC07 Lounge Chair",
      "slug": "ac07-lounge-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC07 Lounge Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_59.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 51
    },
    {
      "name": "AC08 Crest Chair",
      "slug": "ac08-crest-chair",
      "category_slug": "archlabs-seating",
      "subcategory": "Cafeteria Series",
      "description": "AC08 Crest Chair modern cafeteria chair designed for corporate pantries, food courts, and dining halls.",
      "specifications": "Polypropylene moulded shell / bentwood timber frame, chrome steel legs.",
      "main_image": "images/archlabs/pages/page_60.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 52
    },
    {
      "name": "Model HA-01 Sit-Stand Executive Desk",
      "slug": "model-ha-01-sit-stand-executive-desk",
      "category_slug": "workstations",
      "subcategory": "Height Adjustable Series",
      "description": "Motorized dual-motor sit-to-stand executive desk with digital height preset controller and wire raceway.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 53
    },
    {
      "name": "Model HA-02 Back-to-Back Bench System",
      "slug": "model-ha-02-back-to-back-bench-system",
      "category_slug": "workstations",
      "subcategory": "Height Adjustable Series",
      "description": "4-person electric height-adjustable back-to-back benching system with acoustic fabric divider screens.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 54
    },
    {
      "name": "Model HA-03 Corner L-Desk Managerial",
      "slug": "model-ha-03-corner-l-desk-managerial",
      "category_slug": "workstations",
      "subcategory": "Height Adjustable Series",
      "description": "L-shaped motorized height-adjustable desk with integrated side return storage credenza.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 55
    },
    {
      "name": "Model DS-Linear 4-Person Cluster",
      "slug": "model-ds-linear-4-person-cluster",
      "category_slug": "workstations",
      "subcategory": "Desking Series",
      "description": "Linear open-plan 4-person workstation cluster with steel loop leg frame and desktop power boxes.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 56
    },
    {
      "name": "Model DS-Loop Leg 2-Person Bench",
      "slug": "model-ds-loop-leg-2-person-bench",
      "category_slug": "workstations",
      "subcategory": "Desking Series",
      "description": "2-person back-to-back desking bench with powder-coated triangular leg profile.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 57
    },
    {
      "name": "Model PS-60mm Tile Partition System",
      "slug": "model-ps-60mm-tile-partition-system",
      "category_slug": "workstations",
      "subcategory": "Panel Series",
      "description": "60mm thick tile-based partition system with fabric tackable panels, whiteboards, and raceway wire channels.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_workstations.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 58
    },
    {
      "name": "Model CB-Executive Director Desk",
      "slug": "model-cb-executive-director-desk",
      "category_slug": "tables",
      "subcategory": "Cabin Tables",
      "description": "Premium teak veneer executive director desk featuring leatherette desk pad and integrated runner cabinet.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_tables.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 59
    },
    {
      "name": "Model CB-Managerial Side Return Desk",
      "slug": "model-cb-managerial-side-return-desk",
      "category_slug": "tables",
      "subcategory": "Cabin Tables",
      "description": "Managerial L-desk with modesty panel, pedestal drawers, and side runner unit.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_tables.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 60
    },
    {
      "name": "Model MT-12 Seater Boardroom Table",
      "slug": "model-mt-12-seater-boardroom-table",
      "category_slug": "tables",
      "subcategory": "Meeting Tables",
      "description": "12-seater conference boardroom table with pop-up HDMI/LAN/Power connectivity modules.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_tables.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 61
    },
    {
      "name": "Model ST-Mobile Pedestal (3 Drawer)",
      "slug": "model-st-mobile-pedestal-3-drawer-",
      "category_slug": "storage",
      "subcategory": "Prelam Storage",
      "description": "3-drawer mobile under-desk pedestal with central lock, anti-tilt castor, and stationery tray.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_storage.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 62
    },
    {
      "name": "Model PD-Solo Acoustic Telephone Booth",
      "slug": "model-pd-solo-acoustic-telephone-booth",
      "category_slug": "acoustic-pods",
      "subcategory": "Acoustic Work Pods",
      "description": "Sound-insulated solo acoustic phone pod equipped with silent ventilation fan, LED lighting, and power outlets.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_pods.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 63
    },
    {
      "name": "Model CP-Acoustic Nylon Modular Tile",
      "slug": "model-cp-acoustic-nylon-modular-tile",
      "category_slug": "carpets",
      "subcategory": "Interface Carpets",
      "description": "High-performance modular carpet tiles with sound-absorbing recycled cushion backing.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_carpets.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 64
    },
    {
      "name": "Model OD-Synthetic Wicker Terrace Lounge",
      "slug": "model-od-synthetic-wicker-terrace-lounge",
      "category_slug": "outdoor",
      "subcategory": "Outdoor Furniture",
      "description": "Weather-resistant synthetic wicker terrace lounge set with UV-protected outdoor cushions.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_outdoor.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 65
    },
    {
      "name": "Model ED-Single Student Ergonomic Desk",
      "slug": "model-ed-single-student-ergonomic-desk",
      "category_slug": "educational",
      "subcategory": "Educational Solutions",
      "description": "Ergonomic classroom desk & chair combo with book bag hook and wire storage rack.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_education.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 66
    },
    {
      "name": "Model AC-Gas Spring Dual Monitor Arm",
      "slug": "model-ac-gas-spring-dual-monitor-arm",
      "category_slug": "accessories",
      "subcategory": "Workspace Accessories",
      "description": "Full-motion dual monitor gas spring arm with desk clamp and integrated cable management clips.",
      "specifications": "Commercial grade materials, BIFMA certified hardware, 5-year warranty.",
      "main_image": "images/categories/cat_tables.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 67
    },
    {
      "name": "Executive Lounge Armchairs",
      "slug": "executive-lounge-armchairs",
      "category_slug": "soft-seating",
      "subcategory": "Lounge & Executive Sofas",
      "description": "Single-seat ergonomic lounge armchairs in premium leather or acoustic fabric upholstery.",
      "specifications": "High resilience foam, premium fabric / leatherette, hardwood frame.",
      "main_image": "images/categories/cat_soft_seating.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 68
    },
    {
      "name": "2 & 3-Seater Executive Sofas",
      "slug": "2-3-seater-executive-sofas",
      "category_slug": "soft-seating",
      "subcategory": "Lounge & Executive Sofas",
      "description": "Sleek multi-seater reception couches featuring high-resilience foam cushioning.",
      "specifications": "High resilience foam, premium fabric / leatherette, hardwood frame.",
      "main_image": "images/collection/collection-1.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 69
    },
    {
      "name": "Collaborative Booth Seating",
      "slug": "collaborative-booth-seating",
      "category_slug": "soft-seating",
      "subcategory": "Collaborative Seating",
      "description": "High-back sound dampening collaborative booths creating semi-private discussion nooks.",
      "specifications": "High resilience foam, premium fabric / leatherette, hardwood frame.",
      "main_image": "images/collection/collection-2.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 70
    },
    {
      "name": "Geometrical Pouffes & Ottomans",
      "slug": "geometrical-pouffes-ottomans",
      "category_slug": "soft-seating",
      "subcategory": "Pouffes & Ottomans",
      "description": "Flexible circular, hexagonal, and square soft pouffes for breakout areas.",
      "specifications": "High resilience foam, premium fabric / leatherette, hardwood frame.",
      "main_image": "images/sections/s-lookbook-1.jpg",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 71
    },
    {
      "name": "Occasional Center Tables",
      "slug": "occasional-center-tables",
      "category_slug": "soft-seating",
      "subcategory": "Occasional Center Tables",
      "description": "Designer low-height coffee tables with veneered wood or marble tops.",
      "specifications": "High resilience foam, premium fabric / leatherette, hardwood frame.",
      "main_image": "images/categories/cat_tables.png",
      "price": null,
      "display_price": false,
      "enquiry_only": true,
      "is_visible": true,
      "is_published": true,
      "display_order": 72
    }
  ],
  "hero_sections": [
    {
      "heading": "Transforming Workspaces.<br><span class=\"text-gradient-red\">Elevating Possibilities.</span>",
      "description": "Premium office furniture, interior systems, and turnkey workspace solutions designed for modern corporate businesses, MNCs, educational institutions, and professional environments.",
      "slide_1": "images/sections/hero-slide-1.png",
      "slide_2": "images/sections/hero-slide-2.png",
      "slide_3": "images/sections/hero-slide-3.png",
      "background_image": "images/sections/hero-slide-1.png",
      "is_custom_updated": false
    }
  ],
  "about_sections": [
    {
      "title": "Creating Workspaces That Work for You",
      "main_description": "At Vishista Office Solutions Pvt Ltd, we specialize in delivering world-class workspace environments.",
      "is_custom_updated": false
    }
  ],
  "footer_content": [
    {
      "company_description": "Vishista Office Solutions Pvt Ltd is a premier provider of corporate office furniture and turnkey workspace interior solutions.",
      "address": "Plot No 45, Jubilee Hills, Road No 36, Hyderabad, Telangana 500033",
      "phone": "+91 98490 12345",
      "email": "info@vishista.com"
    }
  ],
  "projects": [
    {
      "name": "Corporate Tech Hub",
      "slug": "corporate-tech-hub",
      "client": "MNC Tech Firm, Hitec City",
      "category": "Turnkey Workspace",
      "location": "Hyderabad, Telangana",
      "description": "500-seater modular workstation installation with acoustic panel partitions and executive director cabins.",
      "image_url": "images/sections/hero-slide-1.png",
      "completion_year": "2025",
      "is_visible": true,
      "is_published": true,
      "display_order": 1
    },
    {
      "name": "Financial Services Regional HQ",
      "slug": "financial-services-hq",
      "client": "Leading Financial Institution",
      "category": "Executive Seating & Desks",
      "location": "Gachibowli, Hyderabad",
      "description": "Executive ArchLabs leather seating, high-density compactor storage, and 20-seater boardroom meeting tables.",
      "image_url": "images/sections/hero-slide-2.png",
      "completion_year": "2025",
      "is_visible": true,
      "is_published": true,
      "display_order": 2
    },
    {
      "name": "Global R&D Center",
      "slug": "global-rd-center",
      "client": "Pharma & Biotech Enterprise",
      "category": "Acoustic Pods & Soft Seating",
      "location": "Genome Valley, Hyderabad",
      "description": "Soundproof acoustic meeting pods, collaborative lounge sofa booths, and interface carpet tile flooring.",
      "image_url": "images/sections/hero-slide-3.png",
      "completion_year": "2024",
      "is_visible": true,
      "is_published": true,
      "display_order": 3
    }
  ]
};

// // Initialize Supabase Client dynamically if SDK is loaded
let _supabaseClientInstance = null;

function getSupabaseClient() {
    if (!_supabaseClientInstance && typeof supabase !== 'undefined' && supabase.createClient) {
        try {
            _supabaseClientInstance = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        } catch (e) {
            console.error('[Supabase Client Init Error]', e);
        }
    }
    return _supabaseClientInstance;
}

// Pure SHA-1 Hash generator for Cloudinary signature
function sha1Cloudinary(str) {
    function rotateLeft(n, s) { return (n << s) | (n >>> (32 - s)); }
    function cvtHex(val) {
        let s = '';
        for (let i = 7; i >= 0; i--) {
            const v = (val >>> (i * 4)) & 0x0f;
            s += v.toString(16);
        }
        return s;
    }
    const utf8 = unescape(encodeURIComponent(str));
    const words = [];
    for (let i = 0; i < utf8.length; i++) {
        words[i >> 2] |= (utf8.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
    }
    words[utf8.length >> 2] |= 0x80 << (24 - (utf8.length % 4) * 8);
    words[(((utf8.length + 8) >> 6) << 4) + 15] = utf8.length * 8;

    const w = new Array(80);
    let a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, e = -1009589776;

    for (let i = 0; i < words.length; i += 16) {
        const olda = a, oldb = b, oldc = c, oldd = d, olde = e;
        for (let j = 0; j < 80; j++) {
            if (j < 16) w[j] = words[i + j] || 0;
            else w[j] = rotateLeft(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);

            let t;
            if (j < 20) t = ((b & c) | (~b & d)) + 1518500249;
            else if (j < 40) t = (b ^ c ^ d) + 1859775393;
            else if (j < 60) t = ((b & c) | (b & d) | (c & d)) - 1894007588;
            else t = (b ^ c ^ d) - 899497514;

            t = (t + rotateLeft(a, 5) + e + (w[j] >>> 0) + 0) | 0;
            e = d; d = c; c = rotateLeft(b, 30); b = a; a = t;
        }
        a = (a + olda) | 0;
        b = (b + oldb) | 0;
        c = (c + oldc) | 0;
        d = (d + oldd) | 0;
        e = (e + olde) | 0;
    }
    return (cvtHex(a) + cvtHex(b) + cvtHex(c) + cvtHex(d) + cvtHex(e)).toLowerCase();
}

// Cloudinary Direct Signed Upload Helper
async function uploadToCloudinary(file, onProgress) {
    if (!file) throw new Error('No file provided for upload.');

    const readAsBase64 = (f) => new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = () => resolve(URL.createObjectURL(f));
        reader.readAsDataURL(f);
    });

    try {
        const timestamp = Math.floor(Date.now() / 1000);
        const strToSign = `timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
        const signature = sha1Cloudinary(strToSign);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('api_key', CLOUDINARY_API_KEY);
        formData.append('timestamp', timestamp.toString());
        formData.append('signature', signature);

        return await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`);

            if (onProgress && xhr.upload) {
                xhr.upload.onprogress = (e) => {
                    if (e.lengthComputable) {
                        const percent = Math.round((e.loaded / e.total) * 100);
                        onProgress(percent);
                    }
                };
            }

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const response = JSON.parse(xhr.responseText);
                    resolve({
                        url: response.secure_url || response.url,
                        public_id: response.public_id
                    });
                } else {
                    reject(new Error(`Cloudinary Status ${xhr.status}: ${xhr.responseText}`));
                }
            };

            xhr.onerror = () => reject(new Error('Network error during Cloudinary image upload.'));
            xhr.send(formData);
        });
    } catch (err) {
        console.warn('Cloudinary upload notice:', err);
        if (onProgress) onProgress(100);
        const dataUrl = await readAsBase64(file);
        return { url: dataUrl };
    }
}

function generateUUID() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const _cmsMissingTables = new Set();

// Allowed Postgres columns matching live Supabase tables
const CMS_TABLE_COLUMNS = {
    products: ['id', 'name', 'slug', 'category_id', 'category_slug', 'subcategory', 'description', 'features', 'price', 'main_image', 'additional_images', 'is_featured', 'is_visible', 'display_order', 'created_at', 'updated_at'],
    categories: ['id', 'name', 'slug', 'description', 'image_url', 'display_order', 'is_visible', 'created_at', 'updated_at'],
    subcategories: ['id', 'category_id', 'category_slug', 'name', 'slug', 'display_order', 'created_at'],
    projects: ['id', 'title', 'slug', 'location', 'description', 'main_image', 'gallery_images', 'is_visible', 'display_order', 'created_at', 'updated_at'],
    hero_sections: ['id', 'heading', 'subheading', 'description', 'primary_btn_text', 'primary_btn_link', 'secondary_btn_text', 'secondary_btn_link', 'bg_image_url', 'background_image', 'is_visible', 'updated_at'],
    about_sections: ['id', 'title', 'subtitle', 'main_description', 'secondary_description', 'image_url', 'experience_years', 'btn_text', 'btn_link', 'is_visible', 'updated_at'],
    footer_content: ['id', 'company_description', 'address', 'email_primary', 'email_secondary', 'email_director', 'phone', 'email', 'phone_primary', 'whatsapp_number', 'directions_url', 'copyright_text', 'updated_at'],
    website_settings: ['id', 'site_title', 'tagline', 'contact_email', 'contact_phone', 'address', 'hero_badge_text', 'created_at', 'updated_at'],
    enquiries: ['id', 'full_name', 'email', 'phone', 'company', 'requirement_category', 'product_interest', 'message', 'status', 'created_at']
};

function sanitizeRecord(table, record) {
    if (!record || typeof record !== 'object') return record;
    const allowed = CMS_TABLE_COLUMNS[table];
    if (!allowed) return { ...record };

    const clean = {};
    const rec = { ...record };

    if (!rec.main_image && rec.image) {
        rec.main_image = rec.image;
    }
    if (table === 'hero_sections' && !rec.background_image && rec.slide_1) {
        rec.background_image = [rec.slide_1, rec.slide_2, rec.slide_3].filter(Boolean).join(',');
    }

    for (const key of allowed) {
        if (rec[key] !== undefined) {
            clean[key] = rec[key];
        }
    }
    return clean;
}

const _cmsMemCache = new Map();
const _CMS_CACHE_TTL = 30000; // 30 seconds

// Global Store State Manager (Supabase Database Priority + Fail-Safe Seed & Cache Merger)
const CMSDataStore = {
    clearCache: function(table) {
        if (table) {
            _cmsMemCache.delete(table);
        } else {
            _cmsMemCache.clear();
        }
        if (typeof localStorage !== 'undefined') {
            try { localStorage.setItem('vishista_cms_updated', Date.now().toString()); } catch (e) {}
        }
    },

    get: async function(table, forceFresh = false) {
        const cached = _cmsMemCache.get(table);
        if (!forceFresh && cached && (Date.now() - cached.time < _CMS_CACHE_TTL)) {
            return cached.data;
        }

        const client = getSupabaseClient();
        if (client && !_cmsMissingTables.has(table)) {
            try {
                let query = client.from(table).select('*');
                if (['products', 'categories', 'subcategories', 'projects', 'featured_collections', 'gallery', 'archlabs_series', 'archlabs_products'].includes(table)) {
                    query = query.order('display_order', { ascending: true });
                }
                const { data, error } = await query;
                
                if (error) {
                    if (error.code === 'PGRST205' || error.message?.includes('schema cache') || error.code === '404') {
                        _cmsMissingTables.add(table);
                    }
                    console.warn(`[CMSDataStore] Supabase fetch notice for '${table}':`, error.message);
                } else if (Array.isArray(data) && data.length > 0) {
                    _cmsMemCache.set(table, { data, time: Date.now() });
                    return data;
                }
            } catch (e) {
                console.warn(`[CMSDataStore] Supabase fetch exception for '${table}':`, e.message);
            }
        }
        const seedItems = (typeof VISHISTA_SEED_DATA !== 'undefined' && VISHISTA_SEED_DATA && VISHISTA_SEED_DATA[table]) ? VISHISTA_SEED_DATA[table] : [];
        _cmsMemCache.set(table, { data: seedItems, time: Date.now() });
        return seedItems;
    },

    save: async function(table, records) {
        const client = getSupabaseClient();
        if (!client) throw new Error('Supabase client is not connected.');

        const isArray = Array.isArray(records);
        const list = isArray ? records : [records];
        const sanitizedList = list.map(r => sanitizeRecord(table, r));

        for (const item of sanitizedList) {
            if (item.id) {
                const { error } = await client.from(table).upsert(item, { onConflict: 'id' });
                if (error) throw new Error(`Supabase save error on '${table}': ${error.message}`);
            } else if (item.slug && ['categories', 'products', 'projects', 'subcategories'].includes(table)) {
                const { data: existing } = await client.from(table).select('id').eq('slug', item.slug).maybeSingle();
                if (existing && existing.id) {
                    const { error } = await client.from(table).update(item).eq('id', existing.id);
                    if (error) throw new Error(`Supabase update error on '${table}': ${error.message}`);
                } else {
                    const { error } = await client.from(table).insert([item]);
                    if (error) throw new Error(`Supabase insert error on '${table}': ${error.message}`);
                }
            } else {
                const { data: existingRows } = await client.from(table).select('id').limit(1);
                if (existingRows && existingRows.length > 0 && ['hero_sections', 'about_sections', 'footer_content', 'website_settings'].includes(table)) {
                    const { error } = await client.from(table).update(item).eq('id', existingRows[0].id);
                    if (error) throw new Error(`Supabase update error on '${table}': ${error.message}`);
                } else {
                    const { error } = await client.from(table).insert([item]);
                    if (error) throw new Error(`Supabase insert error on '${table}': ${error.message}`);
                }
            }
        }
        this.clearCache(table);
        return await this.get(table, true);
    },

    insertRecord: async function(table, record) {
        const client = getSupabaseClient();
        if (!client) throw new Error('Supabase client is not connected.');
        const clean = sanitizeRecord(table, record);
        const { data, error } = await client.from(table).insert([clean]).select();
        if (error) throw new Error(`Supabase insert error on '${table}': ${error.message}`);
        this.clearCache(table);
        return await this.get(table, true);
    },

    updateRecord: async function(table, identifier, record) {
        const client = getSupabaseClient();
        if (!client) throw new Error('Supabase client is not connected.');
        const clean = sanitizeRecord(table, record);
        let error = null;

        if (typeof identifier === 'string' && identifier.length === 36 && identifier.includes('-')) {
            const res = await client.from(table).update(clean).eq('id', identifier).select();
            error = res.error;
        } else {
            const res = await client.from(table).update(clean).eq('slug', identifier).select();
            if (res.error || !res.data || res.data.length === 0) {
                const resById = await client.from(table).update(clean).eq('id', identifier).select();
                error = resById.error;
            } else {
                error = res.error;
            }
        }
        if (error) throw new Error(`Supabase update error on '${table}': ${error.message}`);
        this.clearCache(table);
        return await this.get(table, true);
    },

    deleteRecord: async function(table, identifier) {
        const client = getSupabaseClient();
        if (!client) throw new Error('Supabase client is not connected.');
        if (!identifier) return await this.get(table);

        let error = null;
        if (typeof identifier === 'string' && identifier.length === 36 && identifier.includes('-')) {
            const res = await client.from(table).delete().eq('id', identifier);
            error = res.error;
        } else {
            const res = await client.from(table).delete().eq('slug', identifier);
            if (res.error) {
                const resById = await client.from(table).delete().eq('id', identifier);
                error = resById.error;
            } else {
                error = res.error;
            }
        }
        if (error) throw new Error(`Supabase delete error on '${table}': ${error.message}`);
        this.clearCache(table);
        return await this.get(table, true);
    }
};

if (typeof window !== 'undefined') {
    window.SUPABASE_URL = SUPABASE_URL;
    window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
    window.CLOUDINARY_CLOUD_NAME = CLOUDINARY_CLOUD_NAME;
    window.CLOUDINARY_UPLOAD_PRESET = CLOUDINARY_UPLOAD_PRESET;
    window.VISHISTA_SEED_DATA = VISHISTA_SEED_DATA;
    window.getSupabaseClient = getSupabaseClient;
    window.uploadToCloudinary = uploadToCloudinary;
    window.CMSDataStore = CMSDataStore;
}
