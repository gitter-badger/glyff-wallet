import store from './index'
import bus from '../bus'

bus.on('gly-transfer', (tx) => {
  store.dispatch('accounts/glyTransfer', tx)
})

bus.on('shielding', (event) => {
  console.log('shielding')
})

bus.on('unshielding', (event) => {
  console.log('unshielding')
})

bus.on('shielded-transfer', (event) => {
  console.log('shielded-transfer')
})