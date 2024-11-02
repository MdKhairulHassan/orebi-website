import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`mx-auto laptop:max-w-laptopContainer taplet:max-w-tapletContainer android:max-w-androidContainer mobile:max-w-mobileContainer ${className}`}>{children}</div>
  )
}

export default Container