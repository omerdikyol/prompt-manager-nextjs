import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDatabase } from "@utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({ email: session.user.email });
            session.user.id = sessionUser._id.toString();
            return session;
        },

        async signIn({ profile }) {
            try {
                await connectToDatabase();

                // check if user exists
                const user = await User.findOne({ email: profile.email });

                // if not create new user
                if (!user) {
                    await User.create({
                        email: profile.email,
                        username: profile.email.split("@")[0].replace(".", "").toLowerCase(),
                        image: profile.picture,
                    });
                }
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    },

})

export {handler as GET, handler as POST }