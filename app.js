import express from 'express';
import path from 'path';
import { __dirname } from './src/helpers/helpers.js';

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'html', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`🏆 Server running on http://localhost:${PORT}/`);
});
