// Profile images collection
ProfileImages = new FS.Collection("ProfileImages", {
    stores: [new FS.Store.GridFS("ProfileImages")]
});

UserImages = new Mongo.Collection("UserImages");

Posts = new Mongo.Collection("posts");

Posts.attachSchema(new SimpleSchema({
    body: {
        type: String,
        max: 500
    },
    userId: {
        type: String,
        autoValue: function(){return Meteor.userId()}
    },

    username: {
        type: String,
        autoValue: function(){return Meteor.users.findOne({_id: this.userId}).emails[0]}
    },

    createdAt: {
        type: Date,
        autoValue: function(){return new Date()}
    }
}));