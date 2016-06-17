Meteor.methods({
  deleteUser: function (userId) {
    return Meteor.users.remove(userId);
  }
});