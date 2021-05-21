import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { Header } from '../components/header';

export const Home: React.FC = (): JSX.Element => (
  <>
    <Header />
    <div className="container mx-auto">
      <Head>
        <title>Funai Gaming Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main />
      <footer>footer</footer>
    </div>
  </>
)

export default Home
