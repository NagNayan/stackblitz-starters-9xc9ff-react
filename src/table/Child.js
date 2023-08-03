import React from 'react';
export default function Child(props) {
  return (
    <div>
      <form>
        <label for="name">Eneter Name</label>
        <input className="form-control" type="text" id="name" />
      </form>
    </div>
  );
}
