import GUN from 'gun'
import 'gun/sea'
import 'gun/lib/radix'
import 'gun/lib/radisk'
import 'gun/lib/store'

const gun = GUN([
  'https://gun-manhattan.herokuapp.com/gun'
])

export default gun