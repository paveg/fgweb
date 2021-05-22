import React from 'react';
import { Layout } from '../components/layout';
import { InlineLink } from '../components/parts/inlineLink'

export const Home: React.FC = (): JSX.Element => {
  return <Layout pageTitle="Home">
    <>
      <InlineLink href={'/parts'}>Parts</InlineLink>
    </>
  </Layout>
}

export default Home
