var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var UserType = require("../types/user");
var User = require("../../models/User.model");

exports.remove = {
    type: UserType.userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        const removeduser = User.findByIdAndRemove(params.id).exec();
        if (!removeduser) {
            throw new Error("Error");
        }
        return removeduser;
    }
};
