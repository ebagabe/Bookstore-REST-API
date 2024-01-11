# What tools did I use to develop this application?

- Javascript
- NodeJs (Version 18)
- Express
- Mongodb
- Mongoose
- Nodemon and dotenv as developer tool

## How to run this application

- Install dependencies with `npm install`
- Initialize the server: `npm run dev`
- Test the endpoint in Postman or similar: `http://localhost:3000`
- Replace the .env.example with .env and update it with your environment variables according to your machine and configurations.

## List Books

Returns a list of all books.

- **URL**
  `/books`

- **Method:**
  `GET`

- **Successful Response:**
  - Code: 200
  - Content:
    ```json
    [
      {
        "_id": "65a0299f6e610a5cd290bbec",
        "title": "Harry Potter",
        "publisher": "Classics",
        "price": 10,
        "pages": 240
      },
      // Other books...
    ]
    ```

## Get Book by ID

Returns a specific book based on the provided ID.

- **URL**
  `/books/:id`

- **Method:**
  `GET`

- **URL Parameters:**
  - `id` (integer) - Unique ID of the book to be retrieved.

- **Successful Response:**
  - Code: 200
  - Content:
    ```json
    {
        "_id": "65a0299f6e610a5cd290bbec",
        "title": "Harry Potter",
        "publisher": "Classics",
        "price": 10,
        "pages": 240
    }
    ```

## Register New Book

Registers a new book in the database.

- **URL**
  `/books`

- **Method:**
  `POST`

- **Request Body:**
  ```json
    {
        "title": "Harry Potter",
        "publisher": "Classics",
        "price": 10,
        "pages": 240
    }
  ```
**Successful Response:**

- Code: 201 (Created)
- Content: 

```json
    {
        "id": "65a0299f6e610a5cd290bbec",
        "title": "Harry Potter",
        "publisher": "Classics",
        "price": 10,
        "pages": 240
    }
  ```
## Update Book by ID

Updates the information of a specific book based on the provided ID.

- **URL** `/books/:id`
    
- **Method:** `PUT`
    
- **URL Parameters:**
    
    - `id` (integer) - Unique ID of the book to be updated.
- **Request Body:**

```json
    {
        "title": "Harry Potter New",
        "publisher": "Classics",
        "price": 10,
        "pages": 270
    }
```

 **Successful Response:**
- Code: 200
- Content:

```json
    {
        "title": "Harry Potter New",
        "publisher": "Classics",
        "price": 10,
        "pages": 270
    }
```

## Delete Book by ID

Deletes a specific book based on the provided ID.

- **URL** `/books/:id`
    
- **Method:** `DELETE`
    
- **URL Parameters:**
    - `id` (string) - Unique ID of the book to be deleted.
- **Successful Response:**
    
    - Code: 204 (No Content)
    - Content: None
- **Error Response:**
    
    - Code: 500 (Internal Server Error)
    - Content:
  
```json
    {
        "message": "Failed to delete the book"
    }
```