Template.mamapaList.helpers({
  mamapasing: function () {
    var now = new Date();
    var objs = MamaPas.find({finishAt: {$gt: now}},{sort: {createAt: -1}});
    // console.log(objs.count());
    return objs;
  },
  mamapased: function () {
    var now = new Date();
    var objs = MamaPas.find({finishAt: {$lt: now}},{sort: {createAt: -1}});
    // console.log(objs);
    return objs;
  }
});