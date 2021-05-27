import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'WIT', // e.g: 'Name | Developer'
  lang: 'ko', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '"사회가 필요로 하는 제품을 만들다"',
  name: 'WIT',
  subtitle: '안녕하세요 건국대학교 IT 동아리 ',
  subtitle2: '입니다',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'UI_Mark.jpg',
  paragraphOne: 'WIT는 건국대학교 IT동아리 입니다. 근데 또 이제 어플리케이션을 곁들인..',
  paragraphTwo: '2021년, WIT와 함께하기 위하여 열정적으로 지원해주셔서 감사합니다! ☺️ WIT가 본격적으로 시작하기 전, 여러분들에게 2021년 WIT에 대해 소개해드리겠습니다.',
  paragraphThree: 'WIT는 2020년에 만들어진 신생 IT 동아리로 사회가 필요로 하는 제품을 만든다는 비전 아래 활동을 이어나가고 있습니다. 이를 위해, 1. 스터디를 통해 역량을 키우고 2. 최종적으로 팀별 결과물을 내는 것을 목표로 하고 있습니다.',
  resume: 'https://www.notion.so/wit202103/2021-WIT-44006e1ec752438eae0871f68ce69c1c', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: '삼삼오오',
    info: '1인 가구를 위한 식품 공동구매 서비스. 떼를 지어 다니거나 무엇을 하고 있는 모양을 표현하는 사자성어이다. 1인 주거자들이 본 서비스를 통해 여러 사람들과의 공동구매를 진행하는 모습을 직관적으로 표현하고자 하였다.',
    info2: '제품명을 키워드로 검색을 진행한 후 검색 결과 필터링 기능을 통해 원하는 조건의 식자재를 검색할 수 있다. 제품명을 키워드로 검색을 진행한 후검색 결과 필터링 기능을 통해 원하는 조건의 식자재를 검색할 수 있다. ',
    url: '',
    repo: 'https://github.com/Hongji0611/FoodMate', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Hongji0611/FoodMate', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Hongji0611/FoodMate', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
