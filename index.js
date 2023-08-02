const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const aduanRoutes = require('./routes/pengaduan-router')

const app = express();

connectDB();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// routes
app.use(aduanRoutes); 

app.listen(process.env.PORT || 3030, "0.0.0.0", () => {
  console.log('Server berjalan pada port 3030');
});
