const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
	res.sendFile("index.html", { root: __dirname });
});

app.get("/roll-a-die", function(req, res) {
	res.json({
		"value": Math.floor(Math.random() * 6)
	});
});

app.listen(port, function() {
	console.log(`Server running on http://localhost:${port}`);
});