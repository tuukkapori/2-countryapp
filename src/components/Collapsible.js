import React, { useState } from 'react'

const Collapsible = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapsible">
      <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
        Show {isOpen ? 'less' : 'more'}
      </button>
      {isOpen && <div className="content">Some contect</div>}
    </div>
  )
}

export default Collapsible
