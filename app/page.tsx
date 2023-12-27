'use client'

import {redirect} from 'next/navigation';
import {useEffect} from 'react';

export default function Home() {
  useEffect(() => {
    redirect('/editor');
  }, [])

  return (
    <main className="">
      main
    </main>
  )
}
