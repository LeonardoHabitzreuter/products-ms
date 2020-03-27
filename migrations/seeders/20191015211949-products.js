module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.bulkInsert('products', [{
      name: 'Som T-shirt',
      stock: 15
    }, {
      name: 'Some pants',
      stock: 20
    }], {})
  ),

  down: queryInterface => queryInterface.bulkDelete('products', null, {})
}
