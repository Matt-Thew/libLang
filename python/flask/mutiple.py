from flask import Flask

app = Flask(__name__)

@app.route("/multiply")
@app.route("/multiply/<int:num1>/<int:num2>")
@app.route("/multiply/<float:num1>/<float:num2>")
@app.route("/multiply/<int:num1>/<float:num2>")
@app.route("/multiply/<float:num1>/<int:num2>")
def multiply(num1=5, num2=5):
  #Not updated until later in the challenge.
  return str(5 * 5)