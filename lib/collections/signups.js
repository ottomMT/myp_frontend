Signups = new Mongo.Collection('signups');

Signups.attachSchema(new SimpleSchema({
  signedAt: {
    type: Date,
    label: "报名时间"
  },
  mamaName: {
    type: String,
    label: "妈妈姓名",
    autoform: {
      value: function() {
        return Meteor.user().profile.name
      }
    }
  },
  mamaId: {
    type: String,
    label: "妈妈Id",
    // unique: true,
    autoform: {
      value: function() {
        return Meteor.user()._id
      }
    }
  },
  mamaTel: {
    type: String,
    label: "妈妈电话",
    // unique: true,
    min: 11,
    max: 11
  },
  babyName: {
    type: String,
    label: "宝宝姓名",
    min: 2
  },
  babyBirthday: {
    type: Date,
    label: "宝宝生日",
    autoform: {
      afFieldInput: {
        type: "datetimepicker",
        // hidden: true,
      }
    }
  },
  weixinGroup: {
    type: String,
    label: "所在群"
  },
  mamapaId: {
    type: String,
    label: "参与活动Id"
  }
}));

Meteor.methods({
  cleanMamapaSignups: function (mamapaId) {
    check(this.userId, String);
    check(mamapaId, String);
    return Signups.remove({mamapaId: mamapaId});
  },
  deleteSignupItem: function(signupId) {
    check(this.userId, String);
    check(signupId, String);
    return Signups.remove(signupId);
  }
});