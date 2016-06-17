/**
 * 活动阶段 时间状态判断
 * @param start '阶段开始时间'
 * @param end '阶段结束时间'
 * @returns {*}
 */
var stepDetection = function (start, end) {
  var now = moment();
  if (start > now) {
    return {
      stateText: '未开始',
      class: 'disabled',
      timeText: '将于 ' + moment(start).format('MM月DD日 hh:mm') + ' 开始'
    }
  }else if (now > start && now < end) {
    return {
      stateText: '进行中',
      class: 'active',
      timeText: '将于 ' + moment(end).format('MM月DD日 hh:mm') + ' 结束'
    }
  }else {
    return {
      stateText: '已结束',
      class: 'completed',
      timeText: '已于 ' + moment(end).format('MM月DD日 hh:mm') + ' 结束'
    }
  }
};

Template.mamapaItem.helpers({
  signupStep: function() {
    return stepDetection(this.mamapa.signupAt, this.mamapa.startAt);
  },
  inProgressStep: function() {
    return stepDetection(this.mamapa.startAt, this.mamapa.finishAt);
  },
  reportStepClass: function() {
    if (moment() > this.mamapa.finishAt) {
      return 'active';
    }else {
      return 'disabled';
    }
  },
  signupsCount: function (count) {
    $('#signupProgress')
      .progress({
        text: {
          active  : '已报 {value} 人, 共 {total} 个名额',
          success : '{total} 个名额已报满!'
        },
        value: count
      });
    return count;
  },
  headerImg: function() {
    return "/cfs/files/images/"+this.mamapa.headerImg
  }
});

Template.mamapaItem.events({
  'click .deletemamapa': function (e) {
    e.preventDefault();
    var currentId = this.mamapa._id;
    $('.ui.basic.modal.confirmdelete')
      .modal({
        // onDeny    : function(){
        //   // window.alert('Wait not yet!');
        //   // return false;
        // },
        onApprove : function() {
          Meteor.call('cleanMamapaSignups', currentId, function (error, isSuccess) {
            if (error) {
              // console.log('error: ', error);
            }else{
              // console.log(isSuccess);
            }
          });
          Meteor.call('cleanMamapaImgs', currentId, function (error, isSuccess) {
            if (error) {
              console.log('error: ', error);
            }else{
              console.log(isSuccess);
            }
          });
          MamaPas.remove(currentId);
          Router.go('mamapa')
        }
      })
      .modal('show')
    ;
  },
  'click .mamapaedit': function (e) {
    e.preventDefault();
    var currentId = this.mamapa._id;
    Router.go('mamapaEdit', {_id: currentId});
  }
});

Template.mamapaItem.rendered = function () {
  $('#signupProgress')
    .progress({
      text: {
        active  : '已报 {value} 人, 共 {total} 个名额',
        success : '{total} 个名额已报满!'
      }
    });
};