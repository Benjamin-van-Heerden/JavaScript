"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
const post_1 = require("./post");
const user_1 = require("./user");
exports.Mutation = Object.assign(Object.assign({}, post_1.postMutations), user_1.userMutations);
