
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const role = useSelector(state => state.auth.role)

  const menu = {
    'super-admin': ['dashboard','branches','users','plans'],
    'admin': ['dashboard','users','branches'],
    'sales': ['dashboard','orders'],
    'production': ['dashboard','jobs'],
    'client': ['dashboard','orders']
  }

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="mb-4 font-bold">Menu</h2>
      {menu[role]?.map((item) => (
        <Link key={item} to={`/admin/${item}`} className="block mb-2 capitalize">
          {item}
        </Link>
      ))}
    </div>
  )
}
