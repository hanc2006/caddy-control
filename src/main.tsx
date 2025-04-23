import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './app/(ui)/layout' // We'll adapt this layout
import LoginPage from './app/(ui)/(public)/login/page' // Adapt this page
import ProtectedPage from './app/(ui)/(protected)/page' // Adapt this page
import ProtectedLayout from './app/(ui)/(protected)/layout' // Adapt this layout
import PublicLayout from './app/(ui)/(public)/layout' // Adapt this layout

// Import global styles - ensure globals.css is compatible or adjust as needed
import './app/(ui)/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RootLayout> {/* This layout provides global context like QueryClient, Toaster */}
        <Routes>
           {/* Public Routes */}
           <Route element={<PublicLayout />}>
             <Route path="/login" element={<LoginPage />} />
             {/* Add other public routes here */}
           </Route>

           {/* Protected Routes */}
           <Route element={<ProtectedLayout />}>
              <Route path="/" element={<ProtectedPage />} />
              {/* Add other protected routes here, e.g., /api-keys */}
              {/* Example: <Route path="/api-keys" element={<ApiKeysPage />} /> */}
           </Route>

           {/* Add a 404 or redirect route if needed */}
           {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </RootLayout>
    </BrowserRouter>
  </React.StrictMode>,
)
