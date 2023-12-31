import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Parent from './Parent';
//import axios from 'axios';
export default function Table() {
  const [state, updateState] = useState({ data: [] });
  const [filtetText, updateFilterText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductDetails();
  }, []);

  function onDeleteTrigger(id) {
    // axios.delete(`https://dummyjson.com/products/${id}`).then((res) => {
    //   fetchProductDetails();
    //   alert('Deleted Successfully');
    // });

    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      fetchProductDetails();
      alert('Deleted Successfully');
    });
  }

  function fetchProductDetails() {
    fetch('https://dummyjson.com/products')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        updateState({ data: res.products });
      })
      .catch((err) => console.log(err));
  }

  const navigateToChild = () => {
    navigate('/add');
  };
  function onUpdateTrigger() {
    navigateToChild();
  }

  function functionToCallApi(ev) {}

  return (
    <div>
      <div
        className=" align-items-center py-1"
        align="center"
        style={{ backgroundColor: 'blue', color: 'white', fontWeight: '600' }}
        role="button"
        onClick={navigateToChild}
      >
        <span className="col-sm-6">Add to My Collection</span>
        <input
          className="form-control m-2"
          type="text"
          placeholder="filter my collection"
          valur={filtetText}
          onChange={functionToCallApi}
        />
      </div>
      {state.data.map((res) => {
        return (
          <Parent
            key={res.id}
            data={res}
            onUpdate={onUpdateTrigger}
            onDelete={onDeleteTrigger}
          />
        );
      })}
    </div>
  );
}
