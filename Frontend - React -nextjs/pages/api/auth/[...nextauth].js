import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
const options = {
    providers:[
        Providers.Credentials({
            name:"Custom Provider",
            Credential:{
                username:{label:"Email", type:"text", placeholder: "sample@sample.com"},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials){
                const user= {name:"Test user", email: "tes@sample.com" }
                return user;
            }
        })
    ],
    session:{
        jwt: true,
    }
}
 export default(req, res) => NextAuth(req, res, options);