module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render("client/pages/home/index")
    })
    
    app.get('/products', (req, res) => {
        res.render("client/pages/products/index")
    })
}