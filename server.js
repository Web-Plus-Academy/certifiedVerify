import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path'
import router from './src/router/user.router.js';
import connectToMongoDB from './src/config/dbConnect.js';
import { fileURLToPath } from 'url';
// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// CORS configuration
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true, // Allow cookies to be sent
};
app.use(cors(corsOptions));
app.use(express.json()); 
app.use(cookieParser());
app.use(bodyParser.json());
// Setting EJS as the default view engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Correctly setting the views directory
app.set('views', path.join(path.resolve(), 'src/views'));


app.use('/',router);


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on http://localhost:${PORT}`);
})

