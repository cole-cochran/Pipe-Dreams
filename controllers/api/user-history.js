const router = require('express').Router();
const UserHistory = require('../../models/User_history');
const User = require('../../models/User')

// The `/api/categories` endpoint

//find all UserHistory
router.get('/', async (req, res) => {
  try {
    const favoriteData = await UserHistory.findAll()
    res.status(200).json(favoriteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find favorite by 'id' - can be changed to location? or name?
router.get('/:id', async (req, res) => {
  try {
    const favoriteData = await User.findByPk(req.params.id, {
      include: [{ model: UserHistory }]
    });

    if (!favoriteData) {
      res.status(404).json({ message: 'No favorite found!' });
      return;
    }

    res.status(200).json(favoriteData);
  } catch (err) {
    res.status(500).json(err);
  }

});

// save a new favorite
router.post('/', async (req, res) => {
  try {
    const favoriteData = await UserHistory.create({
      user_id: req.body.user_id,
      latitude: req.body.latitude,
      longitude: req.body.longitude});
    res.status(200).json(favoriteData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//edit favorite by 'id'
router.put('/:id', async (req, res) => {
  try {
    const favoriteData = await UserHistory.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!favoriteData[0]) {
      res.status(404).json({ message: 'No favorite with this id!' });
      return;
    }
    res.status(200).json(favoriteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a message by id - will need to connect delete button to message id
// need to make sure only user who made the comment or admin can delete
router.delete('/:id', async (req, res) => {
  try {
    const favoriteData = await UserHistory.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!favoriteData) {
      res.status(404).json({ message: 'No favorite found with this id!' });
      return;
    }

    res.status(200).json(favoriteData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
