// 어떤 하나의 타입과 다른 하나의 타입을 연결할 때 사용
type PageInfo = {
  title: string;
};
type Page = 'home' | 'about' | 'contact';
const nav: Record<Page, PageInfo> = {
  home: { title: '집' },
  about: { title: 'about' },
  contact: { title: 'Contact' },
};
