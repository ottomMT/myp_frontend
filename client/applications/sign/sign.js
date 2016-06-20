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
    }


    // 未迁移成功包含迁移失败  (#move_faild)  和  未查询到数据 (#move_undefined),这两个弹层已经包含在页面中
});

