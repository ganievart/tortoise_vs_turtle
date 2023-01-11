import requests, json, re
import logging
from collections import Counter
from nltk import ngrams

key1 = '1f7116957a164c98a9d227b7d82193b6'

BASE_URI = 'https://api.bing.microsoft.com/v7.0/images/visualsearch'

SUBSCRIPTION_KEY = key1
imagePath = '2022-12-06 14.52.46.jpg'

HEADERS = {'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY}

def parse(obj):
    result = []
    # print(json.dumps(obj, sort_keys=True, indent=1, separators=(',', ': ')))
    for tag in obj['tags']:
        for data in tag['actions']:
            if "data" in data:
                for d in data['data']['value']:
                    if "displayText" in d:
                        result.append(d['displayText'])
    return result



def most_used_word(result):
    # join all the sentences in the array
    text = ' '.join(result)

    # remove special characters and numbers
    cleaned_text = re.sub('[^A-Za-z]+', ' ', text)

    # convert to lowercase
    cleaned_text = cleaned_text.lower()

    # remove stopwords
    stopwords = ['the', 'are', 'is', 'you']
    filtered_text = ' '.join([word for word in cleaned_text.split() if word not in stopwords])

    # create 2-grams from the filtered text
    bigrams = ngrams(filtered_text.split(), 2)

    # create a counter of the bigrams
    counter = Counter(bigrams)

    # find the most common bigram
    most_common_bigram = counter.most_common(1)[0][0]

    print (most_common_bigram)

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
        most_used_word(result)

    except Exception as ex:
        raise ex
