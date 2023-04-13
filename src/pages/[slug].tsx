import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import { ParsedUrlQuery } from 'querystring';

import { getAllPosts, getPost } from 'src/services/api';
import { toHTML } from 'src/services/markdown';

import ReactMarkdown from 'react-markdown';
import NavBar from 'components/navBar';

interface Iprops {
  post: { [key: string]: string };
}

const Page: NextPage<Iprops> = ({ post }) => {
  return (
    <>
      <NavBar />
      <h1>{post.title}</h1>
      <p>
        {post.author} · {post.date}
      </p>
      {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </>
  );
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (params) => {
  const { slug } = params.params as IParams;
  const post = getPost(slug, ['title', 'date', 'author', 'slug', 'content']);

  // post.content = await toHTML(post.content);

  return {
    props: { post },
  };
};

// Usamos a função do Next.js, getStaticPaths()
export function getStaticPaths() {
  // Buscamos todos os slugs e date de todos os posts
  const posts = getAllPosts(['slug', 'date']);

  return {
    /**
     * Retornamos para cada rota o parâmetro slug,
     * para conseguirmos usá-lo na função
     * getStaticProps acima.
     */
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    /**
     * A opção fallback: false fala para o Next.js
     * não tentar executar essa rota se o arquivo
     * markdown para ela não existir
     */
    fallback: false,
  };
}

export default Page;
