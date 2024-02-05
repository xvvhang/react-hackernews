import { getSnapshot } from '../utils/firebase.js'
import { fetchItemData } from './item.js'

export async function fetchListData(list) {
  try {
    const snapshot = await getSnapshot(`v0/${list}stories`)
    if (!snapshot.exists()) console.log('No data available')
    const items = snapshot.val()
    const data = await Promise.all(items.map(async (id) => {
      return await fetchItemData(id)
    }))
    return data.filter(item => item)
  } catch (error) {
    console.error(error)
  }
}

