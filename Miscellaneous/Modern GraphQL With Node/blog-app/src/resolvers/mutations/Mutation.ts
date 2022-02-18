import { postMutations } from "./post";
import { userMutations } from "./user";

export const Mutation = {
    ...postMutations,
    ...userMutations
};
