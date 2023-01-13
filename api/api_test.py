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
    # 'imgUrl': 'https://pixabay.com/get/g9336c593590989531daac3bb7aec8a8a6fbdbf24ed37e72efac7726cef1bb224ef13059db750322e02a1bb0686a5543d2313067f0e9798c5e7c8c01461f63404_640.jpg'
    'imgUrl': 'https://pixabay.com/get/g0b6877599d3d86afafc811a61245ac90cd2ccc713002d2f9000984da4a768051d677eb48227d4691eea2db7597687b56d1b4149e13379f10aefaa393fd465f38_640.jpg'
}

def find_key(obj, key):
    if isinstance(obj, list):
        for item in obj:
            for x in find_key(item, key):
                yield x
    elif isinstance(obj, dict):
        if key in obj:
            yield obj[key]
        else:
            for k in obj:
                for x in find_key(obj[k], key):
                    yield x

# data = json.loads('{"a": {"b": {"c": "d"}}, "e": [{"f": "g"}, {"h": "i"}]}')

def print_json(obj):
    # print(json.dumps(obj))

    # data = json.loads('{"a": {"b": {"c": "d"}}, "e": [{"f": "g"}, {"h": "i"}]}')
    data = obj

    # for value in find_key(data, "displayName"):
    #     print(value)

    # parsed_json = json.loads(obj)

    # data = obj['tags']['actions']
    # print(data)
    # print(city)

    for tag in obj['tags']:
        for actions in tag['actions']:
            if 'displayName' in actions:
                print(actions['displayName'])

            # if '_type' in actions and actions['_type'] == 'ImageModuleAction':
            #     for name in actions.get('data', {}).get('value', {}):
            #         print(name['displayText'])


try:
    # response = requests.post(BASE_URI, params=params, headers=HEADERS, files=file)
    response = requests.post(BASE_URI, params=params, headers=HEADERS)

    response.raise_for_status()
    print_json(response.json())

except Exception as ex:
    raise ex
