import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { fetchItemData } from "../api/item"
import { dayfromNow } from "../utils/date"

export default function Comment(props) {
  const [comment, setComment] = useState({})

  const fetchData = async (id) => {
    const comment = await fetchItemData(id)
    setComment(comment)
  }

  useEffect(() => {
    fetchData(props.item)
  }, [])

  return (
    <div>
      <div className="flex items-center gap-x-2 text-xs text-gray-500">
        <Link to={`/user/${comment.by}`}>{ comment.by }</Link>
        <span>{ dayfromNow(comment.time) }</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: comment.text}} className="text-sm"></div>
      <ul className="border-l border-orange-200 pl-8 hover:border-orange-500">
        {
          comment.kids?.map((kid) => (
            <li key={kid} className="my-4">
              <Comment item={kid}></Comment>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

