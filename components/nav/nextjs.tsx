import NavCards, { CardItemType } from '../nav-cards';

export const Nextjs = () => (
  <NavCards
    list={[
      {
        title: 'React',
        desc: '用于构建 Web 和原生交互界面的 JavaScript 库',
        icon: 'https://zh-hans.legacy.reactjs.org/favicon.ico',
        href: 'https://react.dev',
      },
      {
        title: 'Next.js',
        desc: '用于构建 Web 应用的 React 框架',
        icon: 'https://nextjs.org/favicon.ico',
        href: 'https://nextjs.org/',
      },
    ]}
  />
);

export const NextjsComponents = () => (
  <NavCards
    list={[
      {
        title: 'shadcn/ui',
        desc: '设计精美的组件，您可以将其复制并粘贴到您的应用程序中。无障碍。可定制。开源。',
        icon: 'https://ui.shadcn.com/favicon.ico',
        href: 'https://ui.shadcn.com/',
      },
    ]}
  />
);
