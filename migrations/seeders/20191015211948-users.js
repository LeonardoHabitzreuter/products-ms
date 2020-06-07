const users = [
  {
    name: 'Jhon Carter',
    email: 'jhon.carter@gmail.com',
    // 123
    password: '21adce871ea3c06d87f99e04ff6c006cb2ca4e7f5607544453370167613b70e0'
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', users, {}),

  down: queryInterface => queryInterface.bulkDelete('users', null, {})
}
