/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

/*
  Node modules
*/
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// styles
import '@/index.css';

// component
import {App} from '@/App';
import { Sidebar } from '@/components/Sidebar';
import { FloatingMenu } from '@/components/FloatingMenu';
import { Profile } from '@/components/Profile';
import { ThemeToggle } from '@/components/ThemeToggle';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10">
      <ThemeToggle />
      <Sidebar/>
      <FloatingMenu />
      <Profile />
      <App />
    </div>
  </StrictMode>,
)
