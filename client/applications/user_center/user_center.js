Template.userCenter.helpers({
    headimg: function () {
        return Meteor.user().profile.headimgurl
    }
})