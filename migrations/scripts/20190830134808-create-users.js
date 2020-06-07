module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.fn('uuid_generate_v4')
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(64),
      allowNull: false
    },
    avatar: {
      type: Sequelize.STRING(191),
      allowNull: true
    },
    locale: {
      type: Sequelize.STRING,
      allowNull: true
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'CUSTOMER'
    },
    emailVerified: {
      type: Sequelize.DATE,
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW')
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW')
    },
    deletedAt: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }),

  down: queryInterface => queryInterface.dropTable('users')
}
