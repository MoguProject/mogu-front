import { axiosInstance } from 'axiosInstance';
import dynamic from 'next/dynamic';
import { useRef, useMemo, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ReactQuillProps } from 'react-quill';
import { SetterOrUpdater } from 'recoil';
import styled from 'styled-components';

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

const ReactQuillEditor = ({
  value,
  setValue,
}: {
  value: string;
  setValue: SetterOrUpdater<string>;
}) => {
  const quillRef = useRef<any>();
  const onChangeValue = (content: string) => {
    console.log(content);
    setValue(content);
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
    <ReactQuillWrapper
      forwardedRef={quillRef}
      modules={modules}
      placeholder={''}
      formats={formats}
      onChange={onChangeValue}
      value={value}
    />
  );
};

const ReactQuillWrapper = styled(ReactQuill)`
  width: 100%;
  height: 600px;
  padding: 36px 0;
`;

export default ReactQuillEditor;
