import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CodeBlock from '@theme/CodeBlock';

const Example = ({ language, title, filename }) => {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;


  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => {
        const Util = require('@site/src/classes/Util').Util;
        const fileContent = Util.readFile(filename, baseUrl);
        return (
          <CodeBlock language={language} title={title}>
            {fileContent}
          </CodeBlock>
        );
      }}
    </BrowserOnly>
  );
};

export default Example;