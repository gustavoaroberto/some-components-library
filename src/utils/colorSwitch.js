const colorSwitch = (props) => {
    switch (props.color) {
        case 'primary':
            return props.theme.primaryColor;
        case 'secondary':
            return props.theme.secondColor;
        case 'terciary':
            return props.theme.terciaryColor;
        case 'text':
            return props.theme.textColor;
        default:
            return 'red';
    }
};

export default colorSwitch;
