MamaPas = new Mongo.Collection('mamapas');
MamaPas.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "活动名称",
    max: 100
  },
  author: {
    type: String,
    label: "创建者",
    autoform: {
      value: function() {
        return Meteor.user().profile.name
      }
    }
  },
  authorId: {
    type: String,
    label: "创建者Id",
    autoform: {
      value: function() {
        return Meteor.user()._id
      }
    }
  },
  numLimit: {
    type: Number,
    label: "活动名额",
    min: 1
  },
  address: {
    type: String,
    label: "活动地址",
    min: 2
  },
  createAt: {
    type: Date,
    label: "活动创建时间",
    autoform: {
      afFieldInput: {
        type: "datetimepicker"
        // hidden: true
      }
    }
  },
  signupAt: {
    type: Date,
    label: "开始报名",
    autoform: {
      afFieldInput: {
        type: "datetimepicker"
      }
    }
  },
  startAt: {
    type: Date,
    label: "活动开始",
    autoform: {
      afFieldInput: {
        type: "datetimepicker"
      }
    }
  },
  finishAt: {
    type: Date,
    label: "活动结束",
    autoform: {
      afFieldInput: {
        type: "datetimepicker"
      }
    }
  },
  detailText: {
    type: String,
    label: "活动内容",
    autoform: {
      afFieldInput: {
        type: "textarea"
      }
    }
  },
  headerImg: {
    type: String,
    label: "活动头图",
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        label: '选择图片',
        removeLabel: '删除'
      }
    }
  },
  contentImg: {
    type: String,
    label: "活动详情图片",
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        label: '选择图片',
        removeLabel: '删除'
      }
    }
  }
}));

Meteor.methods({
  cleanMamapaImgs: function (mamapaId) {
    check(this.userId, String);
    check(mamapaId, String);
    return Images.remove({mamapaId: mamapaId});
  }
});