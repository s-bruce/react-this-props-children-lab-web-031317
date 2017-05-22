import React from 'react'

export default function ThemedDecorations(props){
  const childrenWithProp = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      className: props.theme
    })
  })

  return (
    <div>
      {childrenWithProp}
    </div>

  )
}
