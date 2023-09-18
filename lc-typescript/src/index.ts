const messsageText: string = "Hello Bob!"; // you should type on this line
const messageCreatedAt: Date = new Date(); // this one too

function stringifyMessage(text: string, createdAt: Date) {
  // this one too
  return `${text}, the ${createdAt.toLocaleDateString()}`;
}

type Message = { from: string; message: string; isRead?: boolean };
const message1: Message = {
  from: "Bob",
  message: "Hello Alice!",
  isRead: true,
};
const message2: Message = { from: "Alice", message: "Hi Bob!" };

const messages = [message1, message2]; // type this line
function readMessages(messages) {
  // this one too
  // put some logic to set isRead to true on all messages
  return 0;
}
readMessages(messages);
