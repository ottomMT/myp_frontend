Template.sign.helpers({
    /**
     * 签到天数，取用户签到记录总天数，默认值为0
     * @return {number} 签到天数
     */
    signLength: function () {
        return Meteor.user().profile.signList && Meteor.user().profile.signList.length || 0;
    },
    /**
     * 判断用户是否已签到过
     * 通过当前日期匹配签到记录
     * @return {boolean}
     */
    isSign: function(){
      var signList = Meteor.user().profile.signList;
          signList = _.isArray(signList) ? signList : [];
      return signList.indexOf(moment().format('YYYY-MM-DD')) > -1 ? true : false;
    },
    /**
     * 签到底部最近一周日期显示
     * 返回最近一周日期数组
     * @return {array}
     */
    showDay: function(){
        var date = new Date(),
            month = date.getMonth() + 1,
            year = date.getFullYear(),
            day = date.getDate();
        var start = (Math.ceil(day/7) - 1) * 7 + 1,
            end = start + 7,
            monthDay,
            li = '';
            monthDay = new Date((new Date(year + '/' + (month + 1) + '/1 00:00').getTime() - 3600000)).getDate() + 1;
        // 如果为最后一周
        if(Math.ceil(day/7) > 4){
          end = monthDay;
          start = end - 7;
        }

        var days = [];
        for(i = start; i < end; i++){
          days.push(i);
        }
        return days;
    },
    /**
     * 验证该日期用户是否已签到,
     * 如果已签到，返回 active 未签到返回 ''
     * @return {string}
     */
    isSignClass: function(date){
      var signList = Meteor.user().profile.signList,
          active = false;
          signList = _.isArray(signList) ? signList : [];
          _.forEach(signList, function(item){
            if(moment(item).date() === date){
              active = true;
            }
          });
          return active ? 'active' : '';
    }
});
Template.sign.events({
    // 打开规则弹层
    'click #gzbutton': function (e) {
        e.preventDefault();
        $('.gz').show().animate({
            opacity: '1'
        },200);
    },
    // 关闭规则弹层
    'click .close': function (e) {
        e.preventDefault();
        $('.gz').animate({
            opacity: '0'
        },200).hide();
    },

    // 打开积分迁移弹层
    'click #move_points': function (e) {
        e.preventDefault();
        $('#move_start').show().animate({
            opacity: '1'
        },200);
    },

    // 关闭积分迁移弹层
    'click .md_close_icon': function (e) {
        e.preventDefault();
        $('#move_start').animate({
            opacity: '0'
        },200).hide();
    },

    // 迁移中和迁移成功界面
    'click #move_start_btn': function (e) {
        e.preventDefault();

        // 关闭迁移开始界面
        $('#move_start').animate({
        opacity:0
        },300).css('display','none');

        // 打开迁移中
        $('#move_ing').animate({
            opacity: 1
        },300).css('display' , 'block');

        // 打开迁移成功界面
        setTimeout(function () {
            // 关闭迁移中界面
            $('#move_ing').animate({
                opacity:0
            },300).css('display','none');

            // 打开迁移成功界面
            $('#move_success').animate({
                opacity: 1
            },300).css('display' , 'block');
        }, 1000);
    },

    // 关闭迁移成功弹层
    'click #move_close': function (e) {
        e.preventDefault();

        $('#move_success').animate({
            opacity:0
        },300).css('display','none');
    },

    //签到
    'click #sign': function () {
        if(this.isSign) return false;
        Meteor.call('sign', function (error, result) {
          
        });

    }

    // 未迁移成功包含迁移失败  (#move_faild)  和  未查询到数据 (#move_undefined),这两个弹层已经包含在页面中
});
