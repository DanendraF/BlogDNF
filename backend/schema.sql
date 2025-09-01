-- Tabel authors
create table if not exists authors (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    username text unique not null,
    bio text,
    avatar_url text,
    email text unique,
    created_at timestamp with time zone default now()
);

-- Tabel categories
create table if not exists categories (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    slug text unique not null
);

-- Tabel tags
create table if not exists tags (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    slug text unique not null
);

-- Tabel posts
create table if not exists posts (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    slug text unique not null,
    content text not null,
    excerpt text,
    cover_image text,
    author_id uuid references authors(id) on delete set null,
    category_id uuid references categories(id) on delete set null,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now(),
    views integer default 0,
    likes integer default 0,
    published boolean default false
);

-- Tabel relasi many-to-many post_tags
create table if not exists post_tags (
    post_id uuid references posts(id) on delete cascade,
    tag_id uuid references tags(id) on delete cascade,
    primary key (post_id, tag_id)
);

-- Tabel comments (opsional)
create table if not exists comments (
    id uuid primary key default gen_random_uuid(),
    post_id uuid references posts(id) on delete cascade,
    author_id uuid references authors(id) on delete set null,
    content text not null,
    created_at timestamp with time zone default now()
);

-- Tabel users (jika ingin custom user, jika pakai Supabase Auth, abaikan ini)
-- create table if not exists users (
--     id uuid primary key default gen_random_uuid(),
--     email text unique not null,
--     created_at timestamp with time zone default now()
-- );

-- Index untuk pencarian cepat
create index if not exists idx_posts_slug on posts(slug);
create index if not exists idx_posts_author on posts(author_id);
create index if not exists idx_posts_category on posts(category_id);
create index if not exists idx_post_tags_post on post_tags(post_id);
create index if not exists idx_post_tags_tag on post_tags(tag_id);

-- Tambahkan trigger untuk updated_at pada posts
create or replace function update_updated_at_column()
returns trigger as $$
begin
   new.updated_at = now();
   return new;
end;
$$ language 'plpgsql';

drop trigger if exists set_timestamp on posts;
create trigger set_timestamp
before update on posts
for each row
execute procedure update_updated_at_column();

-- Tambahkan trigger untuk updated_at pada comments
create or replace function update_updated_at_column_comments()
returns trigger as $$
begin
   new.updated_at = now();
   return new;
end;
$$ language 'plpgsql';

drop trigger if exists set_timestamp_comments on comments;
create trigger set_timestamp_comments
before update on comments
for each row
execute procedure update_updated_at_column_comments();