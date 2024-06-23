from flask import Flask, request, jsonify
from flask_cors import CORS
"""
from google.cloud import aiplatform
from vertexai import preview
import vertexai
from typing import Dict, List, Union
from google.cloud import aiplatform
from google.protobuf import json_format
from google.protobuf.struct_pb2 import Value
"""

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['POST'])
def process_answers():
    data = request.json
    test_data = test()
    # Process the data and generate a response
    response = {
        'message': 'Results have been processed',
        'data': test_data  # Here you can include any result processing logic
    }
    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
