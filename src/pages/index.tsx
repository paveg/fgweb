import 'tailwindcss/tailwind.css'
import React from 'react';
import { Layout } from '../components/layout';
import { InlineLink } from '../components/parts/inlineLink'

export const Home: React.FC = (): JSX.Element => (
  <Layout pageTitle="Home">
    <InlineLink href={'/parts'}>Parts</InlineLink>
  </Layout>
)

export default Home
