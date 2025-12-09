import type { ExternalPost } from './posts.types'

export function postExternalToInternal({ thumbnail_url, ...post }: ExternalPost) {
  return {
    ...post,
    thumbnailUrl: thumbnail_url,
  }
}
