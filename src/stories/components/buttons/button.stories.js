import Buttonmodal from './button.html';
import '../../styles/main.scss'
export default {
    title: 'Components/Core/Buttonmodal',
    parameters: { layout: 'centered' },
};

export const Primary = () => {
    return <div dangerouslySetInnerHTML={{__html: Buttonmodal}}></div>;
};


