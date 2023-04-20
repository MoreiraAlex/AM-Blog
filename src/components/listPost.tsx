import { PostCard } from 'components/index';

export default async function ListPost({ url }: { url: string }) {
  const response = await fetch(url);
  const data = await response.json();
  return (
    <>
      {/* @ts-expect-error */}
      {data.map((repo) => (
        <PostCard
          key={repo.id}
          author={repo.owner.login}
          date={repo.created_at}
          title={repo.name}
          col={false}
        >
          {repo.description}
        </PostCard>
      ))}
    </>
  );
}
