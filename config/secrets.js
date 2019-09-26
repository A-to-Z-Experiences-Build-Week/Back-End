module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'supercalifragilisticexpialidocious',
    environment: process.env.NODE_ENV || 'development'

}