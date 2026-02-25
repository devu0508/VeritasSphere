import React from 'react'
import { LogoutBtn } from '../index'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container } from '../index'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ]

  return (
    <header className='bg-black text-white border-b border-gray-800'>
      <Container>
        <nav className='flex items-center h-16'>
          {/* Logo + Brand */}
          <Link to='/' className='flex items-center gap-3 mr-auto group'>
            <Logo width='44px' />
            <span className='text-white font-bold text-lg tracking-tight hidden sm:block'>
              VeritasSphere
            </span>
          </Link>
          {/* Nav links */}
          <ul className='flex items-center gap-1'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='px-4 py-2 text-sm font-medium text-gray-300 hover:text-white relative group transition-colors duration-200'
                  >
                    {item.name}
                    <span className='absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300'></span>
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='ml-2'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
