import React from 'react'
import './App.css';
import {data} from'./bookList';
import Book from './Book'

const App = () => {
   return (
       <section className='booklist'>
         {data.map((book)=> {
           return  <Book key= {book.id} {...book}></Book>
           // return  <Book key= {book.id} book = {book}></Book> //can do like this
         })}
     </section>
     )
   }

   export default App;