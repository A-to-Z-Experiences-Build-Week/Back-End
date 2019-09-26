const data = require('../data/db-config')

module.exports = {
    add,
    findBy
}


async function add(user) {
    const [id] = await data('users').insert(user, 'id')
}

function findBy(item) {
    return data('users').where(item)
}