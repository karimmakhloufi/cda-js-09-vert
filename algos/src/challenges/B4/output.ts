import { DayMessages } from "./answer";

export default [
  {
    day: "2020-11-19T00:00:00.000Z",
    messages: [
      {
        content: "Hello Alice!",
        sentBy: "Bob",
        sentAt: "2020-11-19T11:01:00.000Z",
      },
      {
        content: "Hi Bob!",
        sentBy: "Alice",
        sentAt: "2020-11-19T11:05:00.000Z",
      },
      {
        content: "How are you?",
        sentBy: "Bob",
        sentAt: "2020-11-19T11:12:00.000Z",
      },
      {
        content: "Pretty fine and you?",
        sentBy: "Alice",
        sentAt: "2020-11-19T13:28:00.000Z",
      },
    ],
  },
  {
    day: "2020-11-20T00:00:00.000Z",
    messages: [
      {
        content: "Do you want to meet today at 3pm?",
        sentBy: "Bob",
        sentAt: "2020-11-20T09:01:00.000Z",
      },
      {
        content: "No sorry I was moving out",
        sentBy: "Bob",
        sentAt: "2020-11-20T09:01:00.000Z",
      },
      {
        content: "You are still sleepping?",
        sentBy: "Alice",
        sentAt: "2020-11-20T13:30:00.000Z",
      },
    ],
  },
  {
    day: "2020-12-01T00:00:00.000Z",
    messages: [
      {
        content: "Hi Bob it's me again!",
        sentBy: "Alice",
        sentAt: "2020-12-01T10:22:01.234Z",
      },
    ],
  },
] as DayMessages[];
