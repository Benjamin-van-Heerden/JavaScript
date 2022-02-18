import { Context } from "../../index";
import { User, Prisma } from ".prisma/client";
import validator from "validator";
import bcrypt from "bcrypt";

interface SignUpInfo {
    email: string;
    name: string;
    password: string;
    bio: string;
}

interface UserSignUpPayloadType {
    userErrors: {
        message: string;
    }[];
    token: string | null;
}

export const userMutations = {
    userSignup: async (
        _: any,
        { email, name, password, bio }: SignUpInfo,
        { prisma }: Context
    ): Promise<UserSignUpPayloadType> => {
        const isEmail = validator.isEmail(email);
        const emailExists = !!prisma.user.findUnique({
            where: {
                email: email
            }
        });
        const isValidPassword = validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 0
        });

        if (!isEmail) {
            return {
                userErrors: [
                    {
                        message: "Invalid email"
                    }
                ],
                token: null
            };
        } else if (emailExists) {
            return {
                userErrors: [
                    {
                        message: "Email already in use"
                    }
                ],
                token: null
            };
        } else if (!isValidPassword) {
            return {
                userErrors: [
                    {
                        message:
                            "Password should contain at least 8 characters, including one uppercase, one lowercase and one number"
                    }
                ],
                token: null
            };
        } else if (!name) {
            return {
                userErrors: [
                    {
                        message: "Must provide a name"
                    }
                ],
                token: null
            };
        } else if (!bio) {
            return {
                userErrors: [
                    {
                        message: "Bio may not be empty"
                    }
                ],
                token: null
            };
        }

        const hashedPassword = await bcrypt.hash(password, 5);
        await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword
            }
        });

        return {
            userErrors: [],
            token: "Hi there"
        };
    }
};
