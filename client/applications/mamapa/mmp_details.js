Template.mmpDetails.helpers({
    detailsStartTime: function () {
        return moment(this.mamapas.startAt).format('YYYY-MM-DD HH:MM');
    },
    joinNumber: function () {
        console.log(this._id);
        return Signups.find({mamapaId: this.mamapas._id}).count();
    }
});
