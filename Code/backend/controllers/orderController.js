// controllers/orderController.js
const Order = require("../models/Order");

// Place a new order
exports.placeOrder = async (req, res) => {
  const { userId, products, amount, address } = req.body;

  try {
    const newOrder = new Order({ userId, products, amount, address });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get order history for a user
exports.getOrderHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting order history:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update the status of an order
exports.updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: { status } },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: "Server error" });
  }
};
