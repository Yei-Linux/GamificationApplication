from flask import Flask
from flask_restful import Resource,Api

from flask_cors import CORS
import sys

from controllers.TestController import TestController

app = Flask(__name__)
api = Api(app)


api.add_resource(TestController, '/gamificacion/test')
CORS(app)

if __name__ == "__main__":
    
    app.run(debug=True)
