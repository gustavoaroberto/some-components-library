import styled from 'styled-components';

const ClientsCarouselStyles = styled.div`
    img {
        width: 100%;
        padding: 10px;
    }

    .arrow {
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: all 0.4s;
        outline: none;

        &:hover {
            opacity: 0.6;
        }

        &:active {
            opacity: 0.8;
        }

        svg {
            width: 48px;
            height: 48px;
            color: ${(props) => props.theme.textColor};
        }
    }
`;

export default ClientsCarouselStyles;
