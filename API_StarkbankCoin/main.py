import pandas as pd
from flask import Flask, jsonify

app= Flask(__name__)

@app.route('/')
def homepage():
  return "On-line"
  
@app.route('/APIStarkcoin')
def APIStarkcoin():
  tabela = pd.read_csv('output.csv')
  df = tabela.to_json()
  return jsonify(df)
  
app.run(host='0.0.0.0')
