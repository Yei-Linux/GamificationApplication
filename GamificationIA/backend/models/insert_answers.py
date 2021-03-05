from pymongo import MongoClient, IndexModel

DEFAULT_CONNECTION_URL = 'mongodb+srv://123:123@cluster0-j3ras.mongodb.net/gamificacion?retryWrites=true&w=majority'
database_name = "gamificacion"

client = MongoClient(DEFAULT_CONNECTION_URL)

database = client[database_name]

COLLECTION_NAME = 'Exam'
collection = database[COLLECTION_NAME]
client.list_database_names()


"""
records = [{
        "id_question": "1",
        "theme": "theme1",
        "correct_answer": "answer1"
        },
        {
        "id_question": "2",
        "theme": "theme2",
        "correct_answer": "answer2"
        }
        ]
collection.insert_many(records)
"""
data_answer = []
j=0
for i in collection.find({},{"_id":0,"id_question":1,"theme":1,"correct_answer":1}):
	
	data_answer.append(i)
print(data_answer)


