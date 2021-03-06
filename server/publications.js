Meteor.publish('mamapas', function() {
  return MamaPas.find();
});

Meteor.publish('signups', function() {
  return Signups.find();
});

Meteor.publish('images', function() {
  return Images.find();
});

Meteor.publish('usersData', function() {
  if (this.userId) {
    return Meteor.users.find();
  } else {
    this.ready();
  }
});