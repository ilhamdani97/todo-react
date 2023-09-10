import styled from 'styled-components';
import colors from '../../../utils/colors';

const List = {
    Container: styled.div`
        margin-top: 24px;
    `,
    Info: {
        Container: styled.div`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        `,
        ContainerTotal:  styled.div`
            display: flex;
            flex-direction: row;
            align-content: center;
            align-items: center;
            margin-right: 32px;
        `,
        ContainerComplete:  styled.div`
            display: flex;
            flex-direction: row;
            align-content: center;
            align-items: center;
            margin-left: 16px;
        `,
        Text: styled.text`
            font-size: 14px;
            font-weight: 700;
            margin-right: 8px;
            color: ${colors.lightGray}
        `,
        ContainerValue: styled.div`
            display: flex;
            padding: 4px 10px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: ${colors.darkGray};
            border-radius: 10px;

        `,
        TextValue: styled.text`
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            color: ${colors.lightGray}
        `
    }
}

export default List;