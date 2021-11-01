const User = require('./User');
const Message = require('./Message');
const User_history = require('./User_history');

User.hasMany(Message, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Message.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(User_history, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User_history.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Message };
