exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 123456789, make: "honda", model: "civic", mileage:"80000"},
        {VIN: 123456432, make: "mercedes", model: "benz", mileage:"0"}
      ]);
    });
};
