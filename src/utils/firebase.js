import { initializeApp } from "firebase/app"
import { getDatabase, ref, get, child } from 'firebase/database'

const firebaseConfig = { databaseURL: "https://hacker-news.firebaseio.com" }
const firebaseApp = initializeApp(firebaseConfig)
const hackernewsDB = ref(getDatabase(firebaseApp))

export async function getSnapshot(path) {
  return await get(child(hackernewsDB, path))
}
