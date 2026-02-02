import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// 定义接口
export interface Post {
  id: number
  title: string
  desc: string
  tags: string[]
  cover: string
  date: string
  label?: string
}

// 定义纯粹的元数据接口 (不包含需要翻译的文本，但包含翻译所需的 Keys)
interface PostMetadata {
  id: number
  tagKeys: string[] // 这里存 key，而不是中文
  cover: string
  date: string
  label?: string
}

export function usePosts() {
  const { t } = useI18n()

  // 1. 定义元数据 (Metadata)
  // 这些数据是不随语言变化的，或者是图片的链接、日期、ID
  const rawPosts: PostMetadata[] = [
    {
      id: 1,
      tagKeys: ['shimokita', 'food'], // 对应 json 里的 tags key
      cover: 'https://picsum.photos/id/1060/400/250',
      date: '2025-01-15',
      label: 'tech',
    },
    {
      id: 2,
      tagKeys: ['interview', 'roar', 'mussel'],
      cover: 'https://picsum.photos/id/433/400/250',
      date: '2026-01-10',
    },
    {
      id: 3,
      tagKeys: ['summer', 'swimming'],
      cover: 'https://picsum.photos/id/124/400/250',
      date: '2026-02-10',
    },
    {
      id: 4,
      tagKeys: ['expression', 'eye_power'],
      cover: 'https://picsum.photos/id/659/400/250',
      date: '2026-01-10',
    },
    {
      id: 5,
      tagKeys: ['sports', 'footwork'],
      cover: 'https://picsum.photos/id/1031/400/250',
      date: '2026-03-01',
    },
    {
      id: 6,
      tagKeys: ['philosophy', 'hot_blood'],
      cover: 'https://picsum.photos/id/883/400/250',
      date: '2026-03-15',
    },
  ]

  // 2. 使用 computed 生成最终的 posts
  // 必须使用 computed，否则切换语言时，数据不会自动刷新
  const posts = computed<Post[]>(() => {
    return rawPosts.map((post) => ({
      id: post.id,
      // 动态拼接 key: post_list.1.title
      title: t(`post_list.${post.id}.title`),
      desc: t(`post_list.${post.id}.desc`),
      // 遍历 tagKeys，翻译每一个 tag
      tags: post.tagKeys.map((key) => t(`tags.${key}`)),
      cover: post.cover,
      date: post.date,
      label: post.label ? t(`tags.${post.label}`) : undefined,
    }))
  })

  return { posts }
}
