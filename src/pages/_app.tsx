import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ContenxtProvider } from '@/Contexts/CartContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps}: AppProps) {

    const queryClient = new QueryClient();
    return(
        
        <ContenxtProvider>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </ContenxtProvider>
                
      )
}
