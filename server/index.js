
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');


//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//Create a item
app.post('/items', async (req, res) => {
  try {
    const { name, description, price, image } = req.body;

    const newItem = await pool.query(
      "INSERT INTO items (name, description, price, image) VALUES($1, $2, $3, $4) RETURNING *",
      [name, description, price, image]
    );

    res.json(newItem.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


//Get all items
app.get('/items', async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM items");
    res.json(allItems.rows);
  } catch (err) {
    console.error(err.message);
  }
})

//Get an item
app.get('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const item = await pool.query("SELECT * FROM items WHERE id = $1;", [id]);

    res.json(item.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/items/type/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const item = await pool.query("SELECT * FROM items WHERE type = $1;", [`${type}`]);

    res.json(item.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/items/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const item = await pool.query("SELECT * FROM items WHERE category = $1;", [`${category}`]);

    res.json(item.rows);
  } catch (err) {
    console.error(err.message);
  }
})

//Update an item

app.put('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, image } = req.body;

    const updateItem = await pool.query(
      "UPDATE items SET name = $1, description = $2, price = $3, image = $4 WHERE id = $5",
      [name, description, price, image, id]
    );

    res.json("Item was updated");
  } catch (err) {
    console.error(err.message);
  }
})

//Delete an item

app.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await pool.query("DELETE FROM items WHERE id = $1", [id]);
    res.json("Item was deleted");
  } catch (err) {
    console.error(err.message);
  }
})

app.listen(5000, () => console.log('Server running on port 5000'));

app.get('/', (req, res) => {
  res.send('Hello World');
});
