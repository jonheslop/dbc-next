import React from 'react'

export default ({image,title,author}) => (
    <li className="fl w-50 w-third-m w-20-l border-box pa3">
        <figure className="ma0">
            <img src={ image } alt={`${ title } by ${ author }`} />
        </figure>
    </li>
)
