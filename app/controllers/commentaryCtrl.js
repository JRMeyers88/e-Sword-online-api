'use strict';

const { getBookCommentary, getVerseCommentary, getTSKCommentary } = require('../models/commentaries');

module.exports.getABookCommentary = ({params:{commentary, book}}, res, next) => {
  getBookCommentary(commentary, book)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
}

module.exports.getAVerseCommentary = ({params:{commentary, book, chapter, verse}}, res, next) => {
  getVerseCommentary(commentary, book, chapter, verse)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
}

module.exports.getTSKComment = ({params:{commentary, book, chapter, verse}}, res, next) => {
  getTSKCommentary(commentary, book, chapter, verse)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
}