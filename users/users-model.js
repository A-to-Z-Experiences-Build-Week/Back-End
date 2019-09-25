const data = require('../data/db-config')

module.exports = {
    add,
    // findAll
}


async function add(user) {
    const [id] = await data('users').insert(user)
}