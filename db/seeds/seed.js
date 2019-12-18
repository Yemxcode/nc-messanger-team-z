const { userData, chatroomData, messageData } = require("../data/index");
const {makeRefObj, formatMessages} = require("../utils/utils")

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
      console.log(users)
     const chatRef = makeRefObj(chatrooms)
     const formattedMessages = formatMessages(messageData, chatRef)
     console.log(formattedMessages) 
       return knex("messages")
        .insert(formattedMessages)
        .returning("*");
    })

};
