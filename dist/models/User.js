import { Schema, model } from 'mongoose';
// Schema to create User model
const userSchema = new Schema({
    username: String,
    email: String,
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Friends',
        },
    ],
}, {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
        virtuals: true,
    },
    id: false,
});
userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
    return this.friends.length;
});
// Initialize our User model
const User = model('user', userSchema);
export default User;
