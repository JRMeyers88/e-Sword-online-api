'use strict'

const path = require('path')
const sqlite3 = require('sqlite3').verbose();


let currentBible;

const getBook = (version, book, chapter) => {
  return new Promise( (resolve, reject) => {
    const versionPath = path.resolve(__dirname, `../../data/bibles/${version}.bbli`);
    const currentBible = new sqlite3.Database(versionPath);
    currentBible.all(`SELECT * FROM Bible WHERE Book = ${book} and Chapter = ${chapter} ORDER BY Verse`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    })
  })
} 

const getChapter = (version, book) => {
  return new Promise( (resolve, reject) => {
    const versionPath = path.resolve(__dirname, `../../data/bibles/${version}.bbli`);
    const currentBible = new sqlite3.Database(versionPath);
    currentBible.all(`SELECT DISTINCT Chapter FROM Bible WHERE Book = ${book}`, (err, data) => {
      if (err) return reject(err);
      console.log('chapters', data);
      resolve(data);
    })
  })
}

const getVerse = (version, book, chapter, verse) => {
  return new Promise( (resolve, reject) => {
    const versionPath = path.resolve(__dirname, `../../data/bibles/${version}.bbli`);
    const currentBible = new sqlite3.Database(versionPath);
    currentBible.all(`SELECT * FROM Bible WHERE Book = ${book} and Chapter = ${chapter} and Verse = ${verse}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    })
  })
} 

module.exports = { getBook, getVerse, getChapter };