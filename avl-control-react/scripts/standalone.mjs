import {readFile,writeFile,mkdir} from 'node:fs/promises';
import path from 'node:path';
// Empacota a compilação Vite em um HTML offline: duplo clique para apresentar.
let html=await readFile('dist/index.html','utf8');
const scripts=[...html.matchAll(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/g)];
for(const match of scripts){const code=await readFile(path.join('dist',match[1]),'utf8');html=html.replace(match[0],`<script type="module">${code.replace(/<\/script/gi,'<\\/script')}</script>`);}
for(const match of [...html.matchAll(/<link\b[^>]*href="([^"]+\.css)"[^>]*>/g)]){const css=await readFile(path.join('dist',match[1]),'utf8');html=html.replace(match[0],`<style>${css}</style>`);}
await mkdir('apresentacao',{recursive:true});await writeFile('apresentacao/ABRIR-AVL-CONTROL.html',html);console.log('Apresentação offline gerada.');
