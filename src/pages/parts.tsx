import React from 'react'
import { Layout } from '../components/layout'
import { Button } from '../components/parts/buttons/button'

export const Parts: React.FC = (): JSX.Element => (
  <Layout pageTitle="Parts">
    <div className="w-full text-center mx-auto">
      <h2>Buttons</h2>
      <Button apperance="primary">Primary</Button>
      <Button apperance="primary" small>
        Small Primary
      </Button>
      <Button apperance="secondary">Secondary</Button>
      <Button apperance="neutral">Neutral</Button>
      <Button
        apperance="error"
        onClick={() => {
          return window.alert('alert opened.')
        }}
      >
        Alert
      </Button>
      <Button apperance="error" disabled>
        Disabled
      </Button>
    </div>
  </Layout>
)

export default Parts
