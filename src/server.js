const app = require('./index')
const port = process.env.PORT || 2345

app.listen(port, () => {
    try {
        console.log(`Running on Port ${port}`)
    } catch (error) {
        console.log(error.message)
    }
})