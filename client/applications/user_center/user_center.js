Template.userCenter.helpers({
    headimg: function () {
        return Meteor.user().profile.wechat.headimgurl;
    },
    nickname: function(){
      return Meteor.user().profile.wechat.nickname;
    },
    sex: function(){
      var sex = Meteor.user().profile.wechat.sex;
      return sex == 1 ? '♂' : sex == 2 ? '♀' : '';
    }
})
