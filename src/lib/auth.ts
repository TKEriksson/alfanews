import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6
  },
  plugins: [
    admin()
  ], // This includes role into session:
    user: {
       additionalFields: {
          role: {
              type: "string",
              input: false
            } 
        }
    }
});
