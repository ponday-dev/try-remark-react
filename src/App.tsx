import React from 'react';
import './App.css';
import { Markdown } from './markdown';

const md = `# Hello, World`;

const App: React.FC = () => {
  return (
    <Markdown raw={md} />
  );
}

export default App;
