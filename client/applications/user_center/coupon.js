Template.coupon.events({
    // 显示二维码弹层
    'click .floatbutton':function (e) {
        e.preventDefault();
        $('.daerweima').css('display','block');
        // $('.daerweima canvas').show();
        $('.daerweima').animate({
            opacity: 1
        },160);
        $('#daimg').animate({
            height:'6rem',
            width: '6rem'
        },100);

    },

    // 关闭二维码弹层
    'click .daerweima':function (e) {
        e.preventDefault();
        $('#daimg').animate({
            opacity: 0,
            height:'0rem',
            width: '0rem'
        },160);
        setTimeout(function () {
            $('.daerweima').css('display','none');
        }, 100);

    }
});

/**
 * 分别过滤已使用列表和未使用列表
 */
Template.coupon.helpers({
    
    isUse: function (use) {
        return !!use;
    }
});