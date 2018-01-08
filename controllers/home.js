module.exports = (app) => {
    var HomeController = {
        index: (req, res) => {
            var tituloPagina = 'Home';
            res.render('home/index', {
                tituloPagina: tituloPagina
            });
        },
        sobre: (req, res) => {
            res.render('sobre');
        }
    };

    return HomeController;
};