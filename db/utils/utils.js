exports.makeRefObj = list => {
  let obj = {};
  for (let i = 0; i < list.length; i++) {
    let newKey = list[i].chatroomname;
    obj[newKey] = list[i].chatroom_id;
  }
  return obj;
};

exports.formatMessages = (messages, articleRef) => {
  return messages.map(message => {
    return {
      body: message.body,
      chatroom_id: articleRef[message.chatroomname],
      created_by: message.created_by,
      created_at: new Date(message.created_at).toUTCString()
    };
  });
};