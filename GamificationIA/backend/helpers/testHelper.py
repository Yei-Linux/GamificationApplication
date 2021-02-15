
import sys
    
import pandas as pd
import tensorflow as tf

from helpers.util import make_w2v_embeddings
from helpers.util import split_and_zero_padding
from helpers.util import ManDist
#theme = "ajedrez"

class testHelper:
    def getAnswer(self,data):

        test_df = pd.DataFrame.from_dict(data)
        answer=["answer1","answer2","answer3","answer4","answer5"]
        test_df["question2"] = answer
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
        model = tf.keras.models.load_model('./helpers/SiameseLSTM.h5', custom_objects={'ManDist': ManDist})
        model.summary()

        prediction = model.predict([X_test['left'], X_test['right']])
        
        test_df["prediction"]=prediction
        theme_prediction = test_df.groupby(["theme"])["prediction"].mean()
        prediction = theme_prediction.to_dict()

        return prediction 
         



