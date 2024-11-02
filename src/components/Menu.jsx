import React from 'react'

const Menu = ({className, menuName}) => {
  return (
    <ul>
      <li className={`font-dms text-[14px] text-TextColor px-5 mobile:text-[8px] mobile:px-2 ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu