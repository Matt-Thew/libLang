from flask import Flask
from flask import render_template

app = Flask(__name__)
@app.route('/')
def index(name="Thew"):
    context = {"name":"Matt"}
    return render_template("simple.html",**context)

app.run(debug = True , port = 8000, host='0.0.0.0')

