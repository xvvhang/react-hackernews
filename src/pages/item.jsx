import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchItemData } from "../api/item"
import { dayfromNow } from "../utils/date"
import { shortenURL } from "../utils/url"
import Comment from '../components/Comment'

export default function NewsItem() {
  const params = useParams()

  const [data, setData] = useState({})

  const fetchData = async (id) => {
    const data = await fetchItemData(id)
    setData(data)
  }

  useEffect(() => {
    fetchData(params.id)
  }, [params])

  return (
    <div className="mx-2 my-1">
      <section>
        <div className="flex items-cetner gap-x-2">
          <Link to={data.url || `/item/${data.id}`} className="leading-6 text-sm hover:underline hover:text-orange-500 cursor-pointer">{ data.title }</Link>
          { data.url && <span className="text-xs text-gray-500"><Link to={data.url} className="hover:underline">{ shortenURL(data.url) }</Link></span>}
        </div>
        <div className="flex gap-x-2 items-center text-xs text-gray-500">
          <span>{ `${data.score} points` }</span>
          <span>by <Link to={`/user/${data.by}`} className="hover:underline">{ data.by }</Link></span>
          <span>{ dayfromNow(data.time) }</span>
          { data.kids?.length && <span><Link to={`/item/${data.id}`} className="hover:underline">{ `${data.kids?.length} comments` }</Link></span> }
        </div>
      </section>
      <ul className="pl-8">
        {
          data.kids?.map((kid) => (
            <li key={kid} className="my-4">
              <Comment item={kid}></Comment>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
