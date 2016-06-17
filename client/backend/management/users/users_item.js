Template.usersItem.helpers({
  email: function () {
    return this.emails && this.emails[0].address;
  },
  created: function () {
    return this.createdAt && moment(this.createdAt).format('YYYY-MM-DD hh:mm');
  },
  lastLogin: function () {
    return this.services && moment(this.services.resume.loginTokens[0].when).format('YYYY-MM-DD hh:mm') || '无登陆信息';
  }
});

Template.usersItem.events({
  'click #deleteUser': function (e) {
    e.preventDefault();
    var currentId = this._id;
    $('.ui.basic.modal.confirmdelete')
      .modal({
        // onDeny    : function(){
        //   // window.alert('Wait not yet!');
        //   // return false;
        // },
        onApprove : function() {
          Meteor.call('deleteUser', currentId, function (error, isSuccess) {
            if (error) {
              console.log('error: ', error);
            }else{
              console.log(isSuccess);
            }
          });
        }
      })
      .modal('show');
  }
});