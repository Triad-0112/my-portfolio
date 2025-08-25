# File: main.py
import os
from flask import Flask, render_template

project_root = os.path.dirname(__file__)
# Inisialisasi aplikasi Flask
# Path sekarang relatif dari root proyek
template_folder = os.path.join(project_root, 'web', 'templates')
static_folder = os.path.join(project_root, 'web', 'static')

app = Flask(__name__, template_folder=template_folder, static_folder=static_folder)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/experience')
def experience():
    return render_template('experience.html')