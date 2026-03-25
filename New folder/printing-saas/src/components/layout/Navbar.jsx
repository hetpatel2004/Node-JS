
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../features/theme/themeSlice'

export default function Navbar() {
  const dispatch = useDispatch()

  return (
    <div className="flex justify-between p-4 bg-white shadow">
      <h1>Dashboard</h1>
      <button onClick={() => dispatch(toggleTheme())}>Toggle</button>
    </div>
  )
}
