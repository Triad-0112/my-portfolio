from flask import Flask, render_template

app = Flask(__name__, template_folder='../web/templates', static_url_path='/static', static_folder='../web/static')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/experience')
def experience():
    return render_template('experience.html')