import { countState } from '../../states'
import { useRecoilState } from 'recoil'
import { Button } from './button'
import { InlineLink } from './inlineLink'
import React from 'react'

export const Counter = () => {
  const [count, setCount] = useRecoilState(countState)

  return <div className="mt-3">
    <p><InlineLink href="https://github.com/facebookexperimental/Recoil">Recoil</InlineLink> Sample</p><br />
    <span className="ml-3">count: {count}</span><br />
    <Button apperance="primary" onClick={() => setCount((c) => c + 1)}>count up</Button>
  </div>
}
