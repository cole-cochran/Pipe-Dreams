const sequelize = require('../config/connection');
const { User, Message, User_history } = require('../models');

const userData = require('./userData.json');
const messageData = require('./messageData.json');
const favoriteData = require('./userHistoryData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  const messages = await Message.bulkCreate(messageData, {
    individualHooks: true,
    returning: true,
  });

  const userHistory = await User_history.bulkCreate(favoriteData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();