import { useContext } from 'react'
import { Context } from './Provider'
import CreateAccount from './components/login/CreateAccount'
import ForgotPassword from './components/login/ForgotPassword'
import Link from './components/link/Link'

export default function Modal() {
  const [context, dispatch] = useContext(Context)

  const renderContent = () => {
    switch(context.modal) {
      case 'register':
        return <CreateAccount />
      case 'forgot-password':
       return <ForgotPassword />
      case 'link':
       return <Link />
      default:
        return
    }
  }

  return (
    <div id="modal" className="modal" style={{
      display: context.modal ? 'block' : 'none'
    }}>
      <div id="content" className="content">
        {renderContent()}
      </div>
    </div>
  )
}