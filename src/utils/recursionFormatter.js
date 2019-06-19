import { templateLiteral } from '@babel/types'

const dataConverter = arr => {
  var tree = [],
    mappedArr = {},
    arrElem,
    mappedElem

  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i]
    mappedArr[arrElem.ID] = arrElem
    mappedArr[arrElem.ID]['children'] = []
  }
  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id]
      if (mappedElem.parentID) {
        mappedArr[mappedElem['parentID']]['children'].push(mappedElem)
      } else {
        tree.push(mappedElem)
      }
    }
  }
  return tree
}

let findAndDel = (arr, id) => {
  let newArray = arr.filter(res => {
    return res.ID !== id
  })

  if (newArray.length === arr.length) {
    newArray.children = arr.map(item => {
      if (item.children && item.children.length > 0) {
        item.children = findAndDel(item.children, id)
      }
      return item
    })
  }

  return newArray
  // return arr.some((item, index, ar) => {
  //   if (item.ID === id) {
  //     ar.splice(index, 1)
  //     return arr
  //   } else {
  //     return findAndDel(item.children, id)
  //   }
  // })
}

export { dataConverter, findAndDel }
