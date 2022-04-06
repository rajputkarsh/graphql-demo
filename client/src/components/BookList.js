import React from 'react'

import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
{
    books{
        id
        name
        genre    
        author{
            name
            age
        }
    }    
}
`;

function BookList() {

    const { loading, error, data } = useQuery(GET_BOOKS);
    
    return (
        <ul>
            {
                loading 
                ? "Loading..."  
                : data.books.map(book => (<li key={book.id}>{book.name}</li>))
            }
        </ul>
    )
}

export default BookList