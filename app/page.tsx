import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.homepage}>
      <h1>{`Too Short; I'll Read`}</h1>
      <h2 className='mb-4'>
        Too Long; Didn`t Read. a quick overview or summary of the main points, so that people can understand the gist of the text
        without having to read the entire thing.
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
