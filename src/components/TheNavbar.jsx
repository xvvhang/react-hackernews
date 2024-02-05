import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavItems = [
  { link: '/new', name: 'new' },
  { link: '/top', name: 'top' },
  { link: '/best', name: 'best' },
  { link: '/ask', name: 'ask' },
  { link: '/show', name: 'show' },
  { link: '/job', name: 'job' },
]

export default function TheNavbar() {
  const [active, setActive] = useState('')

  return (
    <nav className="bg-orange-500 px-2 py-1 flex items-center text-sm">
      <ul className="flex items-center gap-x-2">
        <li><Link to="/" className="font-bold">Hacker News</Link></li>
        {
          NavItems.map((item, index) => (
            <li key={index} className={["hover:text-white", (active === item.name ? "text-white" : "")].join(" ")}>
              <Link to={item.link}>{ item.name }</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
