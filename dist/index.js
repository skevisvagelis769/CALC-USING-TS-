import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";
const app = express();
const port = 3003;
const address = '127.0.0.2';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
app.use('/', express.static("dist"));
app.listen(port, address, () => console.log(`listening at http://${address}:${port}`));
//# sourceMappingURL=index.js.map