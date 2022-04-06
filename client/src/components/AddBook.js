import React, { useState } from 'react'

import { gql, useQuery, useMutation } from '@apollo/client';

const GET_AUTHORS = gql`
{
    authors{
        id
        name
        age
    }   
}
`;

const ADD_BOOK = gql`
        mutation($name: String!, $genre: String!, $author: ID!){
            addBook(name: $name, genre: $genre, authorId: $author ){
                name
                genre	
                author{
                name
                age
                }
            }
        }        
        `

function AddBook() {
    
    const { loading, data, error } = useQuery(GET_AUTHORS)
    const [bookName, setBookName] = useState("")
    const [bookGenre, setBookGenre] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")

    const [mutateFunction, { mutation_data, mutation_loading, mutation_error }] = useMutation(ADD_BOOK, {
        variables: {
            name: bookName,
            genre: bookGenre,
            author: bookAuthor
        }
    })

    const showAuthors = () => {
        return data.authors.map(author => (<option value={author.id} key={author.id} >{`${author.name} - ${author.age}`}</option>))
    }

    if(loading){
        return (
            <h1>Loading... Please wait</h1>
        )
    }
    else{
        return (
            <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input type="text"value={ bookName } onChange={(e) => { setBookName(e.target.value) }} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" value={ bookGenre } onChange={(e) => { setBookGenre(e.target.value) }} />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e) => { setBookAuthor(e.target.value) }}>
                        <option key="0" value="0">Select Author</option>
                        {
                            showAuthors()
                        }
                    </select>
                </div>
                <button onClick={(e) => { e.preventDefault(); mutateFunction().then(alert("data added")) }}>+</button>
    
            </form>
        )
    }
}

export default AddBook