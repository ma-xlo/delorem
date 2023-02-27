import express from 'express';
import { __dirname } from './src/helpers/helpers.js';

const app = express();
const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`🏆 Server running on http://localhost:${PORT}/`);
});
