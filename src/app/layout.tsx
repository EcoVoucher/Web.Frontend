'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import NavBar from '../components/templates/navBar/NavBar';
import Footer from '../components/templates/footer/footer';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Define as rotas onde o NavBar e o Footer não serão exibidos
  const excludedRoutes = ['/login', '/cadastro'];
  const shouldShowNavBarFooter = !excludedRoutes.includes(pathname);

  // Define a classe do main de acordo com a rota
  const mainClassName = shouldShowNavBarFooter
    ? (pathname === '/home' ? 'home-background' : 'default-background')
    : 'no-header-footer';

  return (
    <html lang="pt">
      <body className={shouldShowNavBarFooter ? '' : 'no-header-footer'}>
        {shouldShowNavBarFooter && (
          <header className="header">
            <NavBar />
          </header>
        )}
        <main className={mainClassName}>
          {children}
        </main>
        {shouldShowNavBarFooter && <Footer />}
      </body>
    </html>
  );
}
