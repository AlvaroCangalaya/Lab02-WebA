const router = require('express').Router()


router.get('/producto',(req,res)=>{
    res.sendFile('./static/producto.html',{
        root: __dirname
    })
})

router.get('/servicios',(req,res)=>{
    res.sendFile('./static/servicios.html',{
        root: __dirname
    })
})

router.get('/',(req,res)=>{
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})
router.get('/equipo',(req,res)=>{
    res.sendFile('./static/equipo.html',{
        root: __dirname
    })
})
router.get('/marcas',(req,res)=>{
    res.sendFile('./static/marcas.html',{
        root: __dirname
    })
})
router.get('/nosotros',(req,res)=>{
    res.sendFile('./static/nosotros.html',{
        root: __dirname
    })
})


module.exports = router