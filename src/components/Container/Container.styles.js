import styled from 'styled-components';

const ContainerStyles = styled.div`
    background-image: url(${(props) => props.backgroundImage});
    background-color: ${(props) => props.backgroundColor};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 40px;

    div,
    img {
        width: 100%;
    }

    .image {
        order: 1;
    }

    .text {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 830px) {
        flex-direction: row;

        .image {
            order: initial;
        }

        .text {
            margin-bottom: none;
        }

        div {
            &:first-child {
                margin-right: 40px;
            }

            &:last-child {
                margin-left: 40px;
            }
        }
    }
`;

export default ContainerStyles;
