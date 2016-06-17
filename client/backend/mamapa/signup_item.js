Template.signupItem.helpers({
  babyBirthday: function () {
    return moment(this.babyBirthday).format('YYYY-MM-DD');
  }
});

Template.signupItem.events({
  'click #deleteSignup': function (e) {
    e.preventDefault();
    var currentSignupId = this._id;
    $('.ui.basic.modal.confirmdelete')
      .modal({
        // onDeny    : function(){
        //   // window.alert('Wait not yet!');
        //   // return false;
        // },
        onApprove : function() {
          Meteor.call('deleteSignupItem', currentSignupId, function (error, isSuccess) {
            if (error) {
              console.log('error: ', error);
            }else{
              console.log(isSuccess);
            }
          });
        }
      })
      .modal('show')
    ;
  }
});