

# LAB | API APP Practice

## Introduction

This Lab will be go over creating a REST API using the tools you have so far. In this lab you will build the endpoints to create your own beers API similar to the one used in the beers api lab.

## Requirements

- Fork this repo
- Then clone this repo

Endpoints:

| Method | Endpoint            | Response (200)                                         | Action                                                                                                                                  |
| ------ | ------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /beers              | [beers]                                                | Get all the beers from the DB                                                                                                           |
| POST   | /beers              | { newBeer }                                               | create a new beer                                                                                                          |
| PUT    | /beers/:id          | { updatedBeer }                                               | update the value of an existing beer                                                                                                           |
| DELETE | /beers/:id          |  {message: "Beer Successfully Deleted"}  | Delete existing beer                                                                       |
| GET    | /search?q=`{query}` | [beers]                                                | Get beers from the DB whose name contains the search term. For example `/search?q=lager` searches for all beers with lager in the name. |




### Iteration 1: Create the POST route for all beers

We should set up our first route to POST a new beer to our database. This route should recieve the following from the body of the request:

- image_url
- name
- tagline
- first_brewed
- description
- attenuation_level
- brewers_tips

  Once the information is recieved in the request a new document should be created in the database and as a response should send back the newly created beer.



### Iteration 2: Create the GET route to retrieve all the beers

Now, set up a route that will recieve a request and as a response send back all the beers we have in our database.

### Iteration 3: Create the PUT route to update an existing 

This route should recieve the id of the beer to be edited in the url and should also recieve the new data for the beer in the body of the request.
Once this information is recieved the route should update the information for the document and in the response should send back the updated beer.

### Iteration 4: Create the DELETE route to delete a single beer

Finally, to complete our CRUD operations we need a DELETE route to a single beer. This route should recieve the id of the beer to be deleted in the url of the request. The response should be an object as follows: {message: "Beer Successfully Deleted"}



### Bonus: Iteration 5: Search Beers Endpoint

Create a route that recieves a string in the url of the request. If any of the beers in our database contain that string then this route should return those beers.

  **HINT:**
   - once you recieve the request with the dynamic parameter query the database using the $regex operator
  
