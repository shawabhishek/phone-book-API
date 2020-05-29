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

![Annotation 2020-05-29 123226](https://user-images.githubusercontent.com/32011625/83231416-16115100-a1a9-11ea-90de-227061b70ee4.jpg)

We can use MongoDB Compass to view the data in the DB. For connecting compass to DB we used the connection string ```mongodb://localhost:27017```

![db](https://user-images.githubusercontent.com/32011625/83231804-bb2c2980-a1a9-11ea-8f5d-9ee395b606ec.jpg)

### Reading user details

We pass in the object id of the user in the request and fetches the user with the corresponding object id. If there is a user with the object is we passed we will get the user as the response.

![Annotation 2020-05-29 124417](https://user-images.githubusercontent.com/32011625/83232072-2970ec00-a1aa-11ea-9182-29dc6ababf19.jpg)

### Updating a User

For updating the user we will use the object id of the user. We pass the object id of the user as a parameter of the request.

![ins](https://user-images.githubusercontent.com/32011625/83232660-2296a900-a1ab-11ea-8ac4-0f393df688b9.jpg)

If we look at MongoDB compass we can view the updated data.

![db](https://user-images.githubusercontent.com/32011625/83232681-29bdb700-a1ab-11ea-9439-883b01b168e8.jpg)

### Deleting a User

We pass the id of the user we want to delete in the request. if there is a user with object id we’ve passed, the user will be deleted from the DB and you will get the response as ‘Record deleted’.

![del](https://user-images.githubusercontent.com/32011625/83232950-99cc3d00-a1ab-11ea-9f4b-7a881a29af3c.jpg)















