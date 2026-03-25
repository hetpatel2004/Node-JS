import AppRoutes from './routes/AppRoutes'
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <AppRoutes />
    </div>
  );
}
// import AppRoutes from './routes/AppRoutes'
// import { useSelector } from 'react-redux'

// export default function App() {
//   const mode = useSelector((state) => state.theme.mode)

//   return (
//     <div className={mode === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-gray-100'}>
//       <AppRoutes />
//     </div>
//   )
// }
