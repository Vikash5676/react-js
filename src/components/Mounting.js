import React from 'react'

export default function Mounting() {
  return (
    <div>
      <h1>Mounting</h1>
      <div className='text-start container'>
      <p>Mounting means putting elements into the DOM.</p>

<p>React has four built-in methods that gets called, in this order, when mounting a component:</p>
<ol>
<li>constructor()</li>
<li>getDerivedStateFromProps()</li>
<li>render()</li>
<li>componentDidMount()</li>
</ol>
<p>The render() method is required and will always be called, the others are optional and will be called if you define them.</p>
</div>
    </div>
  )
}
