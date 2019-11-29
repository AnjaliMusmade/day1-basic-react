import React from 'react';
import LoggerHoc from './LoggerHoc';




var BorderComponent=props=> (
  <div style={{backgroundColor:"green", padding:10}}>
<div style={{backgroundColor:"seagreen", padding:10 }}>
{props.children}
</div>
  </div>
);

export default LoggerHoc(BorderComponent);