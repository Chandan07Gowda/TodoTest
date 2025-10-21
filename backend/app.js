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
  origin: (origin, callback) => {
    if (['http://localhost:4200', 'https://example.com'].includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use(express.json());

// Fixing the security issue
const version = require('./package.json').version;
app.get('/api/version', (req, res) => {
  res.json({ version });
});

module.exports = app;
mongoose.connect('mongodb://localhost/todo-app')
  .then(() => console.log('connection is successfull'))
  .catch(err => console.error('Couldn"t connect to mongodB', err))

app.use('/TODO', UserRoutes)
app.use('/TODO', TodoRoutes)


const port = process.env.PORT || 2000;
app.listen(port, () => console.log('Server is running in port 2000'));