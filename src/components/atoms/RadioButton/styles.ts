import styled from 'styled-components';
import colors from '../../../utils/colors';

const Radio = {
    Container : styled.div<{active: boolean}>`
        background-color: ${props => props.active ? colors.purplePrimary : colors.white};
        border: 3px solid ${colors.purplePrimary};
        height: 18px;
        width: 18px;
        border-radius: 100%;
        display: flex;
        justify-content:center; 
        align-items:center;
        cursor: pointer;
    `,
    ImageCheck: styled.img.attrs(({src}) => ({
        alt: 'image-check',
        src: src
    }))`
        width: 12px;
        height: 12px;
    `,
}

export default Radio;