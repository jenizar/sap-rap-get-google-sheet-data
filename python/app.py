from markupsafe import Markup
import json
import urllib.request
from flask import Flask, jsonify, render_template
import os

app = Flask(__name__, template_folder="mytemplate")
cf_port = os.getenv("PORT")

@app.route("/", methods=['GET'])
def homepage():
    html = urllib.request.urlopen("https://script.google.com/macros/s/AKfycbyzJPEcoBLQMR2BI_azily1JwETLLsJH3_uPHj0uUbrhZE4z3CU-Z40WHc5znfIQ/exec")    
    data = json.load(html)
    html.close
    
    return render_template("page.html", data = Markup(json.dumps(data)))

#if __name__ == "__main__":
#    app.run()
if __name__ == '__main__':
   if cf_port is None:
       app.run(host='0.0.0.0', port=5000)
   else:
       app.run(host='0.0.0.0', port=int(cf_port))
