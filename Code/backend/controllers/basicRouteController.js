exports.default = (req, res) => {
  res.send("Server is running");
};

exports.get = (req, res) => {
  res.json({ message: "GET request received" });
};

// Handle POST request
exports.post = (req, res) => {
  res.json({ message: "POST request received" });
};

