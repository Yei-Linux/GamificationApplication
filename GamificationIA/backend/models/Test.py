from pymongo import MongoClient, IndexModel
from pymongoext import Model, DictField, StringField, IntField, DateTimeField,ListField

class test(Model):
    @classmethod
    def db(cls):
        return MongoClient('mongodb+srv://123:123@cluster0-j3ras.mongodb.net/gamificacion?retryWrites=true&w=majority')['gamificacion']

    __schema__ = DictField(dict(
        id=StringField(required=False),
        #id_user=IntField(required=False),
        q1=IntField(required=False),
        q2=IntField(required=False),
        q3=IntField(required=False),
        q4=IntField(required=False),
        q5=IntField(required=False)
    ))
#statements.createIndex(Indexes.ascending("text"), indexOptions);
    #__indexes__ = [IndexModel("text", unique=False)]

