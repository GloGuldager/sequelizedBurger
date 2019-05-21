'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert('burgers', [{

      burger_name: 'bacon',
      devoured: false
    },
    {
      burger_name: 'cheese',
      devoured: false
      }], { });
  },

down: (queryInterface, Sequelize) => {
  
    // Add reverting commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkDelete('burgers', null, {});
  
}
};
