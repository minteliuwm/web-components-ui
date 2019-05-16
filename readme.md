## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/minteliuwm/web-components-ui.git
cd web-components-ui
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

## Using this components

### In a Vue app
- This can all be done within the **main.js** file.
- Run `npm install web-components-ui --save`
- Import the node module `import { defineCustomElements } from 'web-components-ui/dist/loader';`
- Tell Vue to ignore the custom element tags `Vue.config.ignoredElements = [/wc-\w*/];`
- Bind the Stenciljs component code to the window object `defineCustomElements(window);`
- Then you can use the element anywhere in your template, JSX, html etc

### In a React app
- This can all be done within the **index.js** file.
- Run `npm install web-components-ui --save`
- Import the node module `import { defineCustomElements } from 'web-components-ui/dist/loader';`
- Bind the Stenciljs component code to the window object `defineCustomElements(window);`
- Then you can use the element anywhere in your template, JSX, html etc

### In a Angular app
- Run `npm install web-components-ui --save`
- Import the node module `import { defineCustomElements } from 'web-components-ui/dist/loader';`
- Call **defineCustomElements(window)** from **main.ts** (or some other appropriate place)
- Include the **CUSTOM_ELEMENTS_SCHEMA** in the modules that use the components
- Once included, components could be referenced in your code using **ViewChild** and **ViewChildren**

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/web-components-ui@0.0.1/dist/web-components.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install web-components-ui --save`
- Put a script tag similar to this `<script src='node_modules/web-components-ui/dist/web-components.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install web-components-ui --save`
- Add an import to the npm packages `import web-components-ui;`
- Then you can use the element anywhere in your template, JSX, html etc
