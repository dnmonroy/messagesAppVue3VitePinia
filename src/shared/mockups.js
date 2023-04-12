export const useUserMockup = [
  {
    id: 1,
    contactName: "Alvaro",
    avatarImg: "path",
    phoneNumber: 53068799,
    writing: false,
    messages: [
      {
        isOwner: true,
        messages: [
          {
            text: "Sit amet risus nullam eget felis eget. Dolor sed viverra ipsum😂😂😂?",
            dateSend: "20m",
          },
          {
            text: "How are you?",
            img: "https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif",
            dateSend: "20m",
          },
          { text: "How are you?", dateSend: "20m" },
          { text: "How are you?", dateSend: "20m" },
        ],
      },
      {
        isOwner: false,
        messages: [
          { text: "Fine", dateSend: "20m" },
          { text: "Fine", dateSend: "20m" },
          { text: "Fine", dateSend: "20m" },
          { text: "Fine", dateSend: "20m" },
        ],
      },
      {
        isOwner: true,
        messages: [
          { text: "How are you?", dateSend: "20m" },
          { text: "How are you?", dateSend: "20m" },
          { text: "How are you?", dateSend: "20m" },
        ],
      },
    ],
    online: true,
  },
  {
    id: 2,
    contactName: "Damian",
    avatarImg: "path",
    phoneNumber: 53068799,
    writing: false,
    messages: [],
    online: true,
  },
  {
    id: 3,
    contactName: "Geydi",
    avatarImg: "path",
    phoneNumber: 53068799,
    writing: false,
    messages: [
      {
        isOwner: false,
        messages: [
          {
            text: "Sit amet risus nullam eget felis eget. Dolor sed viverra ipsum😂😂😂?",
            dateSend: "20m",
          },
        ],
      },
    ],
    online: false,
  },
  {
    id: 4,
    groupName: "Coders",
    isGroup: true,
    avatarImg: "path",
    members: 513,
    writing: false,
    messages: [
      {
        isOwner: true,
        messages: [
          {
            text: "ok",
            dateSend: "20m",
          },
        ],
      },
    ],
    online: true,
  },
  {
    id: 5,
    contactName: "Alejandro",
    avatarImg: "path",
    phoneNumber: 53068799,
    writing: false,
    messages: [
      {
        isOwner: false,
        messages: [
          {
            text: "Sit amet risus nullam eget felis eget. Dolor sed viverra ipsum😂😂😂?",
            dateSend: "20m",
          },
        ],
      },
    ],
    online: false,
  },
];
