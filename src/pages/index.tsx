import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { Header } from '../components/header';
import React from 'react';
import { Button } from '../components/button';

export const Home: React.FC = (): JSX.Element => (
  <>
    <Header />
    <div className="container mx-auto">
      <Head>
        <title>Funai Gaming Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button apperance="primary">Primary</Button>
        <Button apperance="secondary">Secondary</Button>
        <Button apperance="error" onClick={
          () => { return window.alert('alert opened.') }
          }>Alert</Button>
      </main>
      <footer />
    </div>
  </>
)

export default Home
