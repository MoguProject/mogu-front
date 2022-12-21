import { axiosInstance } from 'axiosInstance';
import dynamic from 'next/dynamic';
import { MutableRefObject, useRef, useMemo, useState } from 'react';
import { UseFormSetValue, UseFormTrigger } from 'react-hook-form';
import { ReactQuillProps } from 'react-quill';
import { FormValues } from '../Community';

interface ReactQuillPropsType extends ReactQuillProps {
  forwardedRef: any;
}

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    return ({ forwardedRef, ...props }: ReactQuillPropsType) => (
      <RQ ref={forwardedRef} {...props} />
    );
  },
  { ssr: false },
);

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

const ReactCommunityQuillEditor = ({
  text,
  setValue,
  trigger,
}: {
  text: string;
  setValue: UseFormSetValue<FormValues>;
  trigger: UseFormTrigger<FormValues>;
}) => {
  const quillRef = useRef<any>();
  const [content, setContent] = useState(text || '');
  const onChangeValue = (text: string) => {
    console.log(text);
    setContent(text);
    setValue('content', content);
    trigger('content');
  };

  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    document.body.appendChild(input);

    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      console.log(file);

      const formData = new FormData();
      formData.append('multipartFile', file);

      const res = await axiosInstance.post(
        'http://localhost:3000/image/upload',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );
      console.log(res.data);

      const range = quillRef.current.getEditorSelection();
      quillRef.current.getEditor().insertEmbed(range.index, 'image', res.data);
      quillRef.current.getEditor().setSelection(range.index + 1);
      document.body.querySelector(':scope > input').remove();
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image'],
          ['clean'],
        ],
        handlers: { image: imageHandler },
      },
    }),
    [],
  );
  return (
    <ReactQuill
      forwardedRef={quillRef}
      modules={modules}
      placeholder={''}
      formats={formats}
      onChange={onChangeValue}
      value={content}
    />
  );
};

export default ReactCommunityQuillEditor;
