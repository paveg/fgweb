import 'tailwindcss/tailwind.css'
import React from 'react';
import { Layout } from '../components/layout';
import { InlineLink } from '../components/parts/inlineLink';
import { Button } from '../components/parts/button';

export const Parts: React.FC = (): JSX.Element => (
  <Layout pageTitle="Parts" >
    <div className="w-full text-center mx-auto">
      <h2>Buttons</h2>
      <Button apperance="primary">Primary</Button>
      <Button apperance="secondary">Secondary</Button>
      <Button apperance="neutral">Neutral</Button>
      <Button apperance="error" onClick={
        () => { return window.alert('alert opened.') }
      }>Alert</Button>
    </div>
    <InlineLink href={'/'}>Home</InlineLink>
  </Layout>
)

export default Parts
