import { atom, selector } from 'recoil';

const countState = atom({
  key: 'recoil/count',
  default: 0,
})

export { countState }