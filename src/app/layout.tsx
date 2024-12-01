'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/templates/header/header';
import Footer from '@/components/templates/footer/footer';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Define as rotas onde o Header e o Footer não serão exibidos
  const excludedRoutes = ['/login', '/cadastro'];
  const shouldShowHeaderFooter = !excludedRoutes.includes(pathname);

  // Verifica se a rota é a página inicial
  const isHomePage = pathname === '/home';

  return (
    <html lang="pt">
      <body className={shouldShowHeaderFooter ? 'layout-body' : 'no-header-footer'}>
        {shouldShowHeaderFooter && <Header />}
        <main
          className={
            isHomePage
              ? 'home-background'
              : shouldShowHeaderFooter
              ? 'main-content'
              : 'no-header-footer'
          }
        >
          {children}
        </main>
        {shouldShowHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
