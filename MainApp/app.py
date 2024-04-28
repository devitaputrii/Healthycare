from flask import Flask, jsonify
import requests

app = Flask(__name__)

# Informasi obat
def get_penyakit(obat_id):
    response = requests.get(f'http://localhost:3000/penyakits/{obat_id}')
    return response.json()

# Informasi get quantity dari keranjang
def get_sold_quantity(keranjang_id):
    response = requests.get(f'http://localhost:5001/keranjang/quantity/{keranjang_id}')
    return response.json()['total_quantity']

@app.route('/penyakit/<nt:penyakit_id>')
def get_obat_info(obat_id):
    # get layanan obat
    obat_info = get_obat_info(obat_id)

    # get layanan keranjang
    sold_obat = get_sold_quantity(obat_id)

    return obat_info

if __name__ == "__main__":
    app.run(debug=True, port=5004)