import { Link } from 'react-router-dom'

const NavItems = [
  { link: 'https://news.ycombinator.com/newsguidelines.html', name: 'Guidelines' },
  { link: 'https://news.ycombinator.com/faq.html', name: 'FAQ' },
  { link: 'https://github.com/HackerNews/API', name: 'API', blank: true },
  { link: 'https://news.ycombinator.com/security.html', name: 'Security' },
  { link: 'https://www.ycombinator.com/legal/', name: 'Legal', blank: true },
  { link: 'https://www.ycombinator.com/apply/', name: 'Apply to YC', blank: true },
  { link: 'mailto:hn@ycombinator.com', name: 'Contact' },
]

export default function TheFooter() {
  return (
    <footer className="border-t-4 border-t-orange-500 py-2 flex flex-col items-center text-sm text-gray-500">
      <ul className="flex justfiy-center gap-x-2">
        {
          NavItems.map((item) => (
            <li key={item.name} className="hover:text-black">
              <Link to={item.link}>{ item.name }</Link>
            </li>
          ))
        }
      </ul>
      <p className="mt-2">
        <span className="mr-2">Search:</span>
        <input type="text" className="border-2 border-orange-500 rounded" />
      </p>
    </footer>
  )
}
