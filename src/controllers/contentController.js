const Content = require('../models/content');

class ContentController {
  async postContent(req, res) {
    try {
      const content = new Content(req.body);
      await content.save();
      res.status(201).json(content);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteContent(req, res) {
    try {
      const content = await Content.findById(req.params.id);
      if (!content) {
        return res.status(404).json({ error: 'Content not found' });
      }
      await content.remove();
      res.json({ message: 'Content deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ContentController();