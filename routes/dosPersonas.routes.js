const router = require("express").Router();


//Ruta de eleccion de CATEGORIA para 2 personas en -IN-
router.get("/dosPersonas/in-dosPersonas", (req, res,) => {
      res.render("dosPersonas/in-dosPersonas")
    })

  //------Ruta de CATEGORIAS en -IN-    -------
    //. /dosPersonas/in?tipo=comida
    //COMIDA  
    router.get("/dosPersonas/in", (req,res) =>{
      const {tipo} = req.query

      let formPelicula = true
      let formComida = true
      let formJuegos = true


      let objetoConfig = {
        tipo,
      }

      if(tipo === "comida"){
        objetoConfig["formComida"] = true
      }else if(tipo === "peliculas"){
        objetoConfig["formPelicula"] = true
      }else if(tipo === "juegos"){
        objetoConfig["formJuegos"] = true
      }


      res.render("dosPersonas/in/in-comida", objetoConfig)
    })


//Ruta de eleccion de CATEGORIA para 2 personas en -OUT-
router.get("/dosPersonas/out-dosPersonas", (req, res,) => {
  res.render("dosPersonas/out-dosPersonas")
})   

  //------Ruta de CATEGORIAS en -OUT-    -------
    router.get("/dosPersonas/out", (req,res) =>{
      const {tipo2} = req.query

      let formCena = true
      let formBar = true
      let formCine = true

      let objetoConfig2 = {
        tipo2,
      }

      if(tipo2 === "cena"){
        objetoConfig2["formCena"] = true
      }else if(tipo2 === "bar"){
        objetoConfig2["formBar"] = true
      }else if(tipo2 === "cine"){
        objetoConfig2["formCine"] = true
      }
      
      
      res.render("dosPersonas/out/out-cena", objetoConfig2)
    })

    module.exports = router;

