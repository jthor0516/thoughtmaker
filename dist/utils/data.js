const users = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Grace',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];
const emails = [
    "mnemonic@outlook.com",
    "thrymm@gmail.com",
    "pmint@verizon.net",
    "kaiser@live.com",
    "tangsh@yahoo.com",
    "timtroyr@mac.com",
    "jdhildeb@live.com",
    "specprog@hotmail.com",
    "horrocks@sbcglobal.net",
    "gboss@outlook.com",
    "amichalo@me.com",
    "ideguy@live.com",
    "aschmitz@live.com",
    "uraeus@yahoo.ca",
    "bruck@comcast.net",
    "cmdrgravy@comcast.net",
    "bradl@aol.com",
    "satch@msn.com",
    "fatelk@live.com",
    "adillon@outlook.com",
    "ilial@me.com",
    "jeffcovey@sbcglobal.net",
    "cgcra@outlook.com",
    "fmtbebuck@live.com",
    "jamuir@gmail.com",
];
const thoughts = [
    'I like pizza',
    'I read a book',
    'I watched a movie',
    'I played a video game',
    'I lost all my money gambling',
    'Just finished watching all 15,000 episodes of "General Hospital" in a row',
    'Growing out my mustache',
    'Hello world',
    'Gonna take a walk',
    'Thinking of writing a screenplay about lovers that murder eachother, they live in Los Angeles',
    'Just got a text',
    'I love talking on the phone',
    'I need to buy the LeBron Henessey',
    'Love watching Lebron highlights ',
    "I'm pouring honey on the GOAT",
    'Gonna cook dinner',
    'Poker',
    'We will not forget the red sun over paradise',
];
const possibleReactions = [
    'i like it',
    'gg',
    'neat',
    ' 👍',
    'keep it up',
    'good job',
    'nice',
    'cool',
    'wow',
];
// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
// Gets a random full name
const getRandomUser = () => getRandomArrItem(users);
const getRandomEmail = () => getRandomArrItem(emails);
// Function to generate random thoughts that we can add to the database. Includes thought reactions.
const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
            username: getRandomUser(),
            reactions: getReactions(3)
        });
    }
    return results;
};
// Create the reactions that will be added to each thought
const getReactions = (int) => {
    if (int === 1) {
        return getRandomArrItem(possibleReactions);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(possibleReactions),
            username: getRandomUser(),
        });
    }
    return results;
};
// Export the functions for use in seed.js
export { getRandomUser, getRandomThoughts, getRandomEmail };
