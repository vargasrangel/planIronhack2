const router = require("express").Router();

//Ruta de eleccion de cantidad de personas
router.get("/home/home-page", (req, res,) => {
      res.render("home/home-page")
    })
    
//Ruta de eleccion de in/out para 2 personas
router.get("/home/home-dosPersonas", (req, res,) => {
      res.render("home/home-dosPersonas")
    })

//Ruta de eleccion de in/out para 3 o más personas
router.get("/home/home-masPersonas", (req, res,) => {
      res.render("home/home-masPersonas")
    })

module.exports = router;
    