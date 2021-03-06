import { User, Post, ModelName } from "@prisma/client";
import NextCrud, { PrismaAdapter } from "@premieroctet/next-crud";
import { prisma } from "../../db";

const handler = NextCrud({
  adapter: new PrismaAdapter<User | Post, ModelName>({
    prismaClient: prisma
  }),
  swagger: {
    title: "My API CRUD",
    apiUrl: process.env.API_URL as string,
    config: {
      User: {
        tag: {
          name: "Users"
        }
      },
      Post: {
        tag: {
          name: "Posts"
        }
      }
    }
  },
  pagination: {
    perPage: 3
  }
});

export default handler;
