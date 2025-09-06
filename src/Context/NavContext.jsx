

import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
export const NavbarContext = createContext()
const NavContext = ({children}) => {
  const [navOpen, setnavopen] = useState(false)
  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setnavopen]}>
      {children}
      </NavbarContext.Provider>
    </div>
  )
}

NavContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavContext
