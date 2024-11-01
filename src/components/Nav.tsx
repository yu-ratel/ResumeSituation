import Link from 'next/link';

async function Nav() {
  return (
    <section>
      <nav className="m-6 flex h-[10%] justify-between">
        <Link href={'/'}>취뽀</Link>
        <Link href={'/login'}>Login</Link>
      </nav>
      <hr />
    </section>
  );
}

export default Nav;
