exports.makeRefObj = list => {
  let obj = {};
  for (let i = 0; i < list.length; i++) {
    let newKey = list[i].title;
    obj[newKey] = list[i].article_id;
  }
  return obj;
};

exports.formatMessages = (messages, articleRef) => {
  return messages.map(message => {
    return {
      body: message.body,
      chatroom_id: articleRef[comment.belongs_to],
      created_by: comment.created_by,
      votes: comment.votes,
      created_at: new Date(comment.created_at).toUTCString()
    };
  });
};