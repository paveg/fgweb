import React from 'react';
import { Layout } from '../components/layout';
import { InlineLink } from '../components/parts/inlineLink'
import { Counter } from '../components/parts/counter'

export const Home: React.FC = (): JSX.Element => {
  return <Layout pageTitle="Home">
    <Counter />

    <InlineLink href={'/parts'}>Parts</InlineLink>
  </Layout>
}

export default Home
