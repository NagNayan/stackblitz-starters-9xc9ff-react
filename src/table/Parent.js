import { useState } from 'react';
import React from 'react';
const Parent = (props) => {
  function onDeleteHandler(id) {
    props.onDelete(id);
  }

  return (
    <div>
      <div
        className="row p-3"
        style={{
          color: parseFloat(props.data.id) % 2 == 0 ? 'black' : 'blue',
          fontWeight: '600',
        }}
      >
        <div className="col-sm-2">{props.data.title}</div>
        <div className="col-sm-2">{props.data.brand}</div>
        <div className="col-sm-2">{props.data.category}</div>
        <div className="col-sm-4">{props.data.description}</div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-primary">
            Update ?
          </button>
          <button
            type="submit"
            className="btn btn-danger mx-2"
            onClick={() => onDeleteHandler(props.data.id)}
          >
            Delete ?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parent;
