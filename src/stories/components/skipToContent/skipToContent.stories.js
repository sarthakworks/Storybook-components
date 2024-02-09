import skipToContent from './skipToContent.html';
import ReactHtmlParser from 'react-html-parser';
import '../../styles/main.scss'
export default {
    title: 'Components/Core/skipToContent',
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs'],
};

export const Primary = (args) => {
    return <div>{ReactHtmlParser(skipToContent)}</div>;
    // return <div dangerouslySetInnerHTML={{ __html: skipToContent }}></div>;
};
