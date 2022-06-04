import '../styles/globals.css'
import { AppContextProvider } from "../AppContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AppContextProvider>
  )
}

export default MyApp
