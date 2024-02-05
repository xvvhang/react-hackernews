import { getSnapshot } from '../utils/firebase'

export async function fetchItemData(id) {
  try {
    const snapshot = await getSnapshot(`v0/item/${id}`)
    if (snapshot.exists()) return snapshot.val()
    console.log(`v0/item/${id}`, 'no data')
  } catch (error) {
    console.error(error)
  }
}

