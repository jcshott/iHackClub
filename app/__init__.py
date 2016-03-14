from flask import Flask, render_template, flash, request, url_for, redirect, session


app = Flask(__name__)


@app.route('/')
def homepage():
	return render_template("home.html")


if __name__ == "__main__":
    app.run()

