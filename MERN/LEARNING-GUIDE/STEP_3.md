# Mongoose Models and API Handling - Generic Guide

## 1. Create Models Folder and Model File

* Create a folder named `models`.
* Inside it, create a file `<ModelName>Model.js`.

## 2. Model File Structure

```javascript
const mongoose = require('mongoose');

const <ModelName>Schema = new mongoose.Schema({
    // Define fields as key: type
    field1: String,
    field2: Number,
    field3: Boolean
});

const <ModelName> = mongoose.model('<CollectionName>', <ModelName>Schema);
module.exports = <ModelName>;
```

**Explanation:**

* Import `mongoose`.
* Define a schema with the required fields.
* Use `mongoose.model` to create a model that can be reused in other files.

## 3. API Handling - Creating Documents

* Import the model in your backend file (`app.js` or `index.js`):

```javascript
const <ModelName> = require('./models/<ModelName>Model');

app.post('/create<ModelName>', (req, res) => {
    <ModelName>.create(req.body)
        .then(doc => res.json(doc))
        .catch(err => res.status(500).json(err));
});
```

**Explanation:**

* `req.body` contains data sent from frontend.
* Use `axios` or `fetch` to send data from frontend:

```javascript
axios.post('/create<ModelName>', { field1, field2, field3 })
     .then(res => console.log(res.data))
     .catch(err => console.log(err));
```

* This generic approach allows handling any model and API endpoint.

## 4. Best Practices

* Modularize code: Keep models and API routes separate.
* Handle errors gracefully.
* Always validate incoming data.
* Use descriptive collection and model names.
