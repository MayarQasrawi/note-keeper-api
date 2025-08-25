const express = require('express');
const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
  searchNotes
} = require('../controllers/noteController');

const router = express.Router();

router.get('/search', searchNotes);
router.get('/', getNotes);
router.get('/:id', getNote);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;