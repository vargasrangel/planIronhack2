const router = require("express").Router();
const Event = require("../models/Event.model")

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

//Ruta para visualización del evento    
    router.get("/home/nuevoEvento/:id", (req, res,) => {
      Event.findById(req.params.id).then(evento => {
        console.log(evento)
        res.render("home/nuevoEvento", evento)
      }).catch(console.log)

    })    

//Ruta para MIS EVENTOS    
    router.get("/home/misEventos", (req, res,) => {
      Event.find().then(todosLosEventos => {
        console.log(todosLosEventos)
        res.render("home/misEventos", { todosLosEventos })
      }).catch(console.log)
   
    })


//Ruta para guarda el EVENTO/PLAN
router.post("/registrarPlan/:tipo", (req, res) => {
  Event.create(req.body)
  .then(nuevoEvento => {
    console.log(nuevoEvento)
    res.redirect(`/home/nuevoEvento/${nuevoEvento._id}`) //<!--aqui va la ruta del nuevo evento-->
  })
  .catch(console.log)
})


module.exports = router;
    