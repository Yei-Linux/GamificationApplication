
import sys
    
import pandas as pd
import tensorflow as tf

from helpers.util import make_w2v_embeddings
from helpers.util import split_and_zero_padding
from helpers.util import ManDist
from pymongo import MongoClient, IndexModel
import nltk

nltk.download('stopwords')
#theme = "ajedrez"

class testHelper:
    def getAnswer(self,data):
  
        collection=MongoClient('mongodb+srv://123:123@cluster0-j3ras.mongodb.net/gamificacion?retryWrites=true&w=majority')['gamificacion']['Exam']
        data_answer = []
        j=0
    
        for i in collection.find({},{"_id":0,"id_question":1,"theme":1,"correct_answer":1}):
            data_answer.append(i)

   
        for i in range (0, len(data['answers'])):
            search_id=next(item for item in data['answers'] if item['questionId']==str(i+1))['questionId']
            answer_correct=next(item for item in data_answer if item["id_question"] == search_id)['correct_answer']
            data['answers'][i]['correct_answer']=answer_correct

        for i in range (0, len(data['answers'])):
            search_id=next(item for item in data['answers'] if item['questionId']==str(i+1))['questionId']
            theme=next(item for item in data_answer if item["id_question"] == search_id)['theme']
            data['answers'][i]['theme']=theme



        test_df = pd.DataFrame.from_dict(data['answers'])

        test_df = test_df.rename(columns={'response':'question1',"correct_answer":"question2"})

        for q in ['question1', 'question2']:
            test_df[q + '_n'] = test_df[q]

        # Make word2vec embeddings
        embedding_dim = 300
        max_seq_length = 20
        test_df, embeddings = make_w2v_embeddings(test_df, embedding_dim=embedding_dim, empty_w2v=False)

        # Split to dicts and append zero padding.
        X_test = split_and_zero_padding(test_df, max_seq_length)

        # Make sure everything is ok
        assert X_test['left'].shape == X_test['right'].shape

        # --
        model = tf.keras.models.load_model('SiameseLSTM.h5', custom_objects={'ManDist': ManDist})
        model.summary()

        prediction = model.predict([X_test['left'], X_test['right']])
        
        test_df["prediction"]=prediction
        theme_prediction = test_df.groupby(["theme"])["prediction"].mean()
        prediction = theme_prediction.to_dict()
        prediction['user']=data['user']
        return prediction 
         



