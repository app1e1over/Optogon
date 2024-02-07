import React from 'react';

function Header({openAdd, save}) {
    return (
        <nav>
            <div onClick={openAdd}>Додати</div>
            <div onClick={save}>Зберегти</div>
        </nav>
    );
}

export default Header;