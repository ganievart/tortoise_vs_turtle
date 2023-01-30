import os
import random

import requests
from dotenv import load_dotenv
from flask import make_response

from client.settings import get_images_query

load_dotenv()

pixabayUrl = "https://pixabay.com/api/"
apiKey = os.getenv("pixabaykey")
query = get_images_query()
perPage = 10


def fetch_total_hits():
    total_hits_url = f'{pixabayUrl}?key={apiKey}&q={query}&per_page={perPage}'
    response = requests.get(total_hits_url)
    return response.json()


def fetch():
    response = fetch_total_hits()
    total_hits = response['totalHits']
    random_page = int(random.random() * (total_hits / perPage)) + 1
    url = f'{pixabayUrl}?key={apiKey}&q={query}&per_page={perPage}&page={random_page}'
    response = requests.get(url)
    fetched_images = response.json()['hits']
    print(fetched_images)
    return make_response(response.content, response.status_code)
