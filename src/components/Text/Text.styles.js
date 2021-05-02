import styled from 'styled-components';
import colorSwitch from '../../utils/colorSwitch';

const TextStyles = styled.h1`
    width: 80%;
    font-size: 0.9em;
    color: ${(props) => colorSwitch(props)};
`;

export default TextStyles;
