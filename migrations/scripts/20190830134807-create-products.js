module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.createTable('products', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.fn('uuid_generate_v4')
      },
      name: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      stock: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    })
  ),

  down: queryInterface => queryInterface.dropTable('products')
}
