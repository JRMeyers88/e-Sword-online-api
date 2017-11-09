'use strict';

const { Router } = require('express');
const router = Router();
const { getABook, getAVerse, getChapters } = require('../app/controllers/bibleCtrl');

router.get('/bible/:version/:book/:chapter', getABook);
router.get('/bible/:version/:book/:chapter/:verse', getAVerse);
router.get('/bible/:version/:book', getChapters);

module.exports = router;