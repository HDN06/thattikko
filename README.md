<img width="3004" height="816" alt="image" src="https://github.com/user-attachments/assets/2bd462f2-c485-4362-ac87-4acaa3833a58" />

# THATTIKKO.FUN 🟢💛

> **Don't log in. Just Thattikko. 😉**

<br>
THATTIKKO.FUN is a simple, temporary way to send files and content from your **phone to a computer** without logging into personal accounts.

<!-- <img width="1574" height="967" alt="yeahhhhhh 2026-09-18 at 8 23 21 PM" src="https://github.com/user-attachments/assets/cc9b50db-b3ef-4247-bd64-45dbc514edbb" /> -->

## About

THATTIKKO.FUN was created to solve a simple problem in college computer labs: getting something from your phone onto a shared computer without logging into Google Drive, WhatsApp Web, email, or another personal account.

Create a temporary session, connect your phone and computer using a pairing code, send what you need, and finish without leaving your personal account logged in.

Live website: https://thattikko.fun

---

## Features

- Temporary phone-to-computer transfers
- Send files, images, text, and code
- Pair devices using a temporary code
- No Google, WhatsApp, or personal account login
- Automatic session expiration
- Temporary data and transfer cleanup

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Frontend |
| TypeScript | Application development |
| TanStack Router | Routing |
| Tailwind CSS | Styling |
| Supabase | Database and backend |
| Supabase Storage | Temporary file storage |
| Vercel | Deployment |

---

## Project Structure

```text
thattikko/
├── public/          # Static files and favicon
├── src/
│   ├── assets/      # Images and assets
│   ├── components/  # UI components
│   ├── integrations/ # Supabase integration
│   ├── lib/         # App logic and utilities
│   ├── routes/      # Application routes
│   └── styles.css   # Global styles
├── supabase/        # Supabase configuration
├── package.json
└── vite.config.ts
````

---

## Prerequisites

Before running the project locally, make sure you have:

* Node.js 20 or later
* npm
* Git
* A Supabase project

---

## Environment Variables

Create a `.env.local` file in the project root.

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key

SUPABASE_URL=your_supabase_url
SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

VITE_SUPABASE_PROJECT_ID=your_project_id
SUPABASE_PROJECT_ID=your_project_id
```

Do not commit `.env.local` to the repository.

The `SUPABASE_SERVICE_ROLE_KEY` must remain server-side and must never be exposed to the client.

---

## Setup

Clone the repository:

```bash
git clone https://github.com/aneleldho06/thattikko.git
```

Navigate into the project:

```bash
cd thattikko
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
touch .env.local
```

Add your Supabase credentials to `.env.local`.

---

## Run

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

To create a production build:

```bash
npm run build
```

---

## API Endpoints

The application uses Supabase for database and storage operations.

### Application Routes

```text
/
```

Landing page.

```text
/session
```

Create a temporary transfer session.

```text
/connect
```

Connect to an existing session using a pairing code.

### Cleanup Endpoint

```text
/api/public/hooks/cleanup
```

Used to clean up expired sessions and temporary transfer data.

---

## Database

THATTIKKO.FUN uses Supabase with the following main tables:

```text
sessions
transfers
pairing_attempts
```

The application also uses a private Supabase Storage bucket for temporary file transfers.

---

## Notes

* Sessions are temporary and expire automatically.
* Transfers are associated with a specific session.
* File storage is private.
* Row Level Security is enabled on the database tables.
* Server-side operations use the Supabase service role key.
* Never expose server-side credentials in client-side code.
* The project is designed primarily for shared computers and college lab environments.
* The application does not require users to create an account.

---

## License

This project is currently not licensed for redistribution or commercial use.

A formal open-source license will be added if and when the project is officially open-sourced.

---

<p align="center">
  Don't log in. Just Thattikko.
</p>

<p align="center">
  https://thattikko.fun
</p>
```

