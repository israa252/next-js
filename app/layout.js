import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav style={{width:"100%",
      backgroundColor:"teal",
      fontSize:"30px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"}}>
        <Link style={{margin:"10px"}} href="/">Home</Link>
        <Link style={{margin:"10px"}} href="/posts">Posts</Link>
        <Link style={{margin:"10px"}} href="/articels">Articels</Link>
      </nav>
      {children}
      </body>
    </html>
  )
}
