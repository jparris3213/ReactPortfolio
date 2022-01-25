import './App.css';
//Import Apollo Components to render pages
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

//Page Import

import Navigation from "./pages/Nav";
import Home from "./pages/Home";
import Media from "./pages/Media"
import Contact from "./pages/contact";
import Development from "./pages/Development"


// making GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route exact path="/media" element = {<Media />}/>
          <Route exact path="/contact" element = {<Contact/>}/>
          <Route exact path="/development" element = {<Development />}/>
          <Route path="*" element={<Home />} />

        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
