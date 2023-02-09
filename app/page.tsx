import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.homepage}>
      <h1>{`{TL;DR}`}</h1>
      <h2 className='mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero totam error nostrum, quasi exercitationem minima
        quod voluptatibus eveniet cumque dolores consequatur quas atque assumenda vel perspiciatis? Inventore, nulla quo.
      </h2>
      <Link
        href={'/news'}
        className='btn btn-primary'
      >
        See more
      </Link>
    </main>
  );
}
