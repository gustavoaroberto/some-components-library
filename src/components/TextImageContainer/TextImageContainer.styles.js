import styled from 'styled-components';

const TextImageContainerStyles = styled.div`
    width: 100%;
    min-height: 400px;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin-bottom: 20px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        button {
            width: 100%;
            margin-bottom: 20px;
        }
        @media (min-width: 830px) {
            flex-direction: row;
            width: initial;
            button {
                width: initial;

                &:last-of-type {
                    margin-left: 20px;
                }
            }
        }
    }
`;

export default TextImageContainerStyles;
