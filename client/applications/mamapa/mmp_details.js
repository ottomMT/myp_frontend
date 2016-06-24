Template.mmpDetails.helpers({
    couldSignup: function () {
        if(this.mamapas.numLimit <= Signups.find({mamapaId: this.mamapas._id}).count()){
            return false;
        } else {
            return true;
        }
    },
    detailsStartTime: function () {
        return moment(this.mamapas.startAt).format('YYYY-MM-DD HH:MM');
    },
    joinNumber: function () {
        return Signups.find({mamapaId: this.mamapas._id}).count();
    }
});