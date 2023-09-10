import styled from 'styled-components';
import colors from '../../../utils/colors';

const Inputs = styled.input<{variant?: 'small' | 'default'}>`
    flex: 1;
    margin-right: 16px;
    background-color: ${colors.darkSecondGray};
    border: 2px solid ${props => props.variant === 'small' ? 'transparent' : colors.darkGray};
    border-radius: 16px;
    padding: ${props => props.variant === 'small' ? '2px' : '12px'};
    color: ${colors.lightGray};
    font-size: 16px;
`;

export default Inputs