const data = require('../data/db-config')

module.exports = {
    add
}


async function add(exp) {
    const [id] = await data('experiences').insert(exp)
}
