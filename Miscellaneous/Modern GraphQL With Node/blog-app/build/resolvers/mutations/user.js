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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMutations = void 0;
const validator_1 = __importDefault(require("validator"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.userMutations = {
    userSignup: (_, { email, name, password, bio }, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
        const isEmail = validator_1.default.isEmail(email);
        const emailExists = !!prisma.user.findUnique({
            where: {
                email: email
            }
        });
        const isValidPassword = validator_1.default.isStrongPassword(password, {
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
        }
        else if (emailExists) {
            return {
                userErrors: [
                    {
                        message: "Email already in use"
                    }
                ],
                token: null
            };
        }
        else if (!isValidPassword) {
            return {
                userErrors: [
                    {
                        message: "Password should contain at least 8 characters, including one uppercase, one lowercase and one number"
                    }
                ],
                token: null
            };
        }
        else if (!name) {
            return {
                userErrors: [
                    {
                        message: "Must provide a name"
                    }
                ],
                token: null
            };
        }
        else if (!bio) {
            return {
                userErrors: [
                    {
                        message: "Bio may not be empty"
                    }
                ],
                token: null
            };
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 5);
        yield prisma.user.create({
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
    })
};
