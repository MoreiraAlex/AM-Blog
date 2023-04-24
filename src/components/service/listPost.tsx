import PostCard from '../ui/postCard';

interface Post {
  id: string;
  owner_id: string;
  slug: string;
  title: string;
  created_at: string;
  owner_username: string;
  tabcoins: number;
  link: string;
}

export default async function ListPost({
  url,
  col,
  hero,
  removeFirst,
  removeLast,
}: {
  url: string;
  col?: boolean;
  hero?: boolean;
  removeFirst?: boolean;
  removeLast?: boolean;
}) {
  const response = await fetch(url);
  const data = await response.json();

  if (removeFirst) {
    data.shift();
  } else if (removeLast) {
    data.pop();
  }

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
          link={`https://www.tabnews.com.br/${repo.owner_username}/${repo.slug}`}
        />
      ))}
    </>
  );
}
