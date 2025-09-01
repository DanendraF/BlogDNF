# BlogDNF

BlogDNF adalah aplikasi blog modern berbasis **Node.js (Express)** untuk backend dan **Next.js (React)** untuk frontend, menggunakan **Supabase** sebagai layanan database dan autentikasi.  
Proyek ini mendukung fitur multi-user, CRUD post, kategori, tag, komentar, serta autentikasi JWT.

---

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Struktur Folder](#struktur-folder)
- [Setup & Instalasi](#setup--instalasi)
- [Konfigurasi Environment](#konfigurasi-environment)
- [Endpoint Backend](#endpoint-backend)
- [Autentikasi](#autentikasi)
- [Menjalankan Project](#menjalankan-project)
- [Testing](#testing)
- [Catatan Pengembangan](#catatan-pengembangan)

---

## Fitur

- Register & Login user (Supabase Auth)
- CRUD Posts, Authors, Categories, Tags, Comments, Users
- Dashboard user (hanya untuk user login)
- Search & filter post
- Middleware autentikasi JWT untuk endpoint yang sensitif
- Responsive UI (Next.js)
- Relasi antar tabel (author, kategori, tag, dsb)

---

## Teknologi

- **Frontend:** Next.js, React, TailwindCSS
- **Backend:** Node.js, Express, TypeScript
- **Database & Auth:** Supabase (PostgreSQL + Auth)
- **Lainnya:** dotenv, @supabase/supabase-js, JWT

---

## Struktur Folder

```
blogDNF/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   └── index.ts
│   ├── .env
│   └── package.json
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── lib/
│   ├── .env.local
│   └── package.json
└── README.md
```

---

## Setup & Instalasi

### 1. **Clone repo**
```sh
git clone https://github.com/username/blogDNF.git
cd blogDNF
```

### 2. **Install dependencies**
```sh
cd backend
npm install
cd ../frontend
npm install
```

### 3. **Setup Supabase**
- Buat project di [Supabase](https://supabase.com/)
- Salin URL dan API Key ke file `.env` (backend) dan `.env.local` (frontend)
- Jalankan SQL berikut di Supabase SQL Editor untuk membuat tabel:
  ```sql
  -- Contoh tabel users
  create table if not exists users (
      id uuid primary key default gen_random_uuid(),
      email text unique not null,
      full_name text,
      avatar_url text,
      created_at timestamp with time zone default now()
  );
  -- Tambahkan tabel posts, authors, categories, tags, comments sesuai kebutuhan
  ```

---

## Konfigurasi Environment

### **Backend: `.env`**
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
PORT=3001
```

### **Frontend: `.env.local`**
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## Endpoint Backend

### **Posts**
| Method | Endpoint           | Keterangan           |
|--------|--------------------|----------------------|
| GET    | `/api/posts`       | List semua post      |
| GET    | `/api/posts/:id`   | Detail post          |
| POST   | `/api/posts`       | Tambah post (login)  |
| PATCH  | `/api/posts/:id`   | Edit post (login)    |
| DELETE | `/api/posts/:id`   | Hapus post (login)   |

### **Authors, Categories, Tags, Comments, Users**
- Pola endpoint sama seperti di atas (`/api/authors`, `/api/categories`, dst)
- Semua endpoint POST, PATCH, DELETE membutuhkan login (JWT di header Authorization)

---

## Autentikasi

- **Register & Login** menggunakan Supabase Auth (frontend)
- **Token JWT** dikirim via header:
  ```
  Authorization: Bearer <access_token>
  ```
- Backend memverifikasi token pada endpoint yang sensitif menggunakan middleware `requireAuth`

---

## Menjalankan Project

### **Backend**
```sh
cd backend
npm run dev
```

### **Frontend**
```sh
cd frontend
npm run dev
```
Akses frontend di [http://localhost:3000](http://localhost:3000)

---

## Testing

- Gunakan Postman, curl, atau file `.http` untuk test endpoint backend.
- Contoh request:
  ```http
  GET http://localhost:3001/api/posts

  POST http://localhost:3001/api/posts
  Authorization: Bearer <access_token>
  Content-Type: application/json

  {
    "title": "Judul",
    "slug": "judul",
    "content": "Isi",
    "author_id": "uuid-author"
  }
  ```

---

## Catatan Pengembangan

- Jangan commit file `.env` dan `.env.local` (sudah ada di `.gitignore`)
- Untuk production, aktifkan Row Level Security (RLS) di Supabase
- Pastikan semua variabel environment sudah benar
- Untuk pengembangan lebih lanjut (role-based, upload gambar, dsb), silakan modifikasi sesuai kebutuhan

---

**Kontribusi dan pertanyaan silakan buka issue atau pull request di