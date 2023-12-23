const Card = require('../models/card');
exports.newCard = async (req, res) => {
  try {
    const card = new Card({
      content: req.body.content,
      createDate: Date.now(),
      owner: req.user.username,
      type: req.body.type
    });
    if(!card.content) {
      return res.status(400).json({ message: 'Content is required' });
    }
    if(card.type!=="normal" && card.type!=="lostandfond" && card.type!=="friendmaking") {
      return res.status(400).json({ message: 'Type is invalid' });
    }
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const card = await Card.findOne({ where: { id: req.params.id } });
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    if (card.owner.toString() !== req.user.username) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    //debug 
    console.log(card.owner);
    await card.destroy();
    res.status(200).json({ message: 'Card deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
