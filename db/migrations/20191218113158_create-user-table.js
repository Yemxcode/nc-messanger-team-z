exports.up = function(knex) {
  return knex.schema.createTable("users", usersTable => {
    usersTable
      .string("username")
      .primary()
      .unique()
      .notNullable();
    usersTable
      .string("avatar_url")
      .default(
        "https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg"
      );  
    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users")
};
