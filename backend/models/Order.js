const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

// Get All Orders
router.get("/", async (req, res) => {

    try {

        const orders = await Order.find();

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Place Order
router.post("/", async (req, res) => {

    try {

        const order = new Order(req.body);

        await order.save();

        res.status(201).json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Update Order Status
router.put("/:id/status", async (req, res) => {

    try {

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status
            },
            {
                new: true
            }
        );

        res.json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;