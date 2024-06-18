import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

interface Props {
  codeString: string;
}

const CodeSnippet = ({codeString}: Props) => {

  return (
    <SyntaxHighlighter language="typescript">
      {codeString}
    </SyntaxHighlighter>
  )
}

export default CodeSnippet;