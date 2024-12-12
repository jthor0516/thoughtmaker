import connection from '../config/connection.js';
import { User, Thought } from '../models/index.js';
import { getRandomUser, getRandomThoughts, getRandomEmail } from './data.js';
connection.on('error', (err) => err);
connection.once('open', async () => {
    console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db?.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck?.length) {
        await connection.dropCollection('thoughts');
    }
    let userCheck = await connection.db?.listCollections({ name: 'users' }).toArray();
    if (userCheck?.length) {
        await connection.dropCollection('users');
    }
    const users = [];
    const thoughts = [];
    for (let i = 0; i < 10; i++) {
        const anyUsername = getRandomUser();
        const anyEmail = getRandomEmail();
        const userThoughts = getRandomThoughts(Math.floor(Math.random() * 4)); // Generate random thoughts for each user
        // Insert thoughts and collect their ObjectIds
        const insertedThoughts = await Thought.insertMany(userThoughts);
        const thoughtIds = insertedThoughts.map(thought => thought._id);
        users.push({
            username: anyUsername,
            email: anyEmail,
            thoughts: thoughtIds
        });
        thoughts.push(...insertedThoughts);
    }
    await User.insertMany(users);
    const insertedUsers = await User.insertMany(users);
    for (let user of insertedUsers) {
        const otherUserIds = insertedUsers
            .filter((u) => u._id.toString() !== user._id.toString()) // Exclude the current user
            .map((u) => u._id);
        // Select a random number of friends
        const randomFriends = otherUserIds.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * otherUserIds.length));
        user.friends = randomFriends;
        await user.save();
    }
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});
