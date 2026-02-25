import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

// Import self-hosted TinyMCE core + plugins (no API key needed)
import 'tinymce/tinymce'
import 'tinymce/models/dom/model'
import 'tinymce/themes/silver'
import 'tinymce/icons/default'
import 'tinymce/skins/ui/oxide/skin.min.css'

// Import plugins
import 'tinymce/plugins/image'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/link'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/code'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/media'
import 'tinymce/plugins/table'

import 'tinymce/plugins/wordcount'

// Import content CSS for the editor iframe
import contentCss from 'tinymce/skins/content/default/content.min.css?raw'
import contentUiCss from 'tinymce/skins/ui/oxide/content.min.css?raw'

export default function RTE({ name, control, label, defaultValue = "" }) {

  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>
        {label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            licenseKey="gpl"
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              skin: false,
              content_css: false,
              content_style: [contentCss, contentUiCss, "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"].join('\n'),
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",

                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat",
            }}
            onEditorChange={onChange}
          />
        )}
      />

    </div>
  )
}
