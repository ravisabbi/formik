import React from 'react'

function ShowError(props) {
  return (
    <div>
        <p className='error'>{props.children}</p>
    </div>
  )
}

export default ShowError