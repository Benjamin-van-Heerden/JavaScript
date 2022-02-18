"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMutations = void 0;
exports.postMutations = {
    postCreate: (_, { post }, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
        const { title, content } = post;
        if (!title || !content) {
            return {
                userErrors: [
                    {
                        message: "Must provide a title and content"
                    }
                ],
                post: null
            };
        }
        return {
            userErrors: [],
            post: prisma.post.create({
                data: {
                    title,
                    content,
                    authorId: 1
                }
            })
        };
    }),
    postUpdate: (_, { postId, post }, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
        const { title, content } = post;
        if (!title && !content) {
            return {
                userErrors: [
                    {
                        message: "Need to have at least one field to update"
                    }
                ],
                post: null
            };
        }
        const oldPost = yield prisma.post.findUnique({
            where: {
                id: Number(postId)
            }
        });
        if (!oldPost) {
            return {
                userErrors: [
                    {
                        message: "Invalid post id"
                    }
                ],
                post: null
            };
        }
        let payloadToUpdate = {
            title,
            content
        };
        if (!title)
            delete payloadToUpdate.title;
        if (!content)
            delete payloadToUpdate.content;
        return {
            userErrors: [],
            post: prisma.post.update({
                data: Object.assign({}, payloadToUpdate),
                where: {
                    id: Number(postId)
                }
            })
        };
    }),
    postDelete: (_, { postId }, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
        const post = yield prisma.post.findUnique({
            where: {
                id: Number(postId)
            }
        });
        if (!post) {
            return {
                userErrors: [
                    {
                        message: "Invalid post id"
                    }
                ],
                post: null
            };
        }
        return {
            userErrors: [],
            post: prisma.post.delete({
                where: {
                    id: Number(postId)
                }
            })
        };
    })
};
