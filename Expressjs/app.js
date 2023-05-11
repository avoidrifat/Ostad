const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


let books = [];     // An empty array to store books
app.use(express.json());    // Middleware to parse JSON request bodies
app.use(express.static(__dirname));     // Serve static files from the current directory

// A route handler for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// A route handler for the /books route (GET request)
app.get('/books', (req, res) => {
    res.json(books)
})

// A route handler for the /books route (POST request)
app.post('/books', (req, res) => {
    const {title, author, publishedDate} = req.body;

    // Checking if required properties are present and valid
    if (!title || !author || typeof title !== 'string' || typeof author !== 'string') {
        return (res.status(400).json({error: 'Invalid book data'}))
    }

    const id = Date.now().toString();     // Generating a unique ID for the book
    const newBook = {id, title, author, publishedDate};    // Creating a new book object with the ID
    books.push(newBook) //Adding the new book to the collection
    res.json(books); // It returns the updated books array
})

// A route handler for the /books/:id route (DELETE request)
app.delete('/books/:id', (req, res) => {
    const id = req.params.id;      // Access the id parameter from req.params
    const bookIndex = books.findIndex((book) => book.id === id)    // Find the index of the book with the specified ID
    // If the book is not found, return a 404 error
    if (bookIndex === -1) {
        return res.status(404).json({error: 'Book not found'})
    }

    // Remove the book from the collection
    const deletedBook = books.splice(bookIndex, 1)[0];
    res.json({message: 'Book deleted successfully', deletedBook});
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
