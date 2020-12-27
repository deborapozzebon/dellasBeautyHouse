import { useRouter } from 'next/router'

export default function Member({user}) {
    const router = useRouter()

    if(router.isFallback){
        return <h4> Loading ...</h4>
    }
    return (
        <>
            <img
                src={user.avatar_url}
                alt={user.name}
                width={200}
                height={200}
                style={{ borderRadius: '50%' }}
            />
            <h1>{user.name}</h1>
            <h1>{user.bio}</h1>
        </>
    )
}

export const getStaticPaths = async () => {
    const response = await fetch(`https://api.github.com/users/deborapozzebon/following`)
    const data = await response.json();

    const paths = data.map(item => {
        return { params: {login: item.login }}
    })
    
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const { login } = context.params;

    const response = await fetch(`https://api.github.com/users/${login}`)
    const data = await response.json();

    return {
        props: {
            user: data
        },
        revalidate: 10
    }
}