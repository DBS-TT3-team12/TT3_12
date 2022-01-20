from app import db

# USER TABLE
class User(db.Model):
    User_ID = db.Column(db.Integer, primary_key = True)
    Name = db.Column(db.String(100), nullable = False)
    Age = db.Column(db.Integer, nullable = False)
    Birthday = db.Column(db.Integer, nullable = False)
    Email = db.Column(db.String(100), nullable = False)
    Phone = db.Column(db.Integer, nullable = False)
    City = db.Column(db.String(100), nullable = False)
    Country = db.Column(db.String(100), nullable = False)
    post_comment = db.relationship("POST_COMMENT", backref = "user")
    liked_post = db.relationship("LIKED_POST", backref = "user")

# POST TABLE
class Post(db.Model):
    Post_ID = db.Column(db.Integer, primary_key = True)
    Post_Title = db.Column(db.String(1000), nullable = False)
    Post_Description = db.Column(db.String(1000), nullable = False)
    Post_Image = db.Column(db.String(10000), nullable = False)
    post_comment = db.relationship("POST_COMMENT", backref = "post")
    liked_post = db.relationship("LIKED_POST", backref = "post")

# POST_COMMENT TABLE
class POST_COMMENT(db.Model):
    Comment_ID = db.Column(db.Integer, primary_key = True)
    Post_ID = db.Column(db.Integer, db.ForeignKey("post.Post_ID"))
    User_ID = db.Column(db.Integer, db.ForeignKey("user.User_ID"))
    Comment = db.Column(db.String(10000), nullable = False)

# LIKED_POST TABLE
class LIKED_POST(db.Model):
    User_ID = db.Column(db.Integer, db.ForeignKey("user.User_ID"), primary_key = True)
    Post_ID = db.Column(db.Integer, db.ForeignKey("post.Post_ID"), primary_key = True)

# # Run this code once to create the database
# db.create_all()

