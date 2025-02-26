import path from 'node:path'
import fs from 'node:fs'

const COMPONENTS_PATH = path.resolve('./src/components');

const JS_DOCS_REGEX = /\/\*\*([\s\S]*?)\*\//g;

const STRICT_DECORATORS = ['@param','@default','@returns']

const componentsFolder = fs.readdirSync(`${COMPONENTS_PATH}`);

const file = []

const extractComponentJSDocs = (filePath, componentName) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    const matches = ([...content.matchAll(JS_DOCS_REGEX)]);       

    return matches.map(match => {

        const docsBlock = match[1].trim();
        const lines = docsBlock.split("\n").map(line => line.replace(/^\s*\*\s?/, "").trim());
        const tags = lines.filter(line => !STRICT_DECORATORS.includes(line.split(" ")[0])  && line.startsWith("@")).map(tag => tag.replace("@","").trim());
        const props = lines.filter(line => line.startsWith("@param") || line.startsWith("@default")).map(prop => prop.replace("@param","").trim()).map(
            prop => {                
                if(!prop.match(/\bprops\.\b/)) return
                
                return {
                    type: [...prop.matchAll(/\{([^}]+)\}/g)].map(match => match[1]).toString(),
                    name: [...prop.matchAll(/props\.([a-zA-Z0-9_]+)/g)].map(match => match[1]).toString(),
                    description: [...prop.matchAll(/(?<=\s-\s)([^.]*)/g)].map(match => match[1]).toString(),
                    default: [...prop.matchAll(/@default\s+(.*)/g)].map(match => match[1]).toString()
                }
            }
        )
        console.log(props);
        
        file.push({
            tags,
            componentName,
            props: props.filter(prop => prop)
        });
    });
}

const scanDirectoryEfficient = (dir) => {
    let filesToProcess = [dir];

    while (filesToProcess.length > 0) {
        
        const currentDir = filesToProcess.pop();
        const entries = fs.readdirSync(currentDir, { withFileTypes: true });
        const componentName = currentDir.split("components/")[1]        
        
        for (const entry of entries) {
            const fullPath = path.join(currentDir, entry.name);
            if (entry.isDirectory()) {
                filesToProcess.push(fullPath);
            } else if (fullPath.endsWith(".jsx")) {                
                return extractComponentJSDocs(fullPath, componentName)
            }
        }
    }
    return [];
}

const runDocsJsonGenerator = () => {
    componentsFolder.map(atomicFolder => {
        fs.readdirSync(`${COMPONENTS_PATH}/${atomicFolder}`).map(componentFolder => {
            scanDirectoryEfficient(`${COMPONENTS_PATH}/${atomicFolder}/${componentFolder}`);       
        })
    });
    
    fs.writeFileSync(`${path.resolve("./docs")}/docs.json`, JSON.stringify(file), 'utf-8')
}

runDocsJsonGenerator();