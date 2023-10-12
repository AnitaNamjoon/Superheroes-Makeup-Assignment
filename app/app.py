
from flask import Flask, jsonify, make_response, request
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, Hero  # Make sure you import the Hero model

app = Flask(__name)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)
migrate = Migrate(app, db)

db.init_app(app)

@app.route('/heroes', methods=['GET'])
def heroes():
    heroes = []
    for hero in Hero.query.all():
        hero_dict = {
            "id": hero.id,
            "name": hero.name,
            "super_name": hero.super_name,
        }
        heroes.append(hero_dict)

    response = make_response(jsonify(heroes), 200)
    response.headers['Content-Type'] = 'application/json'
    return response

@app.route('/heroes/<int:id>', methods=['GET'])
def hero_by_id(id):
    hero = Hero.query.filter_by(id=id).first()

    if not hero:
        return jsonify({'error': "Hero not found", }, 404)

    hero_dict = {
        "id": hero.id,
        "name": hero.name,
        "super_name": hero.super_name,
        "powers": [
            {'id': power.id,
             'name': power.name,
             'description': power.description
             }
            for power in hero.powers
        ]
    }
    response = make_response(jsonify(hero_dict), 200)
    response.headers['Content-Type'] = 'application/json'
    return response

@app.route('/powers', methods=['GET'])
def powers():
    powers = []

    for power in Power.query.all():  # Assuming you have a Power model
        power_dict = {
            'id': power.id,
            'name': power.name,
            'description': power.description
        }
        powers.append(power_dict)

    response = make_response(jsonify(powers), 200)
    response.headers['Content-Type'] = 'application/json'
    return response

@app.route('/powers/<int:id>', methods=['GET'])
def get_power_by_id(id):
    power = Power.query.filter_by(id=id).first()
    if not power:
        return jsonify({'error': 'Power not found'}, 404)

    power_dict = {
        'id': power.id,
        'name': power.name,
        'description': power.description,
    }
    response = make_response(jsonify(power_dict), 200)
    response.headers['Content-Type'] = 'application/json'
    return response

@app.route('/heroes', methods=["POST"])
def create_hero():
    data = request.get_json()

    # Validate the required fields
    if "name" not in data:
        return jsonify({"errors": ["Name field is required"]}), 400

    new_hero = Hero(name=data["name"])  # Create a new Hero instance
    db.session.add(new_hero)
    db.session.commit()

    response = make_response(jsonify({"message": "Hero created successfully"}), 201)
    return response

@app.route('/')
def home():
    return "Welcome to the Hero API"

if __name__ == '__main__':
    app.run(port=5555)
