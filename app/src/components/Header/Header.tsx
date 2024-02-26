import React from 'react';

import MainToggle from '../../elements/MainToggle/MainToggle';

const Header = (props) => {
    const selected: boolean = props.selected;
    const currMonth: boolean = props.currMonth;

    return(
        <header className='Header'>
            <h1>Budget Simple!</h1>
            <MainToggle selected={selected} />
        </header>
    )
}

export default Header