'use strict'

const path = require('path')
const sqlite3 = require('sqlite3').verbose();
const dbPath = path.resolve(__dirname, '../../data/commentaries/cambridge.cmti')
const dbcamb = new sqlite3.Database(dbPath);


let currentCommentary;

const getBookCommentary = (commentary, book) => {
  return new Promise( (resolve, reject) => {
    const commentPath = path.resolve(__dirname, `../../data/commentaries/${commentary}.cmti`);    
    currentCommentary = new sqlite3.Database(commentPath);
    currentCommentary.all(`SELECT * FROM BookCommentary WHERE Book = ${book}`, (err, data) => {
      if (err) return reject(err);
      console.log('data', data);
      resolve(data);
    })
  })
} 

module.exports = { getBookCommentary };