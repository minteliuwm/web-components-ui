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


## Using this component

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
