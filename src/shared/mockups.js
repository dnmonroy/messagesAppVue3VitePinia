export const useUserMockup = [
  {
    id: 1,
    contactName: "Alvaro",
    avatarImg: "2.png",
    phoneNumber: 53068799,
    writing: false,
    messages: [
      {
        isOwner: true,
        messages: [
          {
            text: "Give me a hand with the css😂😂😂?",
            dateSend: "20m",
          },
          {
            text: "jejeje",
            img: "https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif",
            dateSend: "20m",
          },
          { text: "How are you?", dateSend: "20m" },
          { text: "test message\n", dateSend: "20m" },
        ],
      },
      {
        isOwner: false,
        ownerId : 1,
        messages: [
          { text: "Fine", dateSend: "20m" },
          { text: "ok no problem", dateSend: "20m" },
          { text: "I will help you in whatever it takes", dateSend: "20m" },
          { text: "No problem\n", dateSend: "20m" },
        ],
      },
      {
        isOwner: true,
        messages: [
          { text: "Thank you very much, my friend", dateSend: "20m" },
          { text: "thanks for the help you are giving me", dateSend: "20m" },
          { text: "I owe you one", dateSend: "20m" },
        ],
      },
    ],
    online: true,
  },
  {
    id: 2,
    contactName: "Damian",
    avatarImg: "3.png",
    phoneNumber: 53068799,
    writing: false,
    messages: [],
    online: true,
  },
  {
    id: 3,
    contactName: "Geydi",
    avatarImg: "1.png",
    phoneNumber: 53068799,
    writing: false,
    messages: [
      {
        isOwner: false,
        ownerId  : 3,
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
    avatarImg: "coderGroup.jpg",
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
    avatarImg: "8.png",
    phoneNumber: 53068799,
    writing: false,
    messages: [
      {
        isOwner: false,
        ownerId : 5,
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

export const mainUserMockup = {
  contactName: "Robert",
  avatarImg: "4.png",
  online: true,
}
