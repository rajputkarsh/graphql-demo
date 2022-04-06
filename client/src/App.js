import BookList from "./components/BookList";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AddBook from "./components/AddBook";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Books</h1>
        <BookList></BookList>
        <br /><br /><br /><br />

        <h1>Add new Book</h1>
        <AddBook></AddBook>

      </div>      
    </ApolloProvider>
  );
}

export default App;
