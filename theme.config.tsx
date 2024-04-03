import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <div>Codedoc</div>,
  project: {
    link: 'https://github.com/Levix0501/code-doc',
  },
  docsRepositoryBase: 'https://github.com/Levix0501/code-doc/tree/master',
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <title>{title}</title>
      </>
    );
  },
  editLink: { text: '编辑此页面' },
  feedback: { content: '问题反馈 →' },
  sidebar: { defaultMenuCollapseLevel: 1, toggleButton: true },
};

export default config;
