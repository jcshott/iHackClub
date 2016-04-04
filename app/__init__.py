from flask import Flask, render_template, flash, request, url_for, redirect, session


app = Flask(__name__)


@app.route('/')
def homepage():
	return render_template("home.html")

# Render registration form
@app.route('/user')
def userForm():
    return render_template("user_form.html")

# Handle submission from registration form and add new user
@app.route('/add_user', methods=['POST'])
def addUser():
    firstname = request.form['inputFirstname']
    return "Hello " + firstname + "!"

@app.route('/create_project', methods=['GET'])
def create_new_project():
	""" returns empty new project form along with the multi-select variables """

	form_variables = {"regions": ["East Bay", "North Bay", "Peninsula", "San Francisco", "South Bay", "All", "n/a"], 
					"technologies": [{'Backend/Server-Side': ["C", "C#", "C++", "Go", "Java", "Node.js", "Perl", "PHP", "Python", "Ruby", "Scala"]}, {"Database": ["MongoDB", "MySQL", "PostgreSQL", "Redis", "SQL Server"]}, {"Frontend": ["HTML/CSS", "Javascript", "Bootstrap", "Angular.js", "Backbone.js", "D3.js", "Ember.js", "jQuery", "React.js" ]}, {"Mobile": ["iOS", "Android"]}], 
					"skills": ["Coding (Server-Side)", "Coding (Frontend)", "Database", "Testing", "UX/UI", "Visual Design"], 
					"industries": ["Consumer", "Education", "Energy", "Enterprise", "Gaming", "Healthcare", "Home", "Security", "Social", "Transportation"], 
					"devices": ["Desktop", "Mobile", "Server Appliance", "Tablet", "Wearable", "Web", "Other"]

	}
	return render_template("new_project.html", formVars=form_variables)

@app.route('/save_project', methods=["POST"])
def process_new_project_data():
	
	# multi-dict with form data http://werkzeug.pocoo.org/docs/0.11/datastructures/#werkzeug.datastructures.MultiDict
	form_data = request.form
	form_data = form_data.to_dict(flat=False)
	# form_data is a dict with key=input name (i.e. project_name) and val=[values]. val will always be a list
	return "ok"


if __name__ == "__main__":
    app.run()

