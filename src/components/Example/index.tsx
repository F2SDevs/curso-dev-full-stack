import { Util } from '@site/src/classes/Util';
import CodeBlock from '@theme/CodeBlock';

const Example = ({ language, title, filename }) => {

  const fileContent = Util.readFile(filename)
  
  return (

    <CodeBlock language={language} title={title}>
      {fileContent}
    </CodeBlock>

  );
};

export default Example;