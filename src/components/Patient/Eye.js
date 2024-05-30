import React from 'react';

function Eye({title, eye}) {
    return (
        <span>
          {title}
          <ul>
            <li>Сфера: {eye.ball ? eye.ball : eye}</li>
            <li>Циліндер: {eye.cylinder}</li>
            <li>Вісь: {eye.axis}</li>
          </ul>
        </span>
    );
}

export default Eye;