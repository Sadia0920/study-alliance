// import { StrictMode } from 'react'
import {StrictMode} from  'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import router from './route/router';
import AuthProvider from './provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <HelmetProvider>
  <RouterProvider router={router}></RouterProvider>
  </HelmetProvider>
  </QueryClientProvider>
  </AuthProvider>
  </StrictMode>,
)
