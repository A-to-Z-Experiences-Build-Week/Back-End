const data = require('../data/db-config')

module.exports = {
    add,
    findBy,
    find
}


async function add(exp) {
    const [id] = await data('experiences').insert(exp)
}

function findBy(exp) {
    return data('experiences').where('id', exp)
}

function find(exp) {
    return data('experiences')
}