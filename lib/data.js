const items = [
  {
    id: '1',
    url: 'https://news.ycombinator.com/',
    title: 'Hacker News',
    description: 'News for hackers.',
    thumbnail: 'https://news.ycombinator.com/favicon.ico',
    date: new Date(),
    type: 'article',
    owner: 'nick',
    read_nick: true,
    read_becca: false,
    comment_nick: 'News for hackers.',
    comment_becca: ''
  },
  {
    id: '2',
    url: 'https://vimeo.com/184970801',
    title: 'The Confluence',
    description: 'This short documentary explores how the physical landscapes of the Grand Canyon shape the cultural, emotional and spiritual landscapes of the Navajo people who inhabit…',
    thumbnail: 'https://i.vimeocdn.com/video/594620564_1280x720.webp',
    date: new Date(),
    type: 'video',
    owner: 'becca',
    read_nick: false,
    read_becca: true,
    comment_nick: '',
    comment_becca: 'A beautiful short film that my mentor sent me and that captures a lot of the things we have talked about in my Native American class about Navajo life ways.'
  }
];

module.exports = items;
