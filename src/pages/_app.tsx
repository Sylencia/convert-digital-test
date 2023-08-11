import { ApolloProvider } from "@apollo/client";
import "tailwindcss/tailwind.css";
import { client } from "../utils/apolloClient";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
