import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <div>FECoder</div>,
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
  sidebar: { defaultMenuCollapseLevel: 1, toggleButton: true },
};

export default config;
