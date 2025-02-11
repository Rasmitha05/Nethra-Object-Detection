from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS
from routes.auth import init_auth_routes
from routes.model import model_bp
from routes.proxy import proxy_bp  # Import the proxy blueprint
from routes.stich import stich_bp
from routes.model1 import predict_count
from flask import Blueprint, request, jsonify
from PIL import Image

# Initialize Flask app
app = Flask(__name__)

# App configuration
app.config['SECRET_KEY'] = 'your_secret_key'
app.config["MONGO_URI"] = "mongodb://localhost:27017/AttendanceData"

# Initialize MongoDB
mongo = PyMongo(app)

# Enable CORS
CORS(app)

# Register Blueprints
auth_bp = init_auth_routes(mongo)
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(model_bp, url_prefix='/model')
app.register_blueprint(proxy_bp, url_prefix='/proxy')  # Register the proxy blueprint
app.register_blueprint(stich_bp, url_prefix='/image')  

@app.route('/predict', methods=['POST', 'OPTIONS'])
def handle_predict():
    if request.method == 'OPTIONS':
        return '', 200
    
    # Check if the 'url' key is in the request body
    if 'stitched_image' not in request.files:
        return jsonify({"error": "Stitched image is missing"}), 400

    

    # Perform prediction
    try:
        image = Image.open(request.files['stitched_image']).convert("RGB")
        total, duplicates, originals = predict_count(image)
        return jsonify({"total": int(total), "duplicates": int(duplicates), "originals": int(originals)})
        
    except Exception as e:
        return jsonify({"error": f"Prediction failed: {str(e)}"}), 500
# Run the application
if __name__ == "__main__":
    app.run(debug=True, port=5173)
