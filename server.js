const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

require('./routes/routes')(app);

// Default response for any other request (Not Found) //catchall
app.use((req, res) => {
    res.status(404).end();
});

//start server on port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});