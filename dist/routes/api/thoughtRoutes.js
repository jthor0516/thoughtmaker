import { Router } from 'express';
const router = Router();
import { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, removeReaction } from '../../controllers/thoughtController.js';
// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);
// /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);
// /api/thoughts/:thoughtId/tags/:tagId
router.route('/:thoughtId/tags/:reactionId').delete(removeReaction);
export default router;