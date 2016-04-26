from flask import Flask, render_template, flash, request, url_for, redirect, session


app = Flask(__name__)


@app.route('/')
def homepage():
	return render_template("index.html")

# Render registration form
@app.route('/user')
def userForm():
    return render_template("user_form.html")

# Render registration form
@app.route('/login.html')
def loginForm():
    return render_template("login.html")

# Handle submission from registration form and add new user
@app.route('/add_user', methods=['POST'])
def addUser():
    firstname = request.form['inputFirstname']
    return "Hello " + firstname + "!"


if __name__ == "__main__":
    app.run(host='0.0.0.0')
