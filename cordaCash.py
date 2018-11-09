"""

Corda Cash



"""
from flask import Flask, request, render_template, jsonify
import socket,json


app = Flask(__name__)

host = socket.gethostname()


@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")

@app.route('/json', methods=['POST','GET'])
def my_form_post():
    print("Received input")
    print(request.data)
    return jsonify({"response":"OK"})

@app.route('/transfer', methods=['POST','GET'])
def transfer():
    print("Received input")
    print(request.data)
    obj = json.loads(request.data)
    return jsonify({"response":obj})
    

@app.route('/issuance', methods=['POST','GET'])
def issuance():
    print("Received input")
    print(request.data)
    obj = json.loads(request.data)
    return jsonify({"response":obj})


if __name__ == '__main__':
    app.run(debug=True,port=5010)
    #app.run(host='0.0.0.0',debug=True,port=80)