const data = require('../data/db-config')

module.exports = {
    add,
    findBy,
    find,
    del,
}


async function add(exp) {
    const [id] = await data('experiences').insert(exp)
}

function findBy(exp) {
    return data('experiences').where('id', exp)
}

function find() {
    return data('experiences')
}

function del(exp) {
    return data('experiences')
        .where('id', exp)
        .del()
}