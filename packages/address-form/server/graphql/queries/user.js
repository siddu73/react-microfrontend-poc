var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLList = require("graphql").GraphQLList;
var User = require("../../models/User.model");
var userType = require("../types/user").userType;

// Query
exports.queryType = new GraphQLObjectType({
    name: "Query",
    fields: function() {
        return {
            users: {
                type: new GraphQLList(userType),
                resolve(root, params) {
                    const users = User.find().exec();
                    if (!users) {
                        throw new Error("Error");
                    }
                    return users;
                }
            }
        };
    }
});
