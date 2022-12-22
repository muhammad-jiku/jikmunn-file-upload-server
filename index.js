require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

// cors config
const corsConfig = {
  origin: true,
  credentials: true,
};

// middleware
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hola amigos!',
  });
});

// listening to the port
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
