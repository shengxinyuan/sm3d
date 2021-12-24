import { colorList } from '../const/design'

export function getTextureCname (texture_id) {
  let name = ''
  colorList.forEach(item => {
    if (item.id === texture_id) {
      name = item.nameCn
    }
  })
  return name
}
