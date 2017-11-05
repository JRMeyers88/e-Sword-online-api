'use strict';

const { getBookCommentary } = require('../models/commentaries');

module.exports.getABookCommentary = ({params:{commentary, book}}, res, next) => {
  getBookCommentary(commentary, book)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
}