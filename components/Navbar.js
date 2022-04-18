import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession()
  console.log({ session })
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href="#">NextAuth</a>
      </h1>
      <ul className='main-nav'>
        <li>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={'/dashboard'}>
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href={'/blog'}>
            <a>Blog</a>
          </Link>
        </li>

        {!session && (
          <li>
            <Link href={'/api/auth/signin'}>
              <a onClick={e => {
                e.preventDefault()
                signIn()
              }}>Sign in</a>
            </Link>
          </li>
        )}

        {session && (
          <li>
            <Link href={'/api/auth/signout'}>
              <a onClick={e => {
                e.preventDefault()
                signOut()
              }}>Sign out</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
