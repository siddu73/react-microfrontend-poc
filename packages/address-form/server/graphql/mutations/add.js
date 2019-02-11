var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var UserType = require("../types/user");
var User = require("../../models/User.model");

exports.add = {
    type: UserType.userType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        role: {
            type: new GraphQLNonNull(GraphQLString)
        },
        date: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        const uModel = new User(params);
        const newUser = uModel.save();
        if (!newUser) {
            throw new Error("Error");
        }
        return newUser;
    }
};
