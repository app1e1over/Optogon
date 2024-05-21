import React from 'react';
import css from './style.module.css'

function Header({openAdd, save}) {
    return (
        <nav className={css.head}>
            <div className={css.item} onClick={openAdd}>Додати</div>
            <div className={css.item} onClick={save}>Зберегти</div>
        </nav>
    );
}

export default Header;