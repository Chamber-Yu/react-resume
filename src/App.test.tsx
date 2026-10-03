import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('@uiw/react-codemirror', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: React.forwardRef((props: any, ref: any) =>
      React.createElement('textarea', {
        ref,
        value: props.value,
        onChange: () => {},
        'aria-label': '简历 Markdown 编辑器',
      })
    ),
  };
});

test('renders the resume editor actions', () => {
  render(<App />);
  expect(screen.getByText('文件')).toBeInTheDocument();
  expect(screen.getByText('导出 pdf')).toBeInTheDocument();
});
