import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// export const metadata = {
//   title: 'All Posts',
//   description: 'Browse all posts by all users',
// };

export async function generateMetadata() {
  const posts = await getPosts();
  const numberOfPosts = posts.length;

  return {
    title: `Browse All Our ${numberOfPosts} Posts.`,
    description: 'Browse all posts by all users',
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
