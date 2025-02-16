import path from 'node:path'
import fs from 'node:fs'

const COMPONENTS_PATH = path.resolve('./src/components');

let file = ``;
let imports = `import { createBrowserRouter } from "react-router";\nimport { Pages } from "./pages"`;
let router = `\n\nexport const router = createBrowserRouter([\n\t{ path: '/docs', Component: Pages },`;

const componentsFolder = fs.readdirSync(COMPONENTS_PATH);

componentsFolder.map((atomicFolder) => {
    fs.readdirSync(`${COMPONENTS_PATH}/${atomicFolder}`).map(componentName => {
        imports += `\nimport { ${componentName}Page } from "./pages/${atomicFolder}/${componentName}Page"`;
        router += `\n\t{ path: "/docs/${atomicFolder.toLowerCase()}/${componentName.toLowerCase()}", Component: ${componentName}Page },`;
    });
})

router +=`\n])\n`;
file = imports + router;

fs.writeFileSync(path.resolve('./docs/router.js'), file);
