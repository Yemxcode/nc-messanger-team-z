const { userData, chatroomData, messageData } = require("../data/index");
const {makeRefObj} = require("../utils/utils")

exports.seed = function(knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      const userInsertions = knex("users")
        .insert(userData)
        .returning("*");
      const chatroomInsertions = knex("chatroom")
        .insert(chatroomData)
        .returning("*");
      return Promise.all([
        userInsertions,
        chatroomInsertions,
      ]);
    })
    .then(([users, chatrooms]) => {
      
       return knex("messages")
        .insert(messageData)
        .returning("*");
    })

};
