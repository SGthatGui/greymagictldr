import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link href='/'>Home</Link>
        <br />
        <Link href='news'>News</Link>
      </nav>
    </div>
  );
};

export default Navbar;
