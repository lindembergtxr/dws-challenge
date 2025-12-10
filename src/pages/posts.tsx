import { PostCard, usePosts } from '@/features/posts'

export function PostsPage() {
  const { posts } = usePosts()

  return (
    <div>
      <div
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 8, width: '100%' }}
      >
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
