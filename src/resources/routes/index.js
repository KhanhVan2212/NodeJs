const products = require('./products')
const users = require('./users')
const students = require('./students')
const auth = require('./auth')
const category = require('./category')
const { checkPermissionStudent, checkPermission} = require('../middlewares/checkPermission');



function routes(app) {
    app.use('/category', category)
    app.use('/auth',auth)
    app.use('/students', students)
    app.use('/users',users )
    app.use('/products',products)
}
module.exports = routes