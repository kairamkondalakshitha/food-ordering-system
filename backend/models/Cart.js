const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");

// Get Cart Items
router.get("/", async (req, res) => {
    try {
        const cart = await Cart.find().populate("food");

        res.json(cart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// Add Item to Cart
router.post("/", async (req, res) => {

    try {

        const cart = new Cart(req.body);

        await cart.save();

        res.status(201).json(cart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Delete Cart Item
router.delete("/:id", async (req, res) => {

    try {

        await Cart.findByIdAndDelete(req.params.id);

        res.json({
            message: "Item Removed"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;