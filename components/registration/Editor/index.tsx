import dynamic from 'next/dynamic';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { MDEditorProps } from '@uiw/react-md-editor';

export type EditorProps = MDEditorProps;

const MDEditor = dynamic<MDEditorProps>(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

const PostEditor = ({ ...rest }: MDEditorProps) => {
  return <MDEditor {...rest} />;
};

export default PostEditor;
