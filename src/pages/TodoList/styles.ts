import styled from 'styled-components';
import colors from '../../utils/colors';

const TodoLists = {
    Container: styled.div`
        background-color: ${colors.darkSecondGray};
        min-height: 100vh;
    `,
    Header: styled.div`
        background-color: ${colors.darkGray};
        height: 25vh;
        width: 100%;
        display: flex;
        justify-content:center; 
        align-items:center;
    `,
    ImageHeader: styled.img.attrs(({src}) => ({
        alt: 'image-header',
        src: src
    }))`
        width: 126px;
        height: 48px;
    `,
    Content: styled.div`
        margin-left: 25%;
        margin-right: 25%;
        @media (max-width: 768px) {
            margin-left: 16px;
            margin-right: 16px;
        }
        padding-bottom: 24px;
        margin-top: -24px;
    `
}

export default TodoLists;
