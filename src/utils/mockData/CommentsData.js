export const commentsData = [
  {
    id: "1",
    name: "John Doe",
    text: "test comment1",
    replies: [],
  },
  {
    id: "2",
    name: "John Daw",
    text: "test comment2",
    replies: [],
  },
  {
    id: "3",
    name: "Jane Doe",
    text: "test comment3",
    replies: [
      {
        id: "r31",
        name: "Jane Doe",
        text: "test comment3 reply1",
        replies: [
          {
            id: "subr31",
            name: "Jane Doe",
            text: "test comment3 reply1 sub reply",
            replies: [
              {
                id: "subr31-1",
                name: "Jane Doe",
                text: "test comment3 reply1 sub reply1-1",
                replies: [],
              },
            ],
          },
          {
            id: "subr32",
            name: "Jane Doe",
            text: "test comment3 reply1 sub reply1",
            replies: [],
          },
          {
            id: "subr33",
            name: "Jane Doe",
            text: "test comment3 reply1 sub reply2",
            replies: [],
          },
          {
            id: "subr34",
            name: "Jane Doe",
            text: "test comment3 reply1 sub reply3",
            replies: [],
          },
        ],
      },
      {
        id: "r32",
        name: "Jane Doe",
        text: "test comment3 reply2",
        replies: [],
      },
      {
        id: "r33",
        name: "Jane Doe",
        text: "test comment3 reply3",
        replies: [],
      },
    ],
  },
  {
    id: "4",
    name: "John New",
    text: "test comment4",
    replies: [],
  },
  {
    id: "5",
    name: "John Mew",
    text: "test comment5",
    replies: [
      {
        id: "r51",
        name: "John Mew",
        text: "test comment5 reply1",
        replies: [],
      },
      {
        id: "r52",
        name: "John Mew",
        text: "test comment5 reply 2",
        replies: [],
      },
    ],
  },
];
