import styled from 'styled-components';

const ClientsCarouselStyles = styled.div`
    img {
        width: 100%;
        padding: 0 10px;
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
            width: 24px;
            height: 24px;
            color: ${(props) => props.theme.textColor};
        }
    }
`;

export default ClientsCarouselStyles;
