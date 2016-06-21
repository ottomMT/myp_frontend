Template.mmpListItem.helpers({
    startTime: function () {
        return moment(this.startAt).format('YYYY-MM-DD HH:MM');
    },
    mmp_state: function () {
        var now = Date();
        if (now > this.startAt){
            return { state: '报名结束', buttonColor: '#ccc'}
        } else if( now < this.signupAt){
            return { state: '报名即将开始', buttonColor: "#ccc"}
        } else{
            return { state :'我要报名', buttonColor: ''}
        }
    }
});
