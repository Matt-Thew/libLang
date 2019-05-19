from flask import Flask

app = Flask(__name__)
@app.route('/<name>')
def index(name="Thew"):

    return "index file {}".format(name)

app.run(debug = True , port = 8000, host='0.0.0.0')