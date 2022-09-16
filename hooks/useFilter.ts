export const useFilteredItems = (items: Array<any>, filter: Filter): Array<any> => {
    let arr = items
    for (const [key, value] of Object.entries(filter)) {
      if (value) {
        arr = arr.filter((itm) => itm[key] === value)
      }
    }
    return arr
  }
  
  export const useResetFilter = (filter: Filter): Filter => {
    for (const [key] of Object.entries(filter)) {
      filter[key] = null
    }
    return filter
  }
  
  export interface Filter {
    [key:string]: string
  }