-- Supabase Non-Destructive Idempotent Schema for Vishista Office Solutions CMS

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    image_url TEXT,
    display_order INT DEFAULT 0,
    is_visible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    category_slug TEXT,
    subcategory TEXT,
    description TEXT,
    features TEXT,
    price TEXT,
    main_image TEXT NOT NULL,
    additional_images JSONB DEFAULT '[]'::jsonb,
    is_featured BOOLEAN DEFAULT FALSE,
    is_visible BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ensure is_published and category_slug columns exist if tables were previously created without them
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema='public' AND table_name='categories' AND column_name='is_published'
    ) THEN
        ALTER TABLE public.categories ADD COLUMN is_published BOOLEAN DEFAULT TRUE;
    END IF;
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema='public' AND table_name='products' AND column_name='category_slug'
    ) THEN
        ALTER TABLE public.products ADD COLUMN category_slug TEXT;
    END IF;
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema='public' AND table_name='products' AND column_name='is_published'
    ) THEN
        ALTER TABLE public.products ADD COLUMN is_published BOOLEAN DEFAULT TRUE;
    END IF;
END $$;

-- 3B. SUBCATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.subcategories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
    category_slug TEXT NOT NULL,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    location TEXT,
    description TEXT,
    main_image TEXT NOT NULL,
    gallery_images JSONB DEFAULT '[]'::jsonb,
    is_visible BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. TESTIMONIALS TABLE
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name TEXT NOT NULL,
    company_name TEXT,
    designation TEXT,
    location TEXT,
    testimonial_text TEXT NOT NULL,
    rating INT DEFAULT 5,
    image_url TEXT,
    is_visible BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. HERO SECTIONS TABLE
CREATE TABLE IF NOT EXISTS public.hero_sections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    heading TEXT NOT NULL,
    subheading TEXT,
    description TEXT,
    primary_btn_text TEXT,
    primary_btn_link TEXT,
    secondary_btn_text TEXT,
    secondary_btn_link TEXT,
    bg_image_url TEXT,
    background_image TEXT,
    is_visible BOOLEAN DEFAULT TRUE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema='public' AND table_name='hero_sections' AND column_name='background_image'
    ) THEN
        ALTER TABLE public.hero_sections ADD COLUMN background_image TEXT;
    END IF;
END $$;

-- 7. ABOUT SECTIONS TABLE
CREATE TABLE IF NOT EXISTS public.about_sections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    subtitle TEXT,
    main_description TEXT,
    secondary_description TEXT,
    image_url TEXT,
    experience_years TEXT,
    btn_text TEXT,
    btn_link TEXT,
    is_visible BOOLEAN DEFAULT TRUE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. FEATURED COLLECTIONS TABLE
CREATE TABLE IF NOT EXISTS public.featured_collections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    image_url TEXT,
    link_url TEXT,
    display_order INT DEFAULT 0,
    is_visible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. GALLERY TABLE
CREATE TABLE IF NOT EXISTS public.gallery (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT,
    category TEXT,
    image_url TEXT NOT NULL,
    cloudinary_public_id TEXT,
    display_order INT DEFAULT 0,
    is_visible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_name TEXT,
    full_name TEXT NOT NULL,
    company_name TEXT,
    phone_number TEXT NOT NULL,
    email TEXT,
    message TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 11. FOOTER CONTENT TABLE
CREATE TABLE IF NOT EXISTS public.footer_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_description TEXT,
    address TEXT,
    email_primary TEXT,
    email_secondary TEXT,
    email_director TEXT,
    phone TEXT,
    email TEXT,
    phone_primary TEXT,
    whatsapp_number TEXT,
    directions_url TEXT,
    copyright_text TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema='public' AND table_name='footer_content' AND column_name='phone'
    ) THEN
        ALTER TABLE public.footer_content ADD COLUMN phone TEXT;
    END IF;
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema='public' AND table_name='footer_content' AND column_name='email'
    ) THEN
        ALTER TABLE public.footer_content ADD COLUMN email TEXT;
    END IF;
END $$;

-- 12. WEBSITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.website_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    site_name TEXT DEFAULT 'Vishista Office Solutions',
    logo_url TEXT,
    favicon_url TEXT,
    meta_title TEXT,
    meta_description TEXT,
    keywords TEXT,
    og_title TEXT,
    og_description TEXT,
    og_image_url TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 13. ENABLE ROW LEVEL SECURITY (RLS) ON ALL TABLES
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hero_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.about_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.featured_collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.footer_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_settings ENABLE ROW LEVEL SECURITY;

