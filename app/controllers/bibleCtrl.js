'use strict';

const { getBook, getVerse, getChapter } = require('../models/bibles');

module.exports.getABook = ({params:{version, book, chapter}}, res, next) => {
  getBook(version, book, chapter)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
}

module.exports.getAVerse = ({params:{version, book, chapter, verse}}, res, next) => {
  getVerse(version, book, chapter, verse)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
}

module.exports.getChapters = ({params:{version, book}}, res, next) => {
  getChapter(version, book)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
}