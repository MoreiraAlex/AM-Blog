import { title } from 'process';
import MiniPostCard from './miniPostCard';
import PostCard from './postCard';

interface MiniPost {
  id: string;
  slug: string;
  title: string;
  thumb: string;
  owner_username: string;
}

export default async function ListMiniPosts({ url }: { url: string }) {
  const response = await fetch(url);
  const data = await response.json();
  return (
    <>
      {data.map((repo: MiniPost) => (
        <MiniPostCard
          key={repo.id}
          title={repo.title}
          thumb={`https://www.tabnews.com.br/api/v1/contents/${repo.owner_username}/${repo.slug}/thumbnail`}
          link={repo.slug}
        />
      ))}
    </>
  );
}
