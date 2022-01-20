from flask import Flask, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask.json import jsonify, dumps

from flask_jwt_extended import create_access_token, unset_jwt_cookies, jwt_required, JWTManager, get_jwt_identity

import models

app = Flask(__name__)
app.config.from_pyfile('config.py')
app.config["JWT_TOKEN_LOCATION"] = "headers"
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:Www.62511665@127.0.0.1/socialmedia"

jwt = JWTManager(app)
CORS(app)
db = SQLAlchemy(app)

@app.route('/login', methods=["POST"])
def create_token():
    userid = request.json.get("user", None)
    password = request.json.get("password", None)
    # check if user exists
    user_exists = models.User.query.filter_by(Email=userid).first()
    if user_exists and password=="default": 
        #access_token = create_access_token(identity=userid)  
        access_token = create_access_token(identity=user_exists.User_ID)
        response = {"access_token":access_token}
        return response, 200
    return {"msg": "Wrong credentials"}, 401

@app.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "User logged out"})
    unset_jwt_cookies(response)
    return response
#done left pagination
#This is to get all the posts
@app.route('/allPost', methods = ["GET"])
@jwt_required()
def getAllPost():
    #Check if method signature is 'GET'
    if request.method == 'GET':
        all_post = models.Post.query.all()
        cols = ['Post_ID','Post_Title', 'Post_Description', 'Post_Image']
        result = [{col: getattr(d, col) for col in cols} for d in all_post]
        

    return jsonify(result=result)
       
#This is to get only user posts
@app.route('/userPost', methods = ["GET"])
@jwt_required()
def getUserPost():
    filterByUser = request.args.get("filterByUser")
    #Check if method signature is 'GET'
    if request.method == 'GET':
        if filterByUser:
            curruser_id = get_jwt_identity()
            all_post = models.Post.query.filter_by(User_ID=curruser_id)
        else:
            all_post = models.Post.query.all()
            
        cols = ['Post_ID','Post_Title', 'Post_Description', 'Post_Image', 'User_ID']
        result = [{col: getattr(d, col) for col in cols} for d in all_post]
        
    return jsonify(result=result)
     
#done 
#This is to insert new post entry
@app.route('/addPost', methods = ["POST"])
@jwt_required()
def addPost():
    #Check if method signature is 'POST'
    if request.method == 'POST':
        post = request.json
        curruser_id = get_jwt_identity()
        newPost = models.Post(Post_Title = post['title'],Post_Description = post['desc'], Post_Image = post['image'], User_ID=curruser_id)
        
        db.session.add(newPost)
        db.session.commit()
        
        return {"status": "success",  "errorMsg": ""}
    
#done         
#This is to update post entry
@app.route('/editPost', methods = ["POST"])
@jwt_required()
def editPost():
    #Check if method signature is 'POST'
    if request.method == 'POST':
        post = request.json
        post_id = post['postId']
        post_exists = models.Post.query.filter_by(Post_ID=post_id).first()
       
        #post_exists =models.Post.query.filter_by(Post_ID=post_id).update(dict(email='my_new_email@example.com')))
        if post_exists is None:
            return {"status": "fail",  "errorMsg": "Post Not existed"}
        else:
            db.session.query(models.Post).filter_by(Post_ID=post_id).update(dict(Post_Title = post['title'], Post_Description = post['desc'], Post_Image = post['image']))
            db.session.flush()
            db.session.commit()
            
        return {"status": "success",  "errorMsg": ""}

#still fixing
#This is to remove a post entry
@app.route('/deletePost', methods = ["POST"])
#@jwt_required()
def deletePost():
    #Check if method signature is 'POST'
    if request.method == 'POST':
        post = request.json
        post_id = post['postId']
        post_exists = models.Post.query.filter_by(Post_ID=post_id).first()
        
        if post_exists is None:
            return {"status": "fail",  "errorMsg": "Post Not existed"}
        else:
            db.session.query(models.Post).filter_by(Post_ID=post_id).delete()
            db.session.query(models.POST_COMMENT).filter_by(Post_ID=post_id).delete()
            db.session.commit()
            
        return {"status": "success",  "errorMsg": ""}
        
if __name__=='__main__':
	app.run(debug=True)