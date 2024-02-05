import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchListData } from '../api/list'
import { dayfromNow } from '../utils/date'
import { shortenURL } from '../utils/url'

export default function NewsList() {
  const params = useParams()

  const [data, setData] = useState([])

  const fetchData = async (list) => {
    const data = await fetchListData(list)
    setData(data)
  }

  useEffect(() => {
    fetchData(params.list)
  }, [params])

  const padStart = (str) => String(str).padStart(2, '0')

  return (
    <ol className="mx-2">
      {
        data.map((item, index) => (
          <li key={item.id} className="my-1 flex items-start">
            <div className="mr-2 leading-6 text-sm text-gray-500">{ padStart(index + 1) }.</div>
            <div>
              <div className="flex items-center gap-x-1">
                <Link to={item.url || `/item/${item.id}`} className="leading-6 text-sm hover:underline hover:text-orange-500 cursor-pointer">{ item.title }</Link>
                { item.url && <span className="text-xs text-gray-500">(<a href={item.url} className="hover:underline">{ shortenURL(item.url) }</a>)</span> }
              </div>
              <div className="flex gap-x-2 items-center text-xs text-gray-500">
                <span>{ `${item.score} points` }</span>
                <span>by <Link to={ `/user/${item.by}` } className="hover:underline">{ item.by }</Link></span>
                <span>{ dayfromNow(item.item) }</span>
                { item.kids && <span><Link to={`/item/${item.id}`} className="hover:underline">{ `${item.kids.length} comments` }</Link></span> }
              </div>
            </div>
          </li>
        ))
      }
    </ol>
  )
}
