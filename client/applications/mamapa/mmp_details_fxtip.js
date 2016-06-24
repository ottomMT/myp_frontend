Template.mmpDetailsFxtip.helpers({
    SurplusPlaces: function () {
        var signed = Signups.find({mamapaId: this.mamapas._id}).count();
        return this.mamapas.numLimit - signed
    }
});