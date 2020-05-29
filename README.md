# rentomojo

Phone Book Web app

Language used:
**NodeJs
ExpressJs
MongoDB**

## Building the app

Get into the rentomojo directory and install the necessary dependencies

```javascript
cd rentomojo
npm install
npm install --save express body-parser mongoose
```
## Run

For starting the server, execute the following command in terminal

```javascript
node index.js
```
Program is locally running on ```http://localhost:3000/```

### Connecting database

We are using MongoDB to store our data. For connecting to the database we use mongoose,
We use **mongoose.connect** method for connecting to DB. We pass the connection URI inside the connect method.

```javascript
mongoose.connect('mongodb://localhost:27017/PhoneBook', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log(error)
})
```
27017 is the default port number of MongoDB. The part after the port number (PhoneBook) is the name of the database.

### Schema

Since we are creating an Phonebook, our schema contains the following fields
- name
- email address
- phone number
- dob(date of birth)

The schema for the data is created using the **mongoose.schema** method in `model.js`.

Then we export the schema that we created using the following code: `module.exports = Address;`

### Defining the routes

`app.METHOD(PATH, HANDLER)`

- app is the instance of express
- METHOD is an HTTP request method. The different types of methods are GET, POST, PUT, DELETE and so on.
- PATH is the path or the endpoint on the server.
- HANDLER is the function executed when the endpoint is matched

`const Address = require('./model/models')`

The above code imports the schema to `index.js` from `models.js` .

For adding a record to DB we need to parse details from the incoming request. This is where body-parser is used. We put body-parser in our app. We are sending the data in urlencoded form.

```app.use(bodyParser.urlencoded({extended: false}))```

## Testing

Since I don’t have a frontend, I will be using a rest client for sending the API request.I’m using **Insomnia**.

### Adding a user details

We send a post request which contains the data. We parse the data using body-parser and pass it to the variables, then we create a new instance of the detail model we created and saves it to DB using the ``collection.save`` method. Then the response is returned.









