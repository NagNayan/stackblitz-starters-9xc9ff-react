import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Child(props) {
  const navigate = useNavigate();
  function onBack() {
    navigate('/');
  }
  return (
    <div>
      <div
        align="center"
        className="p-1"
        style={{ background: 'blue', color: 'white', fontWeight: '600' }}
      >
        Add To Collection
      </div>
      <form className="mt-3 mx-2">
        <label for="title">Eneter Title</label>
        <input className="form-control" type="text" id="title" />
        <br />
        <label for="brand">Eneter brand</label>
        <input className="form-control" type="text" id="brand" />
        <br />
        <label for="category">Eneter category</label>
        <input className="form-control" type="text" id="category" />
        <br />
        <label for="desc">Eneter Description</label>
        <input className="form-control" type="textarea" id="desc" />
        <br />
        <label for="amt">Eneter Amount</label>
        <input className="form-control" type="number" id="amt" />
        <br />
        <div align="right">
          <button
            type="button"
            className="btn btn-secondary mx-2"
            onClick={onBack}
          >
            Back
          </button>
          <button type="button" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
