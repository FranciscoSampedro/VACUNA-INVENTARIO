import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Root() {
  return (
   <>
   
   </>
  )
}

// export async function getServerSideProps (context){
// const {req} = context
// const session = await getSession({req})

// if (typeof session === 'object' && session !== null) {
//     const user = session.user

//     if (user) {
//       return {
//         redirect: {
//           destination: '/inicio',
//           permanent: true
//         }
//       }
//     }
//   }
//    return {
//     redirect: {
//       destination: '/auth/login',
//       permanent: true
//     }
//   }

// }
