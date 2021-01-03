from flask_restful import Resource, reqparse
from webargs.flaskparser import use_args
from webargs import fields
import sys
sys.path.insert(0, "..")
from services.testService import TestService
from webargs.flaskparser import use_args
from webargs import fields
from helpers.testHelper import testHelper


from flask import Flask, request


class TestController(Resource):

    classRequest = {
        "topic": fields.Dict(required=True),
    }
    
    @use_args(classRequest)
    def post(self, request):
        print(request['topic'])
        getAnswer= testHelper().getAnswer(request['topic'])
        

        for i in range(0, len(prediction)):
            TestService.insertTest(prediction[i][0])
        return {"message":"food inserted correctly"}

    
  




