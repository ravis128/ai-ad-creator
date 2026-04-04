const express = require('express');
const cors = require('cors');
require('dotenv').config();

const adRoutes = require('./routes/adRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', adRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
