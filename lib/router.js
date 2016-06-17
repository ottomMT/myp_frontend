// Router.configure({
//   layoutTemplate: 'layout',
//   loadingTemplate: 'loading'//,
//   // notFoundTemplate: 'notFound',
//   // waitOn: function() {
//   //   return Meteor.subscribe('notifications');
//   // }
// });

Router.configure({
  layoutTemplate: 'asideLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return [Meteor.subscribe('mamapas'), Meteor.subscribe('signups'),Meteor.subscribe('images')]
  },
  yieldTemplates: {
    header: {to: 'nav'}
  }
});

AccountsTemplates.configure({
  defaultLayout: 'asideLayout'
});

Router.route('/', function () {
  this.redirect('/mamapa');
});

Router.route('/mamapa', {
  name: 'mamapa',
  data: function () {
    return {
      mamapas: MamaPas.find({}, {sort: {createAt: -1, _id: -1}}),
      signups: Signups.find()
    }
  }
});
Router.route('/mamapa/:_id', {
  name: 'mamapaDetail',
  data: function () {
    return {
      mamapas: MamaPas.find({}, {sort: {createAt: -1, _id: -1}}),
      signups: Signups.find({mamapaId: this.params._id}),
      mamapa: MamaPas.findOne(this.params._id)
    }
  }
});

Router.route('/create/mamapa', {
  name: 'mamapaCreate',
  data: function () {
    return {
      mamapas: MamaPas.find({}, {sort: {createAt: -1, _id: -1}})
    }
  }
});

Router.route('/edit/:_id', {
  name: 'mamapaEdit',
  data: function () {
    return {
      docToEdit: MamaPas.findOne(this.params._id),
      mamapas: MamaPas.find({}, {sort: {createAt: -1, _id: -1}})
    }
  }
});

Router.route('/users', {
  name: 'usersManage',
  waitOn: function () {
    return Meteor.subscribe('usersData')
  },
  data: function(){
    return {usersList: Meteor.users.find()};
  }
});

Router.route('/surveys', {
  name: 'surveys'
});

Router.route('/activities', {
  name: 'activities'
});

Router.route('/user-logout', {
  name: 'userLogout',
  onBeforeAction: function () {
    return AccountsTemplates.logout();
  }
});

Router.plugin('ensureSignedIn');
Router.onBeforeAction('dataNotFound');