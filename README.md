#  Book Catalog App

A full-stack **Book Catalog Application** built for the **Scaylar Technologies Associate Software Engineer Challenge**.  
Users can **view, add, and delete books**, with secure **authentication via NextAuth.js** (Google Sign-In or Email/Password).  

---

##  Tech Stack

- **Frontend**: [Next.js (App Router)](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/)  
- **Backend**: Next.js API Routes + [Prisma ORM](https://www.prisma.io/)  
- **Database**: PostgreSQL (Supabase / Neon / ElephantSQL)  
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (Google + Credentials)  
- **Deployment**: [Vercel](https://vercel.com/)  

---

## Features

- View all books in a responsive grid layout  
- Add new books (title, author, genre, user-linked)  
- Delete books instantly (with **SWR revalidation**)  
- User Authentication:
  - Google Sign-In
  - Email/Password (CredentialsProvider)  
- User-specific book ownership stored in DB  
- Responsive Design (Desktop + Mobile tested)  
- Deployed live on Vercel  

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/book-catalog-app.git
cd book-catalog-app


2. Install dependencies

npm install

3. Configure Environment Variables

Create a .env.local file in the project root with:

DATABASE_URL="postgresql://neondb_owner:npg_zloPL9fych3Y@ep-shy-block-advztqcu-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
GOOGLE_CLIENT_ID="your-google-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
NEXTAUTH_SECRET="ba2fd403e8b5702395bcafb53282b768c44f7dff34a18721e7a7e560b92ffb82"

4. Run Prisma migrations

npx prisma migrate dev --name init

5. Start the development server

npm run dev
App will run at: http://localhost:3000

### Deployment

Push code to GitHub

Connect the repo with Vercel

Add environment variables in Vercel Dashboard → Settings → Environment Variables

Deploy 

Live App: https://your-app.vercel.app
Repo: https://github.com/YOUR_USERNAME/book-catalog-app

 Responsive Design Testing

Desktop and Mobile layouts tested using:

Chrome DevTools Device Toolbar

iPhone 12 & Pixel 5 viewport sizes

Responsive grid system with Tailwind breakpoints

📂 Project Structure

bash
Copy code
book-catalog-app/
 ┣ 📂 src/
 ┃ ┣ 📂 app/
 ┃ ┃ ┣ 📂 api/
 ┃ ┃ ┃ ┣ 📂 books/
 ┃ ┃ ┃ ┃ ┣ 📂 [id]/
 ┃ ┃ ┃ ┃ ┃ ┗ route.ts  
 ┃ ┃ ┃ ┃ ┗ route.ts    
 ┃ ┃ ┣ 📂 auth/
 ┃ ┃ ┃ ┗ signin/        
 ┃ ┃ ┣ add/            
 ┃ ┃ ┗ page.tsx        
 ┃ ┣ 📂 components/
 ┃ ┃ ┗ BookCard.tsx    
 ┃ ┣ 📂 lib/
 ┃ ┃ ┗ prisma.ts       
 ┣ prisma/schema.prisma
 ┣ README.md
 ┣ package.json

  Author

Ahmad Hassan – Candidate for Associate Software Engineer @ Scaylar Technologies

 Evaluation Criteria Mapping

Backend API (Next.js + Prisma) 

Authentication (NextAuth.js) 

TypeScript Usage  (strict types used)

Code Structure & Organization (App Router + Prisma + Components)

UI Design & UX  (TailwindCSS, responsive)

Deployment  (Vercel)