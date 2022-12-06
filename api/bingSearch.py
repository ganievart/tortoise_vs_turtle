import requests, json, re

key1 = '<ASK ARTUR>'

BASE_URI = 'https://api.bing.microsoft.com/v7.0/images/visualsearch'

SUBSCRIPTION_KEY = key1
imagePath = '2022-12-06 14.52.46.jpg'

HEADERS = {'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY}
# file = {'image': ('myfile', open(imagePath, 'rb'))}

params = {
    'cc': 'US',
    'count': '10',
    'setLang': 'en-US',
    'offset': '0',
    'imgUrl': 'https://cdn.pixabay.com/photo/2019/06/16/11/02/turtle-4277518_960_720.jpg'
}


def print_json(obj):
    # print(json.dumps(obj, sort_keys=True, indent=1, separators=(',', ': ')))
    for tag in obj['tags']:
        for data in tag['actions']:
            if "data" in data:
                for d in data['data']['value']:
                    if "displayText" in d:
                        print(d['displayText'])


try:
    # response = requests.post(BASE_URI, params=params, headers=HEADERS, files=file)
    response = requests.post(BASE_URI, params=params, headers=HEADERS)

    response.raise_for_status()
    print_json(response.json())

except Exception as ex:
    raise ex
