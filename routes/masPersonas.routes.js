const router = require("express").Router();


//Ruta de eleccion de CATEGORIA para 3 o más personas en -IN-
router.get("/masPersonas/in-masPersonas", (req, res,) => {
      res.render("masPersonas/in-masPersonas")
    })

  //------Ruta de CATEGORIAS en -IN-    -------
    //. /masPersonas/in?tipo3=comida
    //COMIDA  
    router.get("/masPersonas/in", (req,res) =>{
     console.log(req.query)
     const {tipo3} = req.query

     let formPelicula = true
     let formComida = true
     let formJuegos = true

     let objetoConfig3 = {
      tipo3,
     }

     if(tipo3 === "comida"){
      objetoConfig3["formComida"] = true
     }else if(tipo3 === "peliculas"){
      objetoConfig3["formPelicula"] = true
     }else if(tipo3 === "juegos"){
      objetoConfig3["formJuegos"] = true
     }
     
      res.render("masPersonas/in/in-comida", objetoConfig3)
        })


//Ruta de eleccion de CATEGORIA para 3 o más personas en -OUT-
router.get("/masPersonas/out-masPersonas", (req, res,) => {
  res.render("masPersonas/out-masPersonas")
})    

    router.get("/masPersonas/out", (req,res) =>{
      const {tipo4} = req.query

      let formCena = true
      let formBar = true
      let formCine = true

      let objectoConfig4 = {
        tipo4,
      }

      if(tipo4 === "cena"){
        objectoConfig4["formCena"] = true
      }else if(tipo4 === "bar"){
        objectoConfig4["formBar"] = true
      }else if(tipo4 === "cine"){
        objectoConfig4["formCine"] = true
      }
      
      
      res.render("masPersonas/out/out-cena", objectoConfig4)
    })

    module.exports = router;

