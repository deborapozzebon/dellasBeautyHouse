import React from 'react'

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
            <h1>{user.bio}</h1>
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('https://api.github.com/users/deborapozzebon')
    const data = await response.json()

    return {
        props: {
            user: data
        },
        revalidate: 10
    }
}
