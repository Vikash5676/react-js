import React from 'react'

export default function Unmounting() {
  return (
    <div>
      <h1>Unmounting</h1>
      <div className='text-start container'>
          <p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.</p>
          <p>React has only one built-in method that gets called when a component is unmounted:</p>
          <ol>
              <li>componentWillUnmount()</li>
          </ol>

      </div>
    </div>
  )
}
