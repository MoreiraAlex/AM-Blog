import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { getAllPosts } from 'src/services/api';

interface Iprops {
    posts: { [key: string]: string }[];
}

const Home: NextPage<Iprops> = ({ posts }) => {
    return (
        <>
            <h1>Meu blog!</h1>
            <p>Listagem de posts:</p>
            {posts.map((post) => (
                <p key={post.slug}>
                    <Link href={`/${post.slug}`}>{post.title}</Link>
                </p>
            ))}
        </>
    );
};

export const getStaticProps: GetStaticProps = () => {
    const posts = getAllPosts(['title', 'date', 'slug']);

    return {
        props: {
            posts,
        },
    };
};

export default Home;
