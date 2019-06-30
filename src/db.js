import { COLLECTIONSTATE } from './globalEnum'
const users = [
    {
        id: "1",
        name: "Mike",
        email: "bbb@gmail.com",
        password: '111',
        avatar: 'https://avatars3.githubusercontent.com/u/5426427?s=400&v=4',
        followers: ["2", "3"],
        following: [],
    },
    {
        id: "2",
        name: "Brian",
        email: "aaa@gmail.com",
        password: '333',
        avatar: '',
        followers: ["1"],
        following: ["3"],
    },
    {
        id: "3",
        name: "Bob",
        email: "ccc@gmail.com",
        password: '555',
        avatar: '',
        followers: ["1"],
        following: ["1", "2"],
    },
]

const collections = [
    {
        id: "100",
        authorID: "1",
        title: "good",
        description: "bad",
        tags: ['x', 'y'],
        likes: 10,
        state: COLLECTIONSTATE.PRIVATE,
        publishedTime: "12:00",
    },
    {
        id: "200",
        authorID: "2",
        title: "haha",
        description: "poop",
        tags: ['x', 'z'],
        likes: 20,
        state: COLLECTIONSTATE.PUBLISHED,
        publishedTime: "21:00",
    },
    {
        id: "300",
        authorID: "3",
        title: "boobies",
        description: "haha",
        tags: ['y', 'z'],
        likes: 5,
        state: COLLECTIONSTATE.PUBLISHED,
        publishedTime: "5:00",
    },
    {
        id: "400",
        authorID: "1",
        title: "shit",
        description: "fuck",
        tags: ['z'],
        likes: 4,
        state: COLLECTIONSTATE.PUBLISHED,
        publishedTime: "7:00",
    },
    {
        id: "700",
        authorID: "1",
        title: "shit!!!",
        description: "fuck!!!!!",
        tags: ['z'],
        likes: 4,
        state: COLLECTIONSTATE.FAVORITE,
        publishedTime: "7:00",
    },
    {
        id: "500",
        authorID: "3",
        title: "shvdsfit",
        description: "fucvdk",
        tags: ['z'],
        likes: 3214,
        state: COLLECTIONSTATE.PUBLISHED,
        publishedTime: "7:00",
    },
    {
        id: "600",
        authorID: "2",
        title: "shffit",
        description: "f321uck",
        tags: ['z'],
        likes: 3214,
        state: COLLECTIONSTATE.PUBLISHED,
        publishedTime: "7:00",
    },
]

const bookmarks = [
    {
        id: "a",
        collectionId:"100",
        url: "haha",
        title: "abc",
        description: "456",
        shortUrl: "poop.com",
        icon: "yucky.jpg"
    },
    {
        id: "b",
        collectionId: "100",
        url: "haha",
        title: "def",
        description: "789",
        shortUrl: "boobs.com",
        icon: "sexy.jpg"
    },
    {
        id: "c",
        collectionId: "200",
        url: "haha",
        title: "ghi",
        description: "very good",
        shortUrl: "haha.com",
        icon: "crazy.jpg"
    },
    {
        id: "d",
        collectionId: "200",
        url: "haha",
        title: "xyz",
        description: "very bad",
        shortUrl: "apple.com",
        icon: "banana.jpg"
    },
    {
        id: "e",
        collectionId: "300",
        url: "haha",
        title: "github",
        description: "cactus",
        shortUrl: "google.com",
        icon: "cup.jpg"
    },
    {
        id: "f",
        collectionId: "300",
        url: "haha",
        title: "lamp",
        description: "mouse",
        shortUrl: "mentos.com",
        icon: "phone.jpg"
    },
    {
        id: "g",
        collectionId: "400",
        url: "haha",
        title: "book",
        description: "clock",
        shortUrl: "pencil.com",
        icon: "money.jpg"
    },
    {
        id: "h",
        collectionId: "400",
        url: "haha",
        title: "eraser",
        description: "table",
        shortUrl: "computer.com",
        icon: "screen.jpg"
    },
]

const comments = [
    {
        collectionId: "100",
        authorId: "2",
        content: "piece of shit",
        time: "12:00",
    },
    {
        collectionId: "200",
        authorId: "1",
        content: "piece of good shit",
        time: "1:00",
    },
    {
        collectionId: "300",
        authorId: "1",
        content: "fucking bitch",
        time: "7:00",
    },
    {
        collectionId: "400",
        authorId: "1",
        content: "haha",
        time: "5:00",
    }
]

const db = {users, collections, bookmarks, comments};

export default db;