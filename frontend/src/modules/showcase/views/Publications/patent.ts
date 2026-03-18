export interface Patent {
  inventors: string
  title: string
  number: string
  date: string
}

export const data_patents: Patent[] = [
  {
    title: 'イメージング装置及び測定符号化装置',
    inventors: 'Jinjia Zhou, Jiaryu Peetakul',
    number: '特願2021-008179 (JP Patent)',
    date: '令和3年（2021年）1月21日',
  },
  {
    title: 'Motion Estimation Device',
    inventors: 'Satoshi Goto, Jinjia Zhou, and Dajiang Zhou',
    number: '14/041,965 (US Patent)',
    date: 'Sep. 2013',
  },
  {
    title: 'Motion Estimation Device and Program',
    inventors: 'Satoshi Goto, Jinjia Zhou, and Dajiang Zhou',
    number: 'NO.018967 (JP Patent)',
    date: 'Mar. 2013',
  },
  {
    title: 'Method for VLSI implementation of IDCT in video decoding',
    inventors: 'Hang Zhang, Jinjia Zhou, Yu Hong, and Peilin Liu',
    number: '200810041210.X (CN Patent)',
    date: 'Jul. 2008',
  },
  {
    title: 'Method for VLSI implementation of Intra prediction based on multiple video standards',
    inventors: 'Yu Hong, Jinjia Zhou, Hang Zhang, and Peilin Liu',
    number: '200810041209.7 (CN Patent)',
    date: 'Jul. 2008',
  },
]
