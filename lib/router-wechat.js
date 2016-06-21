Router.onBeforeAction(function (pause) {
    console.log('pause', pause);
    if (! Meteor.userId() && WechatConfig.whiteList.indexOf(pause.url) < 0) {
        var loginUrl = WechatConfig.url();
        Session.set('jump', pause.url);
        window.location = loginUrl;
        // Router.stop();
    }else{
        this.next();
    }
});
//授权登录完成后回调
Router.route('/_weixin/callback', function (req, res, next) {
    var query = this.params.query;
    Meteor.call('wechatLoginWithAccessToken', query, function (error, result) {
        if(result){
            Meteor.loginWithToken(result.token);
            Router.go(Session.get('jump') || '/');
        }
    });
});