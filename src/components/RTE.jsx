import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="block mb-2 text-sm font-medium text-white">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="wclfs086u4y2idlzosde08mwsn1vpq0skltge6s9tqrqpqhd"
            initialValue={defaultValue}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount"
              ],
              toolbar:
                "undo redo | formatselect | bold italic underline | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | image media | code | fullscreen",
              content_style: "body { font-family: 'Inter', sans-serif; font-size: 16px; }"
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
