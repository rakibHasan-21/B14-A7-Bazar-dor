import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("assigment-a7");

export const auth = betterAuth({

  // baseURL: process.env.BETTER_AUTH_URL,

  // trustedOrigins: [
  //   "http://localhost:3000",
  //   "https://b14-a7-bazar-dor-sable.vercel.app",
  // ],

  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_ID_URL,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID,
    },
    github: { 
            clientId: process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET, 
        },
  },
});