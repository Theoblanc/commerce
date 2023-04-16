This project is being created because the architecture has changed with the upgrade to Next.js 13.3 (BETA).
이 프로젝트는 Next.js가 13.3(BETA)로 바뀌면서 아키텍처가 변경되었기 때문에 만드는 프로젝트 입니다.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## File Structures

├── README.md
├── package.json
├── app
│ ├── page.tsx
│ ├── layout.tsx
│ ├── globals.css
│ │ ├── header.js
│ │ ├── footer.js
│ ├── signIn
├── public
├── ui

- `app`: Source code for the project.
  - `page.tsx`: Pages in the app directory are Server Components by default. This is different from the pages directory where pages are Client Components.
  - `layout.tsx`: This is a root layout that will apply to all routes inside app
- `ui`: ui code for the project.
- `README.md`: This file.
