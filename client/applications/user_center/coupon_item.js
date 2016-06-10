Template.couponItem.helpers({
    giftInfo: function () {
        return Gifts.findOne({_id: this.gift});
    },
    useText: function () {
        return this.use ? '已使用' : '未使用';
    },
    deadline: function (deadline) {
        return moment(deadline).format('YYYY-MM-DD') || '';
    }
});
