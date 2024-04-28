const express = require('express')
const app = express()

const penyakits = [
    {id:1, name:"flu", description: "description for penyakit 1", tingkat: "ringan"},
    {id:2, name:"radang", description: "description for penyakit 1", tingkat: "sedang"},
    {id:3, name:"kangker", description: "description for penyakit 1", tingkat: "berat"},
    {id:4, name:"sekarat", description: "description for penyakit 1", tingkat: "kronis"}
]

app.get('/penyakits', (req,res) => {
    res.json(penyakits)
})

app.get('/penyakits/:penyakit_id', (req,res) =>{
    const penyakitId = parseInt(req.params.penyakit_id)
    const penyakit = penyakits.find(penyakit => penyakit.id === penyakitId)

    if(penyakit) {
        res.json(penyakit)

     }else {
        res.status(404).json({error:"Penyakit tidak ditemukan"})
     }
})

app.listen(5000,() => {
    console.log ("server berjalan")
})




