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

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use(express.json());

// Additional security fixes to prevent information disclosure
app.disable('x-powered-by'); // Disable the X-Powered-By header
app.set('etag', false);      // Disable ETag header

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(`Error connecting to MongoDB: ${err}`));

// Use routes
app.use('/api/users', UserRoutes);
app.use('/api/tasks', TodoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
mongoose.connect('mongodb://localhost/todo-app')
  .then(() => console.log('connection is successfull'))
  .catch(err => console.error('Couldn"t connect to mongodB', err))

app.use('/TODO', UserRoutes)
app.use('/TODO', TodoRoutes)


const port = process.env.PORT || 2000;
app.listen(port, () => console.log('Server is running in port 2000'));