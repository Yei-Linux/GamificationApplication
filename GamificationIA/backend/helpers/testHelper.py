import wikipedia
import re
from bs4 import BeautifulSoup
from bs4.element import Comment
import requests
import urllib.request, json
from urllib.request import Request, urlopen
from unidecode import unidecode
import html2text
from requests.exceptions import HTTPError
import collections
import sys
from datetime import datetime, tzinfo, timedelta
import pandas as pd
import tensorflow as tf
print(sys.path)
from helpers.util import make_w2v_embeddings
from helpers.util import split_and_zero_padding
from helpers.util import ManDist
#theme = "ajedrez"

class testHelper:
    def getAnswer(self,data):

        test_df = pd.DataFrame.from_dict(data)
        answer=["hola como?","adam hola?","como estas","pan con queso","jamon"]
        test_df["question2"] = answer
        for q in ['question1', 'question2']:
            test_df[q + '_n'] = test_df[q]

        # Make word2vec embeddings
        embedding_dim = 300
        max_seq_length = 1
        test_df, embeddings = make_w2v_embeddings(test_df, embedding_dim=embedding_dim, empty_w2v=False)

        # Split to dicts and append zero padding.
        X_test = split_and_zero_padding(test_df, max_seq_length)

        # Make sure everything is ok
        assert X_test['left'].shape == X_test['right'].shape

        # --

        model = tf.keras.models.load_model('./helpers/SiameseLSTM.h5', custom_objects={'ManDist': ManDist})
        model.summary()

        prediction = model.predict([X_test['left'], X_test['right']])
        
        return prediction
        
    



