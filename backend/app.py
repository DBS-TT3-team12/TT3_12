from flask import Flask, request

from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from flask.json import jsonify, dumps

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///boilerplate.db'
db = SQLAlchemy(app)

@app.route('/', methods=["GET", "POST"])
def index():
    pass

if __name__=='__main__':
	app.run(debug=True)