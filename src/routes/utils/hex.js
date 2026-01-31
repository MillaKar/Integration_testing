const express = require("express");
const hexToRgb = require("../utils/hex_to_rgb");

const router = express.Router();

router.get("/hex-to-rgb", (req, res) => {
    try {
        const { hex } = req.query;
        const rgb = hexToRgb(hex);
        res.json({hex, rgb});
    } catch {
        res.status(400).json({error: "Invalid hex format..."});
    }
});

module.exports = router;