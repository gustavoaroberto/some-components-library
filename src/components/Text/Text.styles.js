import styled from 'styled-components';
import colorSwitch from '../../utils/colorSwitch';

const TextStyles = styled.p`
    width: 80%;
    font-size: 1.2em;
    color: ${(props) => colorSwitch(props)};
    margin-bottom: 0 auto 20px auto;
`;

export default TextStyles;
