import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// 定义接口
export interface TypePost {
  id: number
  title: string
  desc: string
  cover: string
  date?: string | Date
  tags?: string[]
  path?: string
  label?: string
  content?: TypeContent[]
}

interface TypeContent {
  id: number
  type: string
  listItems?: TypeContentList[]
  content?: string
  title?: string
}

interface TypeContentStructure {
  type: string
  listItems?: TypeContentList[]
  contentKey?: string
  titleKey?: string
}

interface TypeContentList {
  labelKey: string
  descKey: string
  label?: string
  desc?: string
}

// 定义纯粹的元数据接口 (不包含需要翻译的文本，但包含翻译所需的 Keys)
interface PostMetadata {
  id: number
  tagKeys: string[] // 这里存 key，而不是中文
  cover: string
  date: string
  labelKey?: string
  contentStructure?: TypeContentStructure[]
}

export function usePosts() {
  const { t } = useI18n()

  // 1. 定义元数据 (Metadata)
  // 这些数据是不随语言变化的，或者是图片的链接、日期、ID
  const rawPosts: PostMetadata[] = [
    {
      id: 1,
      tagKeys: ['tech', 'vue'], // 对应 json 里的 tags key
      cover: 'https://picsum.photos/id/60/400/250',
      date: '2026-02-02',
      contentStructure: [
        {
          type: 'intro',
          contentKey: 'intro',
        },
        {
          type: 'section',
          titleKey: 'h2_1',
          contentKey: 'p_1',
        },
        {
          type: 'section',
          titleKey: 'h2_2',
          listItems: [
            { labelKey: 'li_1_label', descKey: 'li_1_desc' },
            { labelKey: 'li_2_label', descKey: 'li_2_desc' },
            { labelKey: 'li_3_label', descKey: 'li_3_desc' },
          ],
        },
        {
          type: 'quote',
          contentKey: 'quote',
        },
        {
          type: 'note',
          contentKey: 'footer_note',
        },
      ],
    },
    {
      id: 2,
      tagKeys: ['tech', 'tailwind', 'pinia'],
      cover: 'https://picsum.photos/id/160/400/250',
      date: '2026-01-23',
      labelKey: 'original',
      contentStructure: [
        {
          type: 'intro',
          contentKey: 'intro',
        },
        {
          type: 'section',
          titleKey: 'h2_1',
          contentKey: 'p_1',
        },
        {
          type: 'section',
          titleKey: 'h2_2',
          listItems: [
            { labelKey: 'li_1_label', descKey: 'li_1_desc' },
            { labelKey: 'li_2_label', descKey: 'li_2_desc' },
            { labelKey: 'li_3_label', descKey: 'li_3_desc' },
          ],
        },
        {
          type: 'note',
          contentKey: 'footer_note',
        },
      ],
    },
    {
      id: 3,
      tagKeys: ['tech', 'github_actions', 'aliyun'],
      cover: 'https://picsum.photos/id/201/400/250',
      date: '2026-03-12 16:14:00',
      contentStructure: [
        {
          type: 'intro',
          contentKey: 'intro',
        },
        {
          type: 'section',
          titleKey: 'h2_1',
          contentKey: 'p_1',
        },
        {
          type: 'section',
          titleKey: 'h2_4', // 新增：deploy.yml 编写部分
          contentKey: 'p_3',
        },
        {
          type: 'section',
          titleKey: 'h2_2',
          listItems: [
            { labelKey: 'li_1_label', descKey: 'li_1_desc' },
            { labelKey: 'li_2_label', descKey: 'li_2_desc' },
            { labelKey: 'li_3_label', descKey: 'li_3_desc' },
          ],
        },
        {
          type: 'section',
          titleKey: 'h2_3',
          contentKey: 'p_2',
        },
        {
          type: 'note',
          contentKey: 'footer_note',
        },
      ],
    },
    {
      id: 4,
      tagKeys: ['tech', 'nginx', 'linux'],
      cover: 'https://picsum.photos/id/160/400/250',
      date: '2026-03-12 15:14:00',
      contentStructure: [
        {
          type: 'intro',
          contentKey: 'intro',
        },
        {
          type: 'section',
          titleKey: 'h2_1',
          contentKey: 'p_1',
        },
        {
          type: 'section',
          titleKey: 'h2_2',
          listItems: [
            { labelKey: 'li_1_label', descKey: 'li_1_desc' },
            { labelKey: 'li_2_label', descKey: 'li_2_desc' },
          ],
        },
        {
          type: 'section',
          titleKey: 'h2_3',
          contentKey: 'p_2',
        },
        {
          type: 'note',
          contentKey: 'footer_note',
        },
      ],
    },
    // {
    //   id: 5,
    //   tagKeys: ['sports', 'footwork'],
    //   cover: 'https://picsum.photos/id/1031/400/250',
    //   date: '2026-03-01',
    // },
    // {
    //   id: 6,
    //   tagKeys: ['philosophy', 'hot_blood'],
    //   cover: 'https://picsum.photos/id/883/400/250',
    //   date: '2026-03-15',
    // },
  ]

  const posts = computed<TypePost[]>(() => {
    const sortedRawPosts = [...rawPosts].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    // 2. 映射为带翻译的数据
    return sortedRawPosts.map((post) => ({
      id: post.id,
      title: t(`post_list.${post.id}.title`),
      desc: t(`post_list.${post.id}.desc`),
      tags: post.tagKeys,
      cover: post.cover,
      date: post.date,
      label: post.labelKey ? t(`tags.${post.labelKey}`) : undefined,
      content: (post.contentStructure ?? []).map((item, index) => ({
        id: index + 1,
        type: item.type,
        // 根据是否有对应的 Key 来执行翻译
        title: item.titleKey ? t(`post_list.${post.id}.content.${item.titleKey}`) : undefined,
        content: item.contentKey ? t(`post_list.${post.id}.content.${item.contentKey}`) : undefined,
        listItems: item.listItems?.map((li, index) => ({
          ...li,
          id: index + 1,
          label: t(`post_list.${post.id}.content.${li.labelKey}`),
          desc: t(`post_list.${post.id}.content.${li.descKey}`),
        })),
      })),
    }))
  })

  return { posts }
}
