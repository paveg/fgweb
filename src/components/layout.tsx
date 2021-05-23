import Head from 'next/head'
import { Header } from './header'
import React from 'react'
import { Container } from './container'
import { Footer } from './footer'

type Props = {
  pageTitle: string
}

export const Layout: React.FC<Props> = ({
  pageTitle,
  children,
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>Funai Gaming Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <h1>{pageTitle}</h1>
        {children}
      </Container>
      <Footer />
    </>
  )
}
