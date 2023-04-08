import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { ContextProvider } from './Components/utils/global.context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ContextProvider>
        </QueryClientProvider>
    </React.StrictMode>
);