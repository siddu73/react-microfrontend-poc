var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var UserType = require("../types/user");
var User = require("../../models/User.model");

exports.update = {
    type: UserType.userType,
    args: {
        id: {
            name: "id",
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
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
        return User.findByIdAndUpdate(
            params.id,
            {
                $set: {
                    name: params.name,
                    email: params.email,
                    password: params.password,
                    role: params.role,
                    date: params.date
                }
            },
            { new: true }
        ).catch(err => new Error(err));
    }
};
