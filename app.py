import time

from flask import Flask, send_from_directory, request

import bingSearch
import pixabay

app = Flask(__name__, static_url_path='/', static_folder='static')


@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')


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


if __name__ == "__main__":
    app.run()
