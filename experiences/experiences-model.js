const data = require('../data/db-config')

module.exports = {
    add,
    findBy,
    find,
    del,
    findByUser,
    update,
}


async function add(exp) {
    const [id] = await data('experiences').insert(exp, 'id')
}

function findBy(exp) {
    return data('experiences').where('id', exp)
}

function findByUser(user) {
    return data('experiences').where('origin_user', user)
}

function find() {
    return data('experiences')
}

function del(exp) {
    return data('experiences')
        .where('id', exp)
        .del()
}

function update(newInfo, id) {
    return data('experiences')
        .where('id', id)
        .update({
            "rating": newInfo.rating,
            "name": newInfo.name,
            "location": newInfo.location,
            "pricing": newInfo.pricing,
            "description": newInfo.description,
            "img_url": newInfo.img_url, 
        }, 'id')
}