const express = require('express');
const app = express();

const obats = [
    {id: 1, name: "Paracetamol", description: "Description for obat 1", dosage: "500mg"},
    {id: 2, name: "Aspirin", description: "Description for obat 2", dosage: "300mg"},
    {id: 3, name: "Ibuprofen", description: "Description for obat 3", dosage: "400mg"},
    {id: 4, name: "Loratadine", description: "Description for obat 4", dosage: "10mg"}
];

app.get('/obats', (req, res) => {
    res.json(obats);
});

app.get('/obats/:obat_id', (req, res) => {
    const obatId = parseInt(req.params.obat_id);
    const obat = obats.find(obat => obat.id === obatId);

    if (obat) {
        res.json(obat);
    } else {
        res.status(404).json({error: "Obat tidak ditemukan"});
    }
});

app.listen(3000, () => {
    console.log("Server berjalan");
});
