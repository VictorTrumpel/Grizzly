require('dotenv').config();
import express from 'express';

const PORT = process.env.PORT || 5000;

const app = express();

console.log('Hello world');

app.listen(PORT, () => console.log(`SERVER started on port ${PORT}`));
