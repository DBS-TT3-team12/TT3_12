from flask import Flask, request

from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from flask.json import jsonify, dumps

from flask_jwt_extended import create_access_token, unset_jwt_cookies, jwt_required, JWTManager

app = Flask(__name__)
app.config.from_pyfile('config.py')
app.config["JWT_TOKEN_LOCATION"] = "headers"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///boilerplate.db"

jwt = JWTManager(app)
CORS(app)
db = SQLAlchemy(app)

@app.route('/', methods=["GET", "POST"])
def index():
    return {"msg": "PublicAccess"}

@app.route('/login', methods=["POST"])
def create_token():
    userid = request.json.get("user", None)
    password = request.json.get("password", None)
    # check if user exists
    # user_exists = User.query.filter_by(email=userid).first()
    user_exists = ["default"]
    if user_exists==[] or password != "default":
        return {"msg": "Wrong credentials"}, 401
    access_token = create_access_token(identity=userid)
    response = {"access_token":access_token}
    return response

@app.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "User logged out"})
    unset_jwt_cookies(response)
    return response

@app.route('/private', methods=["GET"])
@jwt_required()
def viewPrivate():
    response = {
        "msg": "AuthUser"
    }
    return response

if __name__=='__main__':
	app.run(debug=True)