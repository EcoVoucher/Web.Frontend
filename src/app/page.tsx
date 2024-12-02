'use client';

import { redirect } from 'next/navigation';

export default function LandingPage() {
  
  redirect('/home');
  return null;
}
