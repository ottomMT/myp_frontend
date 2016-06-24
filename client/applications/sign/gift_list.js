Template.giftList.helpers({
    remainDay: function () {
        var remainDay = this.day - (Meteor.user().profile.signList && Meteor.user().profile.signList.length || 0);
        return remainDay <= 0 ? 0 : remainDay;
    },

});