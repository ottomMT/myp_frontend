Template.mmpDetails.helpers({
    couldSignup: function () {
        var now = new Date;
        if(this.mamapas.numLimit > Signups.find({mamapaId: this.mamapas._id}).count() && ( now >= this.mamapas.signupAt  && now < this.mamapas.startAt)){
            return true;
        } else {
            return false;
        }
    },
    signupTip: function () {
        var now = new Date;
        console.log(now);
        console.log(this.mamapas.signupAt);
        if(now <= this.mamapas.signupAt){
            return "报名尚未开始,敬请期待";
        } else if (this.mamapas.numLimit <= Signups.find({mamapaId: this.mamapas._id}).count()){
            return "报名已满,下次再来吧~";
        } else if (now > this.mamapas.startAt){
            return "报名已结束,下次再来吧~";
        }
    },
    detailsStartTime: function () {
        return moment(this.mamapas.startAt).format('YYYY-MM-DD HH:MM');
    },
    joinNumber: function () {
        return Signups.find({mamapaId: this.mamapas._id}).count();
    },
    // access_token: function () {
    //     $.get("https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi",function (result) {
    //         console.log(result);
    //     });
    // }
    // wechatConfig: function () {
    //     return {
    //         debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //         appId: '', // 必填，公众号的唯一标识
    //         timestamp: , // 必填，生成签名的时间戳
    //         nonceStr: '', // 必填，生成签名的随机串
    //         signature: '',// 必填，签名，见附录1
    //         jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    //     }
    // }
});