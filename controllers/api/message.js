const router = require('express').Router();
const Message = require('../../models/Message');
const User = require('../../models/User');

// The `/api/messages` endpoint

//find all user Messages
router.get('/', async (req, res) => {
  try {
    const messageData = await Message.findAll({
      order: ['date']
    })
    res.status(200).json(messageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find user message by 'id' - can be changed to date? or user?
router.get('/:id', async (req, res) => {
  try {
    const messageData = await Message.findByPk(req.params.id, {
      include: [{ model: User }]
    });

    if (!messageData) {
      res.status(404).json({ message: 'No message found with this id!' });
      return;
    }

    res.status(200).json(messageData);
  } catch (err) {
    res.status(500).json(err);
  }

});

  // create a new user message
router.post('/', async (req, res) => {
  try {
    const messageData = await Message.create(req.body);
    res.status(200).json(messageData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//edit user message by 'id'
router.put('/:id', async (req, res) => {
  try {
    const messageData = await Message.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!messageData[0]) {
      res.status(404).json({ message: 'No message with this id!' });
      return;
    }
    res.status(200).json(messageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a user message by id - will need to connect delete button to message id
// need to make sure only user who made the comment or admin can delete
router.delete('/:id', async (req, res) => {
  try {
    const messageData = await Message.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!messageData) {
      res.status(404).json({ message: 'No message found with this id!' });
      return;
    }

    res.status(200).json(messageData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
