import { ref } from 'vue'

interface Post {
  id: number
  title: string
  desc: string
  tags: string[]
  cover: string
  date: string
}
export function usePosts() {
  const posts = ref<Post[]>([
    {
      id: 1,
      title: '关于在下北泽红茶馆的深度调研',
      desc: '这就尴尬了，这种事情我怎么可能不知道呢？总之先点一杯非常新鲜的红茶吧。',
      tags: ['下北泽', '美食(?)'],
      cover: 'https://picsum.photos/id/1060/400/250', // 类似红茶的色调
      date: '2025-01-15',
    },
    {
      id: 2,
      title: '论声音响亮在面试中的重要性',
      desc: '作为一名学生，声音大一点不仅能体现精神面貌，还能让面试官感受到你的诚意。',
      tags: ['面试技巧', '咆哮系', '牡蛎'],
      cover: 'https://picsum.photos/id/433/400/250', // 象征热血和呐喊
      date: '2026-01-10',
    },
    {
      id: 3,
      title: '如何在炎炎夏日保持良好的心态',
      desc: '虽说天气很热，但只要保持平常心，就能像在海边一样感受到清凉（指水温）。',
      tags: ['夏日', '游泳'],
      cover: 'https://picsum.photos/id/124/400/250', // 海滩/泳池
      date: '2026-02-10',
    },
    {
      id: 4,
      title: '关于“目力”训练的进阶指南',
      desc: '当你看到不该看的东西时，眼神要犀利，甚至可以发出一些意义不明的咆哮。',
      tags: ['表情管理', '目力'],
      cover: 'https://picsum.photos/id/659/400/250', // 强调眼神的特写
      date: '2026-01-10',
    },
    {
      id: 5,
      title: '下个楼梯也能成为艺术：步法解析',
      desc: '这就是所谓的“王道征途”吗？每一步都走得异常沉稳且富有节奏感。',
      tags: ['运动', '步法'],
      cover: 'https://picsum.photos/id/1031/400/250', // 阶梯或道路
      date: '2026-03-01',
    },
    {
      id: 6,
      title: '三杯茶后的哲学思考',
      desc: '事已至此，与其纠结，不如大声喊出那句：我也想做啊！',
      tags: ['哲学', '热血'],
      cover: 'https://picsum.photos/id/883/400/250',
      date: '2026-03-15',
    },
  ])

  return { posts }
}
