const { stringify } = require('nodemon/lib/utils');

const router = require('express').Router();
let user = [{
    name: "Andres",
    lang: "ES"
},
{
    name: "Andres",
    lang: "EN"
},
{
    name: "Andres",
    lang: "FR"
}];

router.route('/').get((req, res) => {
    msg = `Hola ${user[0].name|| 'World'} from get request`
    res.json({msg});
})

router.route('/:id').get((req,res) => {
    let id = +req.params.id-1
    switch(user[id].lang){
        case "ES":
            msg = `Hola ${user[id].name|| 'World'}`;
            break;
        case "EN":
            msg = `Hellow ${user[id].name|| 'World'}`;
            break;
        case "FR":
            msg = `Bonjor Monde ${user[id].name|| 'World'}`;
            break;
        default:
            msg = `Hola ${user[id].name|| 'World'}`
    }
    res.json({msg})
})

router.route('/demo/register').post((req, res) => {

        response = {
            name: req.body.name,
            lang: req.body.lang
        }


res.end(JSON.stringify(response))
})

module.exports = router