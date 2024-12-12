import { Schema, model } from 'mongoose';
import reactionSchema from './Reactions.js';
// Schema to create Post model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String
    },
    reactions: [reactionSchema],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
// Create a virtual property `getreactions` that gets the amount of reactions associated with an thought
thoughtSchema
    .virtual('getReactions')
    // Getter
    .get(function () {
    return this.reactions.length;
});
// Initialize our thought model
const Thought = model('thought', thoughtSchema);
export default Thought;
