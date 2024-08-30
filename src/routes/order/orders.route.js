const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const order_controller = require("./order.controller");
const adminCheck = require("../../middleware/adminCheck");

router.post("/create-order", order_controller.createOrder);
router.put("/update-order/:id", order_controller.updateOrder);
router.delete("/delete-order/:id", auth, order_controller.deleteOrder);
router.get("/order/:id", auth, order_controller.orderById);
router.get("/orders/:userId", auth, order_controller.getOrderByUserId);
router.get("/orders", order_controller.getAllOrders);

router.get("/orders/by-date/:postedDate", order_controller.searchByDate)
router.get("/orders/by-date-range/:startDate/:endDate", order_controller.byDateRange)


module.exports = router; // Corrected from `module. Exports` to `module.exports`


// http://localhost:3001/orders/by-date-range?startDate=25-8-24&endDate=27-8-24