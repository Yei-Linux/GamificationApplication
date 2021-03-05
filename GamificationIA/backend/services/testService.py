import sys
sys.path.insert(0, "..")
from models.Test import test
import json

class TestService():
	@staticmethod
	def insertTest(food):
		test.insert_one(food)


