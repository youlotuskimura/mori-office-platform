// HILLS ONE モックアップ用のダミーデータ
// 構成検討用のプレースホルダ。文言はすべて意味のないダミー（lorem ipsum）です。

export type Role = 'worker' | 'admin'

export const properties = [
  {
    name: 'Lorem ipsum dolor sit',
    area: '000 - 0,000 lorem',
    feature: 'Lorem ipsum dolor sit amet, consectetur.',
    vacancy: 'Lorem ipsum',
    tag: 'LOREM',
  },
  {
    name: 'Lorem ipsum amet',
    area: '000 - 0,000 lorem',
    feature: 'Sed do eiusmod tempor incididunt ut labore.',
    vacancy: 'Lorem ipsum',
    tag: 'IPSUM',
  },
  {
    name: 'Dolor sit amet',
    area: '000 - 0,000 lorem',
    feature: 'Ut enim ad minim veniam quis nostrud.',
    vacancy: 'Lorem ipsum',
    tag: '',
  },
]

export const cases = [
  { company: 'Lorem ipsum', metric: 'Lorem ipsum dolor', value: '+00%', note: 'Lorem ipsum dolor sit amet' },
  { company: 'Dolor sit', metric: 'Consectetur adipiscing', value: '+00%', note: 'Sed do eiusmod tempor incididunt' },
  { company: 'Amet elit', metric: 'Lorem ipsum dolor', value: '−00%', note: 'Ut labore et dolore magna' },
]

export const stats = [
  { label: 'Lorem ipsum', value: '0,000+' },
  { label: 'Dolor sit amet', value: '00,000+' },
  { label: 'Consectetur elit', value: '000+' },
  { label: 'Adipiscing sed', value: '00%' },
]

export const archives = [
  { title: 'Lorem ipsum dolor sit amet consectetur', speaker: 'Lorem ipsum 00', len: '00 min', tag: 'LOREM', progress: 40 },
  { title: 'Sed do eiusmod tempor incididunt ut labore', speaker: 'Lorem × ipsum 0', len: '00 min', tag: 'IPSUM', progress: 0 },
  { title: 'Ut enim ad minim veniam quis nostrud', speaker: 'Lorem ipsum dolor', len: '00 min', tag: 'DOLOR', progress: 100 },
  { title: 'Duis aute irure dolor in reprehenderit', speaker: 'Lorem ipsum sit', len: '00 min', tag: 'AMET', progress: 0 },
]

export const matches = [
  { company: 'Lorem', want: 'Lorem ipsum dolor sit amet consectetur', tags: ['lorem', 'ipsum'], status: 'Lorem' },
  { company: 'Ipsum', want: 'Sed do eiusmod tempor incididunt ut labore', tags: ['dolor', 'amet'], status: 'Ipsum' },
  { company: 'Dolor', want: 'Ut enim ad minim veniam quis nostrud', tags: ['elit', 'sed'], status: 'Lorem' },
]

export const feedItems = [
  { user: 'Lorem ipsum', group: '#lorem_ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '00 min' },
  { user: 'Dolor sit', group: '#dolor_sit', text: 'Sed do eiusmod tempor incididunt ut labore.', time: '00 min' },
  { user: 'Amet elit', group: '#amet_elit', text: 'Ut enim ad minim veniam quis nostrud exercitation.', time: '00 min' },
]

export const lunchMatches = [
  { name: 'Lorem I.', dept: 'Lorem ipsum dolor', common: 'Lorem ipsum: dolor / sit amet' },
  { name: 'Ipsum D.', dept: 'Dolor sit amet', common: 'Lorem ipsum: consectetur / elit' },
]

export const workerQuickActions = [
  { icon: '🗓️', label: 'Lorem ipsum' },
  { icon: '🍱', label: 'Dolor sit' },
  { icon: '🎟️', label: 'Amet elit' },
  { icon: '🎨', label: 'Consectetur' },
]

export const adminQuickActions = [
  { icon: '📊', label: 'Lorem ipsum' },
  { icon: '👥', label: 'Dolor sit' },
  { icon: '🏢', label: 'Amet elit' },
  { icon: '🧾', label: 'Consectetur' },
]

export const healthScores = [
  { dept: 'Lorem', score: 78, trend: '+0' },
  { dept: 'Ipsum', score: 71, trend: '+0' },
  { dept: 'Dolor', score: 84, trend: '+0' },
  { dept: 'Amet', score: 69, trend: '−0' },
]

export const recommendations = [
  { icon: '☀️', title: 'Lorem ipsum dolor sit amet consectetur', cat: 'Lorem' },
  { icon: '🎤', title: 'Sed do eiusmod tempor incididunt ut labore', cat: 'Ipsum' },
  { icon: '🪑', title: 'Ut enim ad minim veniam quis nostrud', cat: 'Dolor' },
]
