import logo from './logo.svg';
import './App.css';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client'




function App() {



  const APIURL = 'https://api.thegraph.com/subgraphs/name/guillermocalderon2021/marketplace-shoes/graphql'

const tokensQuery = `
  query {
    shoes(first: 5) {
        id
        token {
          id
        }
        price
        creator {
          id
        }
      }
  }
`

const client = new ApolloClient({
  uri: APIURL,
  fetchOptions: {
    mode: 'no-cors',
  },
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql(tokensQuery),
  })
  .then((data) => console.log('Subgraph data: ', data))
  .catch((err) => {
    console.log('Error fetching data: ', err)
  })





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
