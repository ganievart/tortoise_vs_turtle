import random
import requests
from flask import make_response
import os
from dotenv import load_dotenv

load_dotenv()

pixabayUrl= "https://pixabay.com/api/"
apiKey = os.getenv("pixabaykey")
query = "turtle|tortoise"
perPage = 10
fetchedImages = []

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
    flask_response = make_response(response.content, response.status_code)
    return flask_response