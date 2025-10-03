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
Here is the complete fixed code with only the security fixes applied:

```javascript
const tourRoutes=require('./routes/tourRoutes');
const userRoutes=require('./routes/usersRoutes');
const reviewRoutes=require('./routes/reviewRoutes');
const viewRoutes = require ('./routes/viewRoutes');
const bookingRoutes = require ('./routes/BookingRoutes')
const { title } = require('process');

// 2) SECURITY FIX: Use helmet to set security HTTP headers
const helmet = require('helmet');
app.use(helmet());

// 3) SECURITY FIX: Prevent clickjacking
const frameguard = require('frameguard')
app.use(frameguard({ action: 'deny' }))

// 4) SECURITY FIX: Set Content Security Policy
const csp = require('helmet-csp');
app.use(csp({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", 'https://fonts.googleapis.com'],
        scriptSrc: ["'self'", 'https://cdnjs.cloudflare.com', 'https://cdn.jsdelivr.net'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com']
    }
}));

// 5) SECURITY FIX: Prevent XSS attacks
const xssFilter = require('x-xss-protection');
app.use(xssFilter());

// 6) SECURITY FIX: Set Content Type Options
const contentTypeOptions = require('content-type-options');
app.use(contentTypeOptions({}));

// 7) SECURITY FIX: Prevent MIME type sniffing
const noSniff = require('dont-sniff-mimetype')
app.use(noSniff())

// 8) SECURITY FIX: Set Referrer Policy
const referrerPolicy = require('referrer-policy');
app.use(referrerPolicy({ policy: 'same-origin' }));

// 9) SECURITY FIX: Use Content Security Policy (CSP) with a report only mode to log violations
const cspReportOnly = require('helmet-csp-report-only');
app.use(cspReportOnly({
    reportUri: '/report-violation',
    reportOnly: true,
}));

// 10) SECURITY FIX: Set HSTS header to enforce secure HTTPS connections
const hsts = require('hsts');
app.use(hsts({ maxAge: 31536000 })); // 1 year in seconds

// 11) SECURITY FIX: Use X-Content-Type-Options to prevent MIME type sniffing
const xcontenttypeoptions = require('x-content-type-options');
app.use(xcontenttypeoptions({}));

// 12) SECURITY FIX: Set XSS Filter to block reflected XSS attacks
const xssFilterMiddleware = require('x-xss-protection')({ setOnOldIE: true });
app.use(xssFilterMiddleware);

// 13) SECURITY FIX: Use X-DNS-Prefetch-Control to control DNS prefetching
const dnsPrefetchControl = require('dns-prefetch-control');
app.use(dnsPrefetchControl({ allow: false }));

// 14) SECURITY FIX: Use X-Download-Options to prevent execution of content in the browser
const xdownloadoptions = require('x-download-options');
app.use(xdownloadoptions(['noopen']));

// 15) SECURITY FIX: Use Expect-CT to enforce Certificate Transparency requirements
const expectct = require('expect-ct');
app.use(expectct({ enforce: true, maxAge: 30 * 24 * 60 * 60 })); // 30 days in seconds

// 16) SECURITY FIX: Use Feature-Policy to limit the features available to a document
const featurePolicy = require('feature-policy');
app.use(featurePolicy({ features: { fullscreen: ["'self'"], vibrate: [] } }));

// 17) SECURITY FIX: Use Permissions-Policy to restrict access to certain APIs
const permissionsPolicy = require('permissions-policy');
app.use(permissionsPolicy({ permissions: { geolocation: ['none'], microphone: ['none'] } }));

// 18) SECURITY FIX: Set Str