import { fileURLToPath } from 'url';
import { dirname } from 'path';
let __filename;

if(process.platform === 'win32') {
    __filename = fileURLToPath(import.meta.url).replace('helpers\\', '');
} else {
    __filename = fileURLToPath(import.meta.url).replace('helpers/', '');
}
export const __dirname = dirname(__filename);

console.log(__dirname)
