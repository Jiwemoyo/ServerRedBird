// const express = require('express')
import express from 'express'
// const path = require('path')
import path from 'path'

export const starterServer =(options)=>{
    const {port,public_path='public'}=options
    const app = express()

    //Para poder usar midlewares se  usa la palabra reservada de expres use 
    app.use(express.static(public_path)) // contenido estatico disponible

    app.get('*',(req,res)=>{
        const indexPath =path.join(__dirname+`../../${public_path}/index.html`)
        res.send(indexPath)
    })

    app.listen(port,()=>{
        console.log(`escuchando en el puerto ${port}`)
    })
}

// module.exports ={
//     starterServer
// }