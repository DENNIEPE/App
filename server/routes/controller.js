import hashpass from './bcrypt';

const routes = (app) => {
    app.route('/')
    .get((req, res, next) => {
        res.render('index.ejs');
    });

    app.route('/hashpass')
    .post((req, res, next) => {
        // console.log(req.body.pass);
        let hash = (hashpass.hash_password(req.body.pass))
        res.send(hash);
    })

    app.route('/compare')
    .post((req, res, next) => {
        let pass = req.body.pass
        let hashp = req.body.hashp
        let bool = hashpass.compare_password(pass, hashp)
        res.send(bool)
    })
}

export default routes