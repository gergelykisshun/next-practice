import React, { ReactElement } from 'react'

type Props = {
    children: ReactElement
}

const Layout = ({children}: Props) => {
  return (
      <>
        <nav>My Navbar</nav>
        <main>
            {children}
        </main>
        <footer>My Footer</footer>
      </>
  )
}

export default Layout