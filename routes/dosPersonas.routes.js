const router = require("express").Router();


//Ruta de eleccion de CATEGORIA para 2 personas en -IN-
router.get("/dosPersonas/in-dosPersonas", (req, res,) => {
      res.render("dosPersonas/in-dosPersonas")
    })

  //------Ruta de CATEGORIAS en -IN-    -------

    //COMIDA  
    router.get("/dosPersonas/in/in-comida", (req,res) =>{
      res.render("dosPersonas/in/in-comida")
    })
      //PELICULAS  
      router.get("/dosPersonas/in/in-peliculas", (req,res) =>{
        res.render("dosPersonas/in/in-peliculas")
      })
        //JUEGOS  
        router.get("/dosPersonas/in/in-juegos", (req,res) =>{
          res.render("dosPersonas/in/in-juegos")
        })



//Ruta de eleccion de CATEGORIA para 2 personas en -OUT-
router.get("/dosPersonas/out-dosPersonas", (req, res,) => {
  res.render("dosPersonas/out-dosPersonas")
})   

  //------Ruta de CATEGORIAS en -OUT-    -------

    //CENA  
    router.get("/dosPersonas/out/out-cena", (req,res) =>{
      res.render("dosPersonas/out/out-cena")
    })
      //BAR  
      router.get("/dosPersonas/out/out-bar", (req,res) =>{
        res.render("dosPersonas/out/out-bar")
      })
        //CINE  
        router.get("/dosPersonas/out/out-cine", (req,res) =>{
          res.render("dosPersonas/out/out-cine")
        })



    module.exports = router;

