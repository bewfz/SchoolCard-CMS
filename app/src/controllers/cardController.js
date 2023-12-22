const Card = require('../models/card');

exports.newCard = async (req, res) => {
  try {
    const card = new Card({
      content: req.body.content,
      createDate: Date.now(),
      owner: req.user.id,
      type: req.body.type
    });
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    if (card.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    await card.remove();
    res.status(200).json({ message: 'Card deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};