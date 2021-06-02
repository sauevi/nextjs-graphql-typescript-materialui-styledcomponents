import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'APOLLO_CLIENT_URL_GOES_HERE',
    cache: new InMemoryCache(),
});

export default client;
