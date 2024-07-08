const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3006;

app.use(bodyParser.json());

// Serve static images from the 'images' folder
app.use('/images', express.static(path.join(__dirname, 'images')));

// Data for images of people
const peopleImages = [
  { id: 1, name: 'Ariel Campoverde', imageUrl: '/images/cristiano.jpg' },
  { id: 2, name: 'Cristian Caiza', imageUrl: '/images/montalvo.jpg' },
  { id: 3, name: 'Cristiano Ronaldo', imageUrl: '/images/cristianogrande.jpg' },
];

// Endpoint to get all people images
app.get('/people-images', (req, res) => {
  res.json(peopleImages);
});

app.listen(port, () => {
  console.log(`Update service running at ${port}/`);
});
