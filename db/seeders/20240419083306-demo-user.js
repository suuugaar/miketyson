/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Fights', [
      {
        opponent: 'Фрэнк Бруно',
        result: 'Победа Тайсона TKO5',
        date: '25 февраля 1989',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        opponent: 'Тони Такер',
        result: 'Победа Тайсона UD12',
        date: '1 августа 1987',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        opponent: 'Тревор Бербик',
        result: 'Победа Тайсона TKO2',
        date: '22 ноября 1986',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        opponent: 'Эвандер Холлифилд',
        result: 'Поражение Тайсона DQ3',
        date: '28 июня 1997',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        opponent: 'Донован Раддок',
        result: 'Победа Тайсона TKO7',
        date: '18 марта 1981',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fights', null, {});
  },
};
