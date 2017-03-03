import React from 'react'
import Book from '../components/book'

export default ({ books }) => (
    <ul className="list pl0 cf">
        { books.map(book => (
            <Book key={ book.id } image={ book.images[0].src } title={ book.title } author={ book.vendor } />
        ))}
    </ul>
)
