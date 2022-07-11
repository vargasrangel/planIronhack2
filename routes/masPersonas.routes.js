const router = require("express").Router();


//Ruta de eleccion de CATEGORIA para 3 o más personas en -IN-
router.get("/masPersonas/in-masPersonas", (req, res,) => {
      res.render("masPersonas/in-masPersonas")
    })

  //------Ruta de CATEGORIAS en -IN-    -------

    //COMIDA  
    router.get("/masPersonas/in/in-comida", (req,res) =>{
      res.render("masPersonas/in/in-comida")
    })
      //PELICULAS  
      router.get("/masPersonas/in/in-peliculas", (req,res) =>{
        res.render("masPersonas/in/in-peliculas")
      })
        //JUEGOS  
        router.get("/masPersonas/in/in-juegos", (req,res) =>{
          res.render("masPersonas/in/in-juegos")
        })


//Ruta de eleccion de CATEGORIA para 3 o más personas en -OUT-
router.get("/masPersonas/out-masPersonas", (req, res,) => {
  res.render("masPersonas/out-masPersonas")
})    

    //CENA  
    router.get("/masPersonas/out/out-cena", (req,res) =>{
      res.render("masPersonas/out/out-cena")
    })
      //BAR  
      router.get("/masPersonas/out/out-bar", (req,res) =>{
        res.render("masPersonas/out/out-bar")
      })
        //CINE  
        router.get("/masPersonas/out/out-cine", (req,res) =>{
          res.render("masPersonas/out/out-cine")
        })

    module.exports = router;

