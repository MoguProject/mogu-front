import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState, useMemo } from 'react';
import ReactQuill from 'react-quill';

const ReactQuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'align',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'width',
];

const PostEditor = () => {
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState('');

  // 이미지 넣는 코드
  const handleImage = () => {
    const input = document.createElement('input');
    const formData = new FormData();
    let url = '';

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        formData.append('image', file[0]);
        console.log(formData);
        try {
          // 백엔드 통신

          url = res.data.url;

          // 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드
          // 해당 DOM의 데이터가 필요하기에 useRef를 사용한다.
          const range = QuillRef.current?.getEditor().getSelection()?.index;
          if (range !== null && range !== undefined) {
            let quill = QuillRef.current?.getEditor();

            quill?.setSelection(range, 1);

            quill?.clipboard.dangerouslyPasteHTML(
              range,
              `<img src=${url} alt="이미지 태그가 삽입됩니다." />`,
            );
          }

          return { ...res, success: true };
        } catch (error) {
          const err = error as AxiosError;
          return { ...err.response, success: false };
        }
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ align: [] }],
          ['link', 'image', 'video'],
        ],
        handlers: {
          image: handleImage,
        },
      },
    }),
    [],
  );
  return (
    <>
      <ReactQuillWrapper
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={contents}
        onChange={setContents}
        theme="snow"
        modules={modules}
        formats={formats}
      />
    </>
  );
};

export default PostEditor;
