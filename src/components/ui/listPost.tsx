import PostCard from './postCard';

interface Post {
  id: string;
  owner_id: string;
  parent_id: null;
  slug: string;
  title: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  owner_username: string;
  tabcoins: number;
}

export default async function ListPost({
  url,
  col,
  hero,
}: {
  url: string;
  col?: boolean;
  hero?: boolean;
}) {
  const response = await fetch(url);
  const data = await response.json();
  return (
    <>
      {data.map((repo: Post) => (
        <PostCard
          key={repo.id}
          author={repo.owner_username}
          category={repo.tabcoins}
          thumb={`https://www.tabnews.com.br/api/v1/contents/${repo.owner_username}/${repo.slug}/thumbnail`}
          date={repo.created_at}
          title={repo.title}
          col={col}
          hero={hero}
        />
      ))}
    </>
  );
}
