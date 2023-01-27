import time
from flask import Flask, request

import bingSearch
import pixabay

app = Flask(__name__)


@app.route('/fetchImages')
def fetch_images():
    return pixabay.fetch()


@app.route('/api', methods=['POST'])
def my_endpoint():
    data = request.data
    app.logger.debug(data)
    result = bingSearch.search(data)
    app.logger.debug(result)
    return result


@app.route('/timeTest')
def get_current_time():
    return {'time': time.time()}
