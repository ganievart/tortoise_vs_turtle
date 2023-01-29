import requests, json, re

key1 = ''

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
    'imgUrl': 'https://pixabay.com/get/g0b6877599d3d86afafc811a61245ac90cd2ccc713002d2f9000984da4a768051d677eb48227d4691eea2db7597687b56d1b4149e13379f10aefaa393fd465f38_640.jpg'
}


def print_json(obj):

    for tag in obj['tags']:
        for actions in tag['actions']:
            if 'displayName' in actions:
                print(actions['displayName'])


try:
    # response = requests.post(BASE_URI, params=params, headers=HEADERS, files=file)
    response = requests.post(BASE_URI, params=params, headers=HEADERS)

    response.raise_for_status()
    print_json(response.json())

except Exception as ex:
    raise ex