-- 14. CREATE NON-DESTRUCTIVE IDEMPOTENT RLS POLICIES
DO $$ 
BEGIN
    -- Public Read Access Policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read access for categories') THEN
        CREATE POLICY "Allow public read access for categories" ON public.categories FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read access for products') THEN
        CREATE POLICY "Allow public read access for products" ON public.products FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read access for projects') THEN
        CREATE POLICY "Allow public read access for projects" ON public.projects FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read access for testimonials') THEN
        CREATE POLICY "Allow public read access for testimonials" ON public.testimonials FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read access for hero_sections') THEN
        CREATE POLICY "Allow public read access for hero_sections" ON public.hero_sections FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read access for about_sections') THEN
        CREATE POLICY "Allow public read access for about_sections" ON public.about_sections FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read access for featured_collections') THEN
        CREATE POLICY "Allow public read access for featured_collections" ON public.featured_collections FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read access for gallery') THEN
        CREATE POLICY "Allow public read access for gallery" ON public.gallery FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read access for footer_content') THEN
        CREATE POLICY "Allow public read access for footer_content" ON public.footer_content FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read access for website_settings') THEN
        CREATE POLICY "Allow public read access for website_settings" ON public.website_settings FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public insert on enquiries') THEN
        CREATE POLICY "Allow public insert on enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);
    END IF;

    -- Full Access Policies for Authenticated & Anon Clients (Permitting Admin Panel CRUD)
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow all access for categories') THEN
        CREATE POLICY "Allow all access for categories" ON public.categories FOR ALL USING (true) WITH CHECK (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow all access for products') THEN
        CREATE POLICY "Allow all access for products" ON public.products FOR ALL USING (true) WITH CHECK (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow all access for projects') THEN
        CREATE POLICY "Allow all access for projects" ON public.projects FOR ALL USING (true) WITH CHECK (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow all access for hero_sections') THEN
        CREATE POLICY "Allow all access for hero_sections" ON public.hero_sections FOR ALL USING (true) WITH CHECK (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow all access for about_sections') THEN
        CREATE POLICY "Allow all access for about_sections" ON public.about_sections FOR ALL USING (true) WITH CHECK (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow all access for footer_content') THEN
        CREATE POLICY "Allow all access for footer_content" ON public.footer_content FOR ALL USING (true) WITH CHECK (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow all access for enquiries') THEN
        CREATE POLICY "Allow all access for enquiries" ON public.enquiries FOR ALL USING (true) WITH CHECK (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow all access for website_settings') THEN
        CREATE POLICY "Allow all access for website_settings" ON public.website_settings FOR ALL USING (true) WITH CHECK (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow all access for subcategories') THEN
        CREATE POLICY "Allow all access for subcategories" ON public.subcategories FOR ALL USING (true) WITH CHECK (true);
    END IF;


END $$;

-- 14B. ARCHLABS CATALOGUE TABLES

CREATE TABLE IF NOT EXISTS public.archlabs_series (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    badge_text TEXT,
    description TEXT,
    enquiry_label TEXT,
    display_order INT DEFAULT 0,
    is_visible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.archlabs_products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    series_id UUID REFERENCES public.archlabs_series(id) ON DELETE CASCADE,
    series_slug TEXT NOT NULL,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    badge_label TEXT DEFAULT 'ArchLabs Seating',
    display_order INT DEFAULT 0,
    is_visible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.archlabs_series ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.archlabs_products ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read archlabs_series') THEN
        CREATE POLICY "Allow public read archlabs_series" ON public.archlabs_series FOR SELECT USING (true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow all access archlabs_series') THEN
        CREATE POLICY "Allow all access archlabs_series" ON public.archlabs_series FOR ALL USING (true) WITH CHECK (true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read archlabs_products') THEN
        CREATE POLICY "Allow public read archlabs_products" ON public.archlabs_products FOR SELECT USING (true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow all access archlabs_products') THEN
        CREATE POLICY "Allow all access archlabs_products" ON public.archlabs_products FOR ALL USING (true) WITH CHECK (true);
    END IF;
END $$;
