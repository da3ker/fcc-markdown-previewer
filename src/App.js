import { useState } from 'react';
import marked from 'marked';
import './App.scss';

function App() {
  const [text, setText] = useState(`# Welcome to my React Markdown Previewer!
## This is a sub-heading...
This is how you make text **bold**
And this is how you make it _italic_ or **_italic bold_** if you want
You can also ~cross stuffs out~
There's also a way to make a [link](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley)
### [**_~Or you can just go crazy and combine it all~_**](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley)
Apart from those, you can also make an inline code: \`<div></div>\`
Or a code block:
\`\`\`
let x = 1;
let y = 2;
let z = x + y;
\`\`\`
> Or a Block Quote

You can also make a list:
- list 1
- list 2
- list 3

Or even a table:

Table 1 | Table 2 | Table 3
------------ | ------------- | -------------
Content 1 | Content 2 | Content 3
Content 1.1 | Content 2.1 | Content 3.1

![Sample Image](https://icon-library.com/images/react-icon/react-icon-13.jpg) **And lastly, an Image!**
`);
 
  const markdown = marked(text, {breaks: true});

  return (
    <div className="App">
      <header className="App-header">
        <div className="editor">
          <header><strong><i class="fas fa-edit"></i>Editor</strong></header>
          <textarea
          name="editor"
          id="editor"
          value={text}
          onChange={(event) => setText(event.target.value)}
          ></textarea>
        </div>
        <div className="preview">
          <header><strong><i class="fas fa-hashtag"></i> Preview</strong></header>
          <div
          dangerouslySetInnerHTML={{__html: markdown}}
          id="preview"></div>
        </div>
        <span id="da3ker">by da3ker</span>
      </header>
    </div>
  );
}

export default App;
