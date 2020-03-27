const emptyObj = {}

/* tslint:disable no-any */
export function removeUndefinedProps<T>(obj: any): T {
  if (!obj) return emptyObj as T

  const newObj = obj
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined) {
      delete newObj[key]
    }
  })

  return newObj
}
