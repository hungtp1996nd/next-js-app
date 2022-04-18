import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GithubProvider({
      // clientId: process.env.GITHUB_ID,
      // clientSecret: process.env.GITHUB_CLIENT_ID,
      clientId: '881d6a004889304d66e9',
      clientSecret: '339996ff4d16ab4e059e48110f7357c1054fabd0'
    })
  ]
})
