exports.up = function(knex) {
  return knex.schema.createTable("chatroom", chatroomTable => {
    chatroomTable.increments("chatroom_id").primary();
    chatroomTable.string("chatroomname").unique().notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("chatroom");
};
