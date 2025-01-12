import React from 'react'

function Header(props) {
  const headerStyles = {
    backgroundColor : props.bgColor,
    color : props.textColor
  }
  return (
    <header style = {headerStyles}>
        <div className="container">
          <h1>{props.text}</h1>
        </div>
    </header>
  )
}


Header.defaultProps = {
  text : "FeedBack UI",
  bgColor : 'rgba(0,0,0,0.4)',
  textColor : '#ff6a95'
}
export default Header