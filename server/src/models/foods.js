const { pgTable, serial, varchar, text, numeric } = require('drizzle-orm/pg-core');

const foods = pgTable('foods', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  description: text('description'),
  price: numeric('price'),
  imageUrl: varchar('imageurl', { length: 255 }),
});

module.exports = {
  foods,
};