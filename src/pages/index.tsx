import React from 'react'

// const Home: React.FC = ({ user }) => {
//     return (
//         <div>
//             <img src={user.avatar_url} />
//             {/* <Head>
//                 <title>Create Next App</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>

//             <main>
//                 <h1>Hello</h1>
//             </main> */}
//         </div>
//     )
// }

export default function Home({ user }): JSX.Element {
    return (
        <div>
            <img
                src={user.avatar_url}
                alt={user.name}
                width={200}
                height={200}
                style={{ borderRadius: '50%' }}
            />
            <h1>{user.name}</h1>
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('https://api.github.com/users/deborapozzebon')
    const data = await response.json()

    return {
        props: {
            user: data
        }
    }
}

// export default Home
