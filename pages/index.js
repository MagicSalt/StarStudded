import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>StarStudded</title>
        <meta name="description" content="Movies with Friends" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img
          src="/background.jpeg"
          alt="StarStudded Movies Backgound"
          className={styles.mainBackground} />
        <section className={styles.mainText}>
          <h1>Welcome to StarStudded</h1>
          <h3>Make sharing movies with your friends fun.</h3>
          <div className='mt-4'>
            <Link href="/login" className="btn btn-primary me-4" type="button">Sign in</Link>
            <Link href="/register" className="btn btn-primary" type="button">Sign Up</Link>
          </div>
        </section>
      </main>
    </>
  );
}
