exports.up = function(knex) {
  return knex.schema.createTable("messages", messageTable => {
    messageTable.increments("messsage_id").primary();
    messageTable.text("body").notNullable();
    messageTable
      .string("created_by")
      .references("users.username")
      .notNullable();
    messageTable.timestamp("created_at").defaultTo(knex.fn.now());
    messageTable.string("chatroom_id").references("chatroom.chatroom_id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("messages");
};
