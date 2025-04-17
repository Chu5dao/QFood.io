const express = require('express');
const dotenv = require('dotenv');
const paymentRoutes = require('./routes/paymentRoutes');
const foodRoutes = require('./routes/foodRoutes');
const testRoutes = require('./routes/testRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/payments', paymentRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/test', testRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
