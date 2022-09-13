from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/json")
def hello_world():
    return render_template('json_web.html')

@app.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()