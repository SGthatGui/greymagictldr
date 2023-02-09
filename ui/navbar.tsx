import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link href='/'>Home</Link>
        <br />
        <Link href='news'>News</Link>
        <br />
        <Link href='jokes'>Jokes</Link>
      </nav>
    </div>
  )
}

export default Navbar
