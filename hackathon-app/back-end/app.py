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

import vertexai
from vertexai.generative_models import GenerativeModel


app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['POST'])
def process_answers():
    data = request.json
    test_data = predict_response(data)
    # Process the data and generate a response
    response = {
        'message': test_data,
        'data': test_data  # Here you can include any result processing logic
    }
    return jsonify(response)


def predict_response(data):
    # TODO(developer): Update and un-comment below line
    project_id = "cambridge-law24cam-7853"

    vertexai.init(project=project_id, location="us-central1")

    model = GenerativeModel(model_name="gemini-1.5-flash-001")

    response = model.generate_content(
        str(data) + "Provide me with a summary in a nice format of this user's claim that they can forward to lawyers"
    )
    print(response.text)
    return (response.text)


if __name__ == '__main__':
    app.run(debug=True)
