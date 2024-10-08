import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ element }) => {
  const { userAuth, isLoading } = useAuth()

  if (isLoading) {
    return
  }

  return userAuth ? element : <Navigate to='/login' replace />
}

export default ProtectedRoute
