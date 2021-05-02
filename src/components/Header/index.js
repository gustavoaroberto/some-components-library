import React, { useState } from 'react';
import HeaderStyles from './Header.styles';
import { ReactComponent as MenuIcon } from '../../icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

export default function Header({ logo, menu }) {
    const [open, setOpen] = useState(false);

    const handleMenuButton = () => {
        setOpen(!open);
    };
    return (
        <HeaderStyles open={open}>
            <div>
                <h1>
                    <a href='/'>
                        <img src={logo} alt={logo} />
                    </a>
                </h1>
                <nav>
                    <ul>
                        {menu.map((el) => (
                            <li>
                                <a href={el.url}>{el.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button onClick={handleMenuButton}>{open ? <CloseIcon /> : <MenuIcon />}</button>
            </div>
        </HeaderStyles>
    );
}
