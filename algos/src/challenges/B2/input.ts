import { MessageWithImages } from "./answer";

export default {
  messages: [
    {
      content: "Hi Bob!",
      images: ["hello-emoji.png"],
      sentBy: "Alice",
      sentAt: "2020-11-19T11:05:00.000Z",
    },
    {
      content: "Hello Alice!",
      images: ["hello-emoji.png"],
      sentBy: "Bob",
      sentAt: "2020-11-19T11:01:00.000Z",
    },
    {
      content: "Do you want to meet today at 3pm?",
      images: ["clock-emoji.png"],
      sentBy: "Bob",
      sentAt: "2020-11-20T09:01:00.000Z",
    },
    {
      content: "You are still sleepping?",
      images: ["zzz-emoji.png"],
      sentBy: "Alice",
      sentAt: "2020-11-20T13:30:00.000Z",
    },
    {
      content: "How are you?",
      images: [],
      sentBy: "Bob",
      sentAt: "2020-11-19T11:12:00.000Z",
    },
    {
      content: "No sorry I was moving out",
      images: ["truck-emoji.png", "img1.jpg"],
      sentBy: "Bob",
      sentAt: "2020-11-20T09:01:00.000Z",
    },
    {
      content: "Pretty fine and you?",
      images: ["party-emoji.png", "hello-emoji.png"],
      sentBy: "Alice",
      sentAt: "2020-11-19T13:28:00.000Z",
    },
  ],
} as { messages: MessageWithImages[] };
