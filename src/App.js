import logo from './logo.svg';
import './App.css';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

function App() {


  let cuenta='0x1665d808030a6cbc1def001343cdb37f80e85ee4'
  const APIURL = 'https://api.thegraph.com/subgraphs/name/guillermocalderon2021/marketplace-shoes'

const tokensQuery = `
{
  account(id:"${cuenta}"){
    role
    }
  }
`
const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

console.log(tokensQuery);
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
