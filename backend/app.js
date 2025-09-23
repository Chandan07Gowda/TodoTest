const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
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

// Import dotenv after fixing the security issue
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' }); // Ensure the correct path to config.env is provided

// Import routes after fixing the security issue
const UserRoutes = require('./routes/user');
const TodoRoutes = require('./routes/taskRoutes');

app.use('/api', UserRoutes);
app.use('/api', TodoRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

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