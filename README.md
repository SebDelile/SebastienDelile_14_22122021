# HRnet

HRnet is a web application for human ressources management.

A **demo** is hosted on Vercel here : [https://sebdelile-hrnet.vercel.app/](https://sebdelile-hrnet.vercel.app/)

It contains two pages: one with a form to add a new employee, and the other one to display the current employee list.

![app preview - homepage](/docs/screenshot-homepage.png)
![app preview - employee list](/docs/screenshot-employee-list.png)

## How to begin with the project

You need to first install [node](https://nodejs.org/en/) (v14.15.4 or later) on your device in order to run `npm` commands and [git](https://git-scm.com/) to run the `git` commands.

To install the project :

1. clone this repo with `git clone https://github.com/SebDelile/SebastienDelile_14_22122021.git`

2. then go to the new folder with `cd SebastienDelile_14_22122021`

3. install all dependencies with `npm ci`

Then you can start working on the project ! See the script section to learn how to run the project.

## Dependencies

The project is a single page application powered by Next JS. it uses :

- **react** and **react-dom** as a basis to write react components
- **next** for the dev server, build tools and some custom components
- **typescript** to use ts and tsx files, allowing static typing
- **react-hook-form** to manage the form status, error and submission
- **react-datatable-generator** plugin to provide a datatable component
- **react-select** plugin to provide a combobox component
- **react-datepicker** plugin to provide a datepicker component
- **react-modal** plugin to provide a modal component
- **tailwindcss** to style the app with atomic css
- **postcss** needed for tailwind
- **autoprefixer** to allow postcss to add vendor prefix to css rules
- **sharp** to optimize images during production build
- **eslint** and **eslint-config-next** as linter for the code
- **prettier** to format the files (add any missing semi-column and 2 spaces tab-width)
- **@types/node**, **@types/react**, **@types/react-datepicker**, **@types/react-modal** to import type declarations

## Available scripts

In the project, you can run:

### `npm run dev`

Starts Next.js in development mode. Open [http://localhost:3000](http://localhost:3000) to see the app in the browser. The page is automatically reload if you make edit to the code. you will also see lint messages in the console.

### `npm run build`

Generates an optimized version of your application for production. This standard output includes:

- HTML files for pages using getStaticProps or Automatic Static Optimization
- CSS files for global styles or for individually scoped styles
- JavaScript for pre-rendering dynamic content from the Next.js server
- JavaScript for interactivity on the client-side through React

This output is generated inside the `.next` folder

### `npm run start`

Starts the application in production mode. The application should be compiled with `npm run build` first.

Open [http://localhost:4000](http://localhost:4000) to see the app in the browser.

### `npm run lint`

Runs ESLint for all files in the `pages`, `components`, `lib`, `data` and `utils` directories. It also provides a guided setup to install any required dependencies if ESLint is not already configured in your application.
