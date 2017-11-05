'use strict';

const { Router } = require('express');
const router = Router();
const { getABookCommentary, getAVerseCommentary } = require('../app/controllers/commentaryCtrl');

router.get('/comments/:commentary/:book', getABookCommentary);
router.get('/comments/:commentary/:book/:chapter/:verse', getAVerseCommentary);

module.exports = router;