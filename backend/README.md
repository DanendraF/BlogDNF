# Backend Blog Awan

Backend ini dibangun dengan **Node.js**, **Express**, dan **Supabase** sebagai database utama.  
Struktur modular memudahkan pengembangan dan pemeliharaan API untuk aplikasi blog.

---

## Struktur Folder

```
backend/
  ├── src/
  │   ├── index.ts                # Entry point Express
  │   ├── services/               # Logic akses data Supabase per tabel
  │   │     ├── postsService.ts
  │   │     ├── authorsService.ts
  │   │     ├── categoriesService.ts
  │   │     ├── tagsService.ts
  │   │     └── commentsService.ts
  │   └── routes/                 # Routing Express per resource
  │         ├── postsRoutes.ts
  │         ├── authorsRoutes.ts
  │         ├── categoriesRoutes.ts
  │         ├── tagsRoutes.ts
  │         └── commentsRoutes.ts
  ├── .env                        # Konfigurasi environment (Supabase, port, dsb)
  ├── package.json
  └── README.md
```

---

## Teknologi

- **Node.js** & **Express**: Server REST API
- **Supabase**: Database PostgreSQL + API
- **TypeScript**: Tipe data statis
- **dotenv**: Load environment variable

---

## Konfigurasi

1. **.env**
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   PORT=3001
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Jalankan server**
   ```
   npm run dev
   ```

---

## Endpoint CRUD per Resource

### 1. **Posts**
| Method | Endpoint           | Deskripsi           |
|--------|--------------------|---------------------|
| GET    | `/api/posts`       | List semua post     |
| GET    | `/api/posts/:id`   | Detail post         |
| POST   | `/api/posts`       | Tambah post         |
| PATCH  | `/api/posts/:id`   | Update post         |
| DELETE | `/api/posts/:id`   | Hapus post          |

### 2. **Authors**
| Method | Endpoint             | Deskripsi           |
|--------|----------------------|---------------------|
| GET    | `/api/authors`       | List semua author   |
| GET    | `/api/authors/:id`   | Detail author       |
| POST   | `/api/authors`       | Tambah author       |
| PATCH  | `/api/authors/:id`   | Update author       |
| DELETE | `/api/authors/:id`   | Hapus author        |

### 3. **Categories**
| Method | Endpoint                | Deskripsi           |
|--------|-------------------------|---------------------|
| GET    | `/api/categories`       | List semua kategori |
| GET    | `/api/categories/:id`   | Detail kategori     |
| POST   | `/api/categories`       | Tambah kategori     |
| PATCH  | `/api/categories/:id`   | Update kategori     |
| DELETE | `/api/categories/:id`   | Hapus kategori      |

### 4. **Tags**
| Method | Endpoint           | Deskripsi           |
|--------|--------------------|---------------------|
| GET    | `/api/tags`        | List semua tag      |
| GET    | `/api/tags/:id`    | Detail tag          |
| POST   | `/api/tags`        | Tambah tag          |
| PATCH  | `/api/tags/:id`    | Update tag          |
| DELETE | `/api/tags/:id`    | Hapus tag           |

### 5. **Comments**
| Method | Endpoint              | Deskripsi           |
|--------|-----------------------|---------------------|
| GET    | `/api/comments`       | List semua komentar (bisa filter by postId) |
| GET    | `/api/comments/:id`   | Detail komentar     |
| POST   | `/api/comments`       | Tambah komentar     |
| PATCH  | `/api/comments/:id`   | Update komentar     |
| DELETE | `/api/comments/:id`   | Hapus komentar      |

---

## Catatan

- Semua endpoint menerima dan mengembalikan data dalam format JSON.
- Untuk keamanan production, aktifkan Row Level Security (RLS) di Supabase.
- Pastikan variabel environment sudah diisi dengan benar.

---

**Kontribusi dan Dukungan**

Jika Anda menemukan bug atau memiliki saran, silakan buka isu di repositori ini.  
Dukungan Anda sangat berarti untuk pengembangan proyek ini.