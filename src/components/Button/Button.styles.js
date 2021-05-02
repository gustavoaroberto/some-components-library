import styled, { css } from 'styled-components';
import colorSwitch from '../../utils/colorSwitch';

const ButtonStyles = styled.button`
    padding: 8px 14px;
    width: ${(props) => (props.fullWidth ? '100%' : 'initial')};
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    color: ${(props) => props.theme.buttonTextColor};
    background-color: ${(props) => colorSwitch(props)};
    border: 1px solid ${(props) => colorSwitch(props)};
    ${(props) => props.outline && 'background-color: transparent;'}
    ${(props) => props.outline && `color: ${colorSwitch(props)};`}
    transition: all 0.4s;

    &:hover {
        ${(props) =>
            props.outline
                ? css`
                      color: ${props.theme.buttonTextColor};
                      background-color: ${colorSwitch(props)};
                      opacity: 0.8;
                  `
                : css`
                      opacity: 0.6;
                  `}
    }

    &:active {
        opacity: 1;
    }
`;

export default ButtonStyles;
