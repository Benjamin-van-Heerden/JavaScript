import { Post, Prisma } from ".prisma/client";
import { Context } from "../../index";

interface PostCreateArgs {
    post: {
        title?: string;
        content?: string;
    };
}

interface PostUpdateArgs {
    postId: String;
    post: {
        title: string;
        content: string;
    };
}

interface PostPayloadType {
    userErrors: {
        message: string;
    }[];
    post: Post | Prisma.Prisma__PostClient<Post> | null;
}

export const postMutations = {
    postCreate: async (
        _: any,
        { post }: PostCreateArgs,
        { prisma }: Context
    ): Promise<PostPayloadType> => {
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
    },

    postUpdate: async (
        _: any,
        { postId, post }: PostUpdateArgs,
        { prisma }: Context
    ): Promise<PostPayloadType> => {
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

        const oldPost = await prisma.post.findUnique({
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

        let payloadToUpdate: PostCreateArgs["post"] = {
            title,
            content
        };

        if (!title) delete payloadToUpdate.title;
        if (!content) delete payloadToUpdate.content;

        return {
            userErrors: [],
            post: prisma.post.update({
                data: {
                    ...payloadToUpdate
                },
                where: {
                    id: Number(postId)
                }
            })
        };
    },

    postDelete: async (
        _: any,
        { postId }: { postId: string },
        { prisma }: Context
    ): Promise<PostPayloadType> => {
        const post = await prisma.post.findUnique({
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
    }
};
