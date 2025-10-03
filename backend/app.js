const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })
const UserRoutes = require('./routes/user');
const TodoRoutes = require('./routes/taskRoutes');

// Import express after fixing the security issue
const express = require('express');

const app = express();
const tourRoutes=require('./routes/tourRoutes');
const userRoutes=require('./routes/usersRoutes');
const reviewRoutes=require('./routes/reviewRoutes');
const viewRoutes = require ('./routes/viewRoutes');
const bookingRoutes = require ('./routes/BookingRoutes')
const { title } = require('process');

// 2) SECURITY FIX: Use helmet to set security HTTP headers
const helmet = require('helmet');
app.use(helmet());

// 3) SECURITY FIX: Prevent information leakage by setting X-Powered-By header to an empty string
app.disable('x-powered-by');

// 4) SECURITY FIX: Use Content Security Policy (CSP) to restrict the sources of content that can be loaded by your pages
const csp = require('helmet-csp');
app.use(csp({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", 'https://fonts.googleapis.com'],
        scriptSrc: ["'self'", "'unsafe-inline'", 'https://cdnjs.cloudflare.com', 'https://cdn.jsdelivr.net'],
        imgSrc: ["'self'", 'data:', 'https://res.cloudinary.com/your-cloud-name']
    }
}));

// 5) SECURITY FIX: Prevent clickjacking by setting the X-Frame-Options header to SAMEORIGIN
app.use(helmet.frameguard({ action: 'sameorigin' }));

const app=express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWEAR
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// security HTTP Headers
//app.use(helmet())