This project is being created because the architecture has changed with the upgrade to Next.js 13.3 (BETA). <br />
이 프로젝트는 Next.js가 13.3(BETA)로 새로운 아키텍처를 테스트하기 위해 만드는 프로젝트 입니다.
<br /><br />
This is a simple project using simple reusable UI components and Next-auth.
<br />
간단한 재사용이 가능한 UI 컴포넌트와 Next-auth를 사용한 간단한 프로젝트입니다.

## Getting Started

First, setting the .env file <br/>

Second, run the development server:

```bash
npm install
# and
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Structures

```text
├── README.md
├── package.json
├── app
│ ├── page.tsx
│ ├── layout.tsx
│ ├── globals.css
│ ├── signIn
│ │ ├── page.tsx
│ │ ├── layout.tsx
│ │ ├── signIn.tsx
├── public
├── ui
│ │ ├── header.tsx
│ │ ├── footer.tsx
│ │ ├── button.tsx
│ │ ├── carousel.tsx
```

- `app`: Source code for the project.
  - `page.tsx`: Pages in the app directory are Server Components by default. This is different from the pages directory where pages are Client Components.
  - `layout.tsx`: This is a root layout that will apply to all routes inside app
- `ui`: ui code for the project.
- `README.md`: This file.

### TODO

- STACK 설명
- 로그인 연결
- 상품 리스트
- 상품 디테일 페이지
- env README 가이드
- 배포
- 테스트
