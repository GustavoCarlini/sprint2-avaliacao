module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('deu certo Get'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('deu certo Post')
    })
}