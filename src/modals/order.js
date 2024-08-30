const mongoose = require("mongoose");

// Order Schema
const orderSchema = new mongoose.Schema({
  userId: String,
  senderName: String,
  senderPhoneNumber: String,
  receiverName: String,
  receiverPhoneNumber: String,
  cakeName: String,
  cakeType: String,
  weightOrQuantity: String,
  specialWishes: String,
  date: String, // Date when the cake is to be delivered
  time: String, // Time of delivery
  quantity: Number, // If you still want to keep quantity
  price: Number,
  paymentType: String,
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the date when a document is created
  },
  status: String,
  postedDate: {
    type: String,
    required: true,
  },
  createdBy: String
});

module.exports = mongoose.model("Order", orderSchema);
