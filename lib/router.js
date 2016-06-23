// Router.configure({
//   layoutTemplate: 'layout',
//   loadingTemplate: 'loading'//,
//   // notFoundTemplate: 'notFound',
//   // waitOn: function() {
//   //   return Meteor.subscribe('notifications');
//   // }
// });

Router.configure({
    layoutTemplate: 'basicLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
        return [
                    Meteor.subscribe('mamapas'),
                    Meteor.subscribe('signups'),
                    Meteor.subscribe('images'),
                    Meteor.subscribe('gifts'),
                    Meteor.subscribe('coupons'),
                ];
    }
});
//
// AccountsTemplates.configure({
//   defaultLayout: 'basicLayout'
// });

Router.route('/', function () {
    this.redirect('/user-center');
});

// 个人中心
Router.route('/user-center', {
    name: 'userCenter'
});

// 我的奖品
Router.route('/coupon', {
    name: 'coupon',
    data: function () {
        return {
            coupons: Coupons.find({user: Meteor.userId()}, {sort:{use: 1}})
        };
    }
});

// 签到页面
Router.route('/sign', {
    name: 'sign',
    onBeforeAction: function(){
      var self = this;
      // 清除上月数据
      Meteor.call('clearSign');
      this.next();
    },
    data: function () {
        return {
            gifts: Gifts.find({end: {$gt: new Date()}}, {sort: {day: 1}}),
        };
    }
});

// 奖品详情
Router.route('/gift/:_id', {
    name: 'giftItem',
    data: function () {
        return {
            gift: Gifts.findOne(this.params._id)
        };
    }
});

// 妈妈 Pa 列表
Router.route('/mmp-list', {
    name: 'mmpList',
    data: function () {
        var now = new Date();
        return {
            mamapas: MamaPas.find({finishAt: {$gt: now}}, {sort: {createAt: -1, _id: -1}}),
            signups: Signups.find()
        };
    }
});

// 妈妈 Pa 详情页
Router.route('/mmp-details/:_id', {
    name: 'mmpDetails',
    data: function () {
        return {
            mamapas: MamaPas.findOne(this.params._id)
        };
    }
});
// Router.route('/mamapa', {
//   name: 'mamapa',
//   data: function () {
//     return {
//       mamapas: MamaPas.find({}, {sort: {createAt: -1, _id: -1}}),
//       signups: Signups.find()
//     }
//   }
// });
// Router.route('/mamapa/:_id', {
//   name: 'mamapaDetail',
//   data: function () {
//     return {
//       mamapas: MamaPas.find({}, {sort: {createAt: -1, _id: -1}}),
//       signups: Signups.find({mamapaId: this.params._id}),
//       mamapa: MamaPas.findOne(this.params._id)
//     }
//   }
// });

// // Router.route('/create/mamapa', {
// //   name: 'mamapaCreate',
// //   data: function () {
// //     return {
// //       mamapas: MamaPas.find({}, {sort: {createAt: -1, _id: -1}})
// //     }
// //   }
// // });
//
// Router.route('/edit/:_id', {
//   name: 'mamapaEdit',
//   data: function () {
//     return {
//       docToEdit: MamaPas.findOne(this.params._id),
//       mamapas: MamaPas.find({}, {sort: {createAt: -1, _id: -1}})
//     }
//   }
// });

// Router.route('/users', {
//   name: 'usersManage',
//   waitOn: function () {
//     return Meteor.subscribe('usersData')
//   },
//   data: function(){
//     return {usersList: Meteor.users.find()};
//   }
// });

// Router.route('/surveys', {
//   name: 'surveys'
// });

// Router.route('/activities', {
//   name: 'activities'
// });

// Router.route('/user-logout', {
//   name: 'userLogout',
//   onBeforeAction: function () {
//     return AccountsTemplates.logout();
//   }
// });

// Router.plugin('ensureSignedIn');
Router.onBeforeAction('dataNotFound');
