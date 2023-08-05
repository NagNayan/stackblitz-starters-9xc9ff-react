import React from 'react';

export default function Error(props) {
  return (
    <div>
      <span style={{ color: 'red', fontSize: '12px' }}>{props.msg}</span>
    </div>
  );
}
