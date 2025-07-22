const express = require('express');
const Note = require('../models/Note');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

// Create a new note
router.post('/', verifyToken, async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ userId: req.userId, title, content });
  await note.save();
  res.status(201).json(note);
});

// Get all notes for logged-in user
router.get('/', verifyToken, async (req, res) => {
  const notes = await Note.find({ userId: req.userId });
  res.json(notes);
});

// Edit a note
router.put('/:id', verifyToken, async (req, res) => {
  const updated = await Note.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  res.json(updated);
});

// Delete a note
router.delete('/:id', verifyToken, async (req, res) => {
  await Note.deleteOne({ _id: req.params.id, userId: req.userId });
  res.json({ message: 'Note deleted' });
});

module.exports = router;