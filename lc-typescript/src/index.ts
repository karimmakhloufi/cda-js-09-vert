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
  isRead: false,
};
const message2: Message = { from: "Alice", message: "Hi Bob!" };

const messages: Message[] = [message1, message2]; // type this line

function readMessages(messages: Message[]) {
  // this one too
  // put some logic to set isRead to true on all messages
  messages.forEach((el) => {
    el.isRead = true;
  });

  return messages.length;
}
console.log(readMessages(messages));
type Notif = { at: number; state: string };

const notification1: Notif = { at: 1694011133, state: "unread" };
const notification2: Notif = { at: 1694011532, state: "read" };

type NotifOrMessage = Notif | Message;

function readNotificationOrMessage(
  notificationOrMessage: NotifOrMessage
): void {
  if ("isRead" in notificationOrMessage) {
    notificationOrMessage.isRead = true;
  } else if ("state" in notificationOrMessage) {
    notificationOrMessage.state = "read";
  }
}
