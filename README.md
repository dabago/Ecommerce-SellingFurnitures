# Shopping cart

In this exercise you'll create a shopping cart like component for an
ecommerce website.  The server part of the project is already handed
to you in the `server.py` file, you'll only need to create the
frontend components (HTML, CSS, and Javascript).

You can change anything you want in the files you have already in the
repository.  And you can add any other file you need.

The backend (in `server.py`) provides the following routes:
- `@app.route("/catalogue", methods = ["GET"])`
- `@app.route("/shoppingcart", methods = ["GET"])`
- `@app.route("/shoppingcart/<item>", methods = ["POST"])`
- `@app.route("/shoppingcart/<item>", methods = ["DELETE"])`
- `@app.route("/shoppingcart/price", methods = ["GET"])`

If you want to investigate and use a library such as bootstrap to
facilitate frontend development, you're free to do it.

# Running the server

In order to run the server you'll need to execute it with the python
version that ships with Anaconda.  Something like:

`/anaconda3/bin/python server.py`

# Tasks

- Display all elements from the catalogue, along with their prices and
  an **add to cart** button in the **div.catalog**. (in `index.html`)
- Make the **add to cart** button on each article work. (in `index.html`)
- Display the elements in the shoppingcart. (in `shoppingcart.html`)
- Allow the user to remove elements from the shoppingcart. (in `shoppingcart.html`)
- The total price is shown. (in `shoppingcart.html`)
- Add style to both `index.html` and `shoppingcart.html`.  (You can
  get inspiration from sites like https://ecomm.design/).

# Evaluation

In this assignment I'll value:
- **all tasks are completed**.
- **usability**.  I expect that the solutions you submit are usable.
- **layout**.  The elements in the webpage are distributed correctly.
- **interactivity**.  The webpage reacts to my actions (clicking a
  button does the expected action, etc).
  

# Submitting your solution

In order to submit the assignment, you'll need to:
- push all your changes to this repository
- submit the assignment in campus by just sending a link to this
  repository.
