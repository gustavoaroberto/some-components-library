import styled from 'styled-components';
import colorSwitch from '../../utils/colorSwitch';

const TitleStyles = styled.h1`
    font-size: 1.6em;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
    color: ${(props) => colorSwitch(props)};
`;

export default TitleStyles;
