exports.up = function(knex) {
  return knex.schema.createTable("messages", messageTable => {
    messageTable
      .increments("messsage_id")
      .primary()
      .unique();
    messageTable.text("body").notNullable();
    messageTable.integer("chatroom_id").references("chatroom.chatroom_id");
    messageTable
      .text("created_by")
      .references("username")
      .inTable("users")
      .notNullable();
    messageTable.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("messages");
};
