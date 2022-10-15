import React, { useRef } from 'react';


const Navbar = () => {
  const ulContainer = useRef(null);

  return (
    <header>
      <nav className='container_nav'>
        <p className='title'>accessories</p>
        <div className='sub-nav'>
        
        </div>
        <div className='icons'>
          <div 
            className='cart-icon-area'
            // onClick={() => addCartEnvelopeClass()}
          >
            <p className='cart-icon'>
              <span>amount</span>
            
            </p>
          </div>
          <span
            className='btn-bars'
            
          >``
           
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;