// `app/page.tsx` is the UI for the `/` URL
import { Metadata } from 'next'
import Link from 'next/link'
 
export const metadata: Metadata = {
  title: 'POSNEXT',
}

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}