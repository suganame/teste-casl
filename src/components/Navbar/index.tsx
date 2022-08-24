import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/usuario">Usuario</Link></li>
      <li><Link to="/fornecedor">Fornecedor</Link></li>
      <li><Link to="/financeiro">Financeiro</Link></li>
    </ul>
  )
}