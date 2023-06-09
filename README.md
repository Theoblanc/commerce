<div align="center">
  <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
  <h1>Commerce with Next.JS (beta)</h1>
  <p>
Commerce with Next.JS! (Next.js, NextAuth.js v4.22.0, Tailwind CSS)
  </p>

</div>

<br/>

<!-- Table of Contents -->

## 📔 Table of Contents

- [About the Project](#star2-about-the-project)

  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Environment Variables](#key-environment-variables)
  - [File Structure](#file_folder-file-structures)

- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

<div align="center">
  <a href="https://github.com/Theoblanc/commerce" target="_blank">
    <img width="80%" src='https://user-images.githubusercontent.com/45908750/234580269-e5c99da4-baf3-464d-9867-a699e99ea861.gif' alt='image'/>
    </a>
</div>

### :space_invader: Tech Stack

<ul>
  <li><a href="https://#/">Typescript</a></li>
  <li><a href="https://nextjs.org/">Next.js</a></li>
  <li><a href="https://reactjs.org/">React.js</a></li>
  <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  <li><a href="https://nodejs.org/en">Node.js</a></li>
  <li><a href="https://next-auth.js.org/">Next-auth</a></li>
  <li><a href=https://www.mongodb.com/">MongoDB</a></li>
</ul>

<table>
    <tr>
        <td>
          <a href="#">
            <img src="https://user-images.githubusercontent.com/99184393/183096870-fdf58e59-d78c-44f4-bd1c-f9033c16d907.png" alt="Google" width="30" height="30" /></a>
        </td>
        <td>
          <a href="#">
            <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" alt="" width="30" height="30" /></a>
        </td>
        <td>
          <a href="#">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="" width="30" height="30" /></a>
        </td>
        <td>
          <a href="#">
            <img src="https://user-images.githubusercontent.com/99184393/179383376-874f547c-4e6f-4826-850e-706b009e7e2b.png" alt="" width="30" height="30" /></a>
        </td>
        <td>
          <a href="#">
            <img src="https://user-images.githubusercontent.com/99184393/180462270-ea4a249c-627c-4479-9431-5c3fd25454c4.png" alt="" width="30" height="30" />
          </a>
        </td>
        <td>
          <a href="#">
            <img src="https://user-images.githubusercontent.com/99184393/204170976-0e5c6e2a-2b41-483d-adbd-d5d1e40b8d15.png" alt="" width="30" height="30" />
          </a>
        </td>
        <td>
          <a href="#">
            <img src="./public/icons/icons8-mongodb-48.png" />
          </a>
        </td>
    </tr>

</table>

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXTAUTH_URL`

`NEXTAUTH_SECRET`

`GOOGLE_ID`

`GITHUB_SECRET`

`DATABASE_URL`

`DATABASE_URL_WITH_SCHEMA`

### :file_folder: File Structures

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

### FEATRUE

- Tailwind design
- Google authentication
- Github authentication
- Credential authentication

### TODO

- 상품 디테일 페이지
- 배포
- 테스트
