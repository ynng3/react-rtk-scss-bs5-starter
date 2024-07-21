# React RTK SCSS Bootstrap 5 Starter Package (react-rtk-scss-bs5-starter)

This package is a starter kit for performing React projects with a consistent design structure.

## Main Package Dependencies

* [React](https://github.com/facebook/react)
* [Typescript](https://github.com/microsoft/TypeScript)
* [Bootstrap](https://github.com/twbs/bootstrap)
* [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
* [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)
* [Sass](https://github.com/sass/sass)

## `/src` Directory Structure

* `src/assets`: Stores resource files such as images and SCSS files.
* `src/components`: Stores components (commonly used components are included in the package).
* `src/pages`: Stores route information for the router.
* `src/store`: Stores individual store files for Redux Toolkit.

## Main File Information

* `index.tsx`: The top-level file that gathers and renders all components and rendering settings.
* `App.tsx`: The top-level component, the first component called by `index.tsx`. It gathers components to be rendered and passes them to `index.tsx`.
* `routes.tsx`: Collects routing information. This information is sent to the `RouteComponent` for rendering.
* `store.tsx`: Creates a global store to manage the state through `ConfigureStore` using reducers declared in individual store files.

## SCSS Information

The Sass in this project is developed using the SMACSS methodology and references Bootstrap.

We adopt a method of customizing core variables by assigning variables from Bootstrap at a higher level. This aims to provide high UI consistency for sites created with this package.

For maintenance and code consistency in future projects, please code uniformly according to the structure below.

* `src/assets/scss/base`: Directory where common CSS, variables, functions, and mixins for the project are declared.
* `src/assets/scss/components`: Directory where SCSS for individual components is declared.
* `src/assets/scss/layout`: Directory where layout-related SCSS is declared.
* `src/assets/scss/pages`: Directory where unique styles for each page, not declared as components, are declared.
* `src/assets/scss/theme`: Directory where theme-related SCSS is declared (used in projects that need to provide individual themes such as dark themes).
* `src/assets/scss/style.scss`: The top-level SCSS file that gathers individual .scss files. This file is included in `index.tsx` and used for rendering.

## Additional Information

* An example component includes a Hamburger menu button that toggles the `hamburger` store state between true and false on click.
* An example component includes Navigation (menu configuration can be managed in `/src/store/menuSlice.tsx`).
* An example component includes `RouteComponent` which performs routing functionality by mapping routing information from `routes.tsx`.
* An example component includes `ScrollToAnchor` which scrolls to the specified id location when a route containing an anchor link is changed, or scrolls to the top otherwise.

## Git Bash Command Information

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make edits.  
You will also see any lint errors in the console.

### `npm test`

Starts the test runner in interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project, so you have full control over them. All the commands except `eject` will still work, but they will point to the copied scripts, so you can tweak them. At this point, you’re on your own.

You don’t have to use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
