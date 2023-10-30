import { MessageWithUnread } from "./answer";

export default [
  {
    content: "Hello Alice!",
    sentBy: "Bob",
    sentAt: "2020-11-19T11:01:00.000Z",
    unread: false,
  },
  {
    content: "Hi Bob!",
    sentBy: "Alice",
    sentAt: "2020-11-19T11:05:00.000Z",
    unread: false,
  },
  {
    content: "How are you?",
    sentBy: "Bob",
    sentAt: "2020-11-19T11:12:00.000Z",
    unread: false,
  },
  {
    content: "Pretty fine and you?",
    sentBy: "Alice",
    sentAt: "2020-11-19T13:28:02.123Z",
    unread: true,
  },
  {
    content: "Do you want to meet today at 3pm?",
    sentBy: "Bob",
    sentAt: "2020-11-20T09:01:00.000Z",
    unread: true,
  },
  {
    content: "No sorry I was moving out",
    sentBy: "Bob",
    sentAt: "2020-11-20T09:01:00.000Z",
    unread: true,
  },
  {
    content: "You are still sleepping?",
    sentBy: "Alice",
    sentAt: "2020-11-20T13:30:00.000Z",
    unread: true,
  },
  {
    content: "Hi Bob it's me again!",
    sentBy: "Alice",
    sentAt: "2020-12-01T10:22:00.000Z",
    unread: true,
  },
] as MessageWithUnread[];
