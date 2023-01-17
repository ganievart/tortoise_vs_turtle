import time
import logging
from flask import Flask, request

import bingSearch

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/api', methods=['POST'])
def my_endpoint():
    data = request.data
    app.logger.debug(data)
    result = bingSearch.search(data)
    app.logger.debug(result)
    return result
