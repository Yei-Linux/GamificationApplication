from flask_restful import Resource, reqparse
from webargs.flaskparser import use_args
from webargs import fields
import sys
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
        
        prediction= testHelper().getAnswer(request['topic'])
        #prediction={'theme1': '0.29397693276405334', 'theme2': '0.08840982615947723', 'user': '111@gmail.com'}
        print(prediction)

        TestService.insertTest(prediction)
        return {"message":"food inserted correctly"}

    
  




