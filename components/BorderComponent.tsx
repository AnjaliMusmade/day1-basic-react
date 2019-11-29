import React from 'react';

export default props=> (
  <div style={{backgroundColor:"green", padding:10}}>
<div style={{backgroundColor:"magenta", padding:10 }}>
{props.children}
</div>
  </div>
)