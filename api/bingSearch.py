import requests, json, re
import logging
from collections import Counter
from nltk import ngrams

key1 = ''

BASE_URI = 'https://api.bing.microsoft.com/v7.0/images/visualsearch'

SUBSCRIPTION_KEY = key1
imagePath = '2022-12-06 14.52.46.jpg'

HEADERS = {'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY}


def parse(obj):
    result = []
    for tag in obj['tags']:
        for actions in tag['actions']:
            if 'displayName' in actions:
                result.append(actions['displayName'])
    return result


def most_used_word(result):
    text = ' '.join(result)
    cleaned_text = re.sub('[^A-Za-z]+', ' ', text)
    cleaned_text = cleaned_text.lower()
    stopwords = ['the', 'are', 'is', 'you']
    filtered_text = ' '.join([word for word in cleaned_text.split() if word not in stopwords])
    n = min(2, len(filtered_text))
    bigrams = ngrams(filtered_text.split(), n)
    counter = Counter(bigrams)
    most_common_bigram = counter.most_common(1)[0][0]
    return ' '.join(most_common_bigram)


def search(url):
    params = {
        'cc': 'US',
        'count': '10',
        'setLang': 'en-US',
        'offset': '0',
        'imgUrl': url
    }
    try:
        print(url)
        # response = requests.post(BASE_URI, params=params, headers=HEADERS, files=file)
        response = requests.post(BASE_URI, params=params, headers=HEADERS)

        response.raise_for_status()

        result = parse(response.json())
        # print(result)
        return "It's probably - " + most_used_word(result)

    except Exception as ex:
        logging.error(ex)
        return "Can't identify image, check logs"
