const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
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

// Fixing the security issue by removing version information disclosure
mongoose.set('versionKey', false);

// Connect to MongoDB database
const db = process.env.DATABASE;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/tasks', TodoRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
mongoose.connect('mongodb://localhost/todo-app')
  .then(() => console.log('connection is successfull'))
  .catch(err => console.error('Couldn"t connect to mongodB', err))

app.use('/TODO', UserRoutes)
app.use('/TODO', TodoRoutes)


const port = process.env.PORT || 2000;
app.listen(port, () => console.log('Server is running in port 2000'));