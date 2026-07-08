const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
// const connectDB = require("./config/db");

dotenv.config();

const app = express();

// connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const authRoutes = require("./routes/auth");
const restaurantRoutes = require("./routes/restaurant");
const foodRoutes = require("./routes/food");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const reviewRoutes = require("./routes/review");

app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
    res.send("Online Food Ordering API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});