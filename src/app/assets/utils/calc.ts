export function addArray(arr: number[]) {
    let added: number = 0;
    arr.map(i => added = added + i)
    return added
}
  