import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from './Error';
export default function Child(props) {
  const navigate = useNavigate();
  function onBack() {
    navigate('/');
  }

  const [formState, updateFormState] = useState({
    title: '',
    desc: '',
    brand: '',
    category: '',
    amount: '',
  });

  function onSubmit(event) {
    event.preventDefault();

    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      body: JSON.stringify({
        ...formState,
        description: formState.desc,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      res.json().then((response) => {
        alert('Added Successfully');
        navigate('/');
      });
    });
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
        <label for="title">Enter Title</label>
        <input
          className="form-control"
          value={formState.title}
          type="text"
          id="title"
          onChange={(ev) =>
            updateFormState((e) => {
              return { ...e, title: ev.target.value };
            })
          }
        />
        {formState.title ? '' : <Error msg="Title is invalid" />}
        <br />
        <label for="brand">Enter brand</label>
        <input
          className="form-control"
          type="text"
          id="brand"
          value={formState.brand}
          onChange={(ev) =>
            updateFormState((e) => {
              return { ...e, brand: ev.target.value };
            })
          }
        />
        {formState.brand ? '' : <Error msg="Brand is invalid" />}
        <br />
        <label for="category">Enter category</label>
        <input
          className="form-control"
          type="text"
          id="category"
          value={formState.category}
          onChange={(ev) =>
            updateFormState((e) => {
              return { ...e, category: ev.target.value };
            })
          }
        />
        {formState.category ? '' : <Error msg="Category is invalid" />}
        <br />
        <label for="desc">Enter Description</label>
        <input
          className="form-control"
          type="textarea"
          id="desc"
          value={formState.desc}
          onChange={(ev) =>
            updateFormState((e) => {
              return { ...e, desc: ev.target.value };
            })
          }
        />
        {formState.desc ? '' : <Error msg="Description is invalid" />}
        <br />
        <label for="amt">Enter Amount</label>
        <input
          className="form-control"
          type="number"
          id="amt"
          value={formState.amount}
          onChange={(ev) =>
            updateFormState((e) => {
              return { ...e, amount: ev.target.value };
            })
          }
        />
        {formState.amount ? '' : <Error msg="Amount is invalid" />}
        <br />
        <div align="right">
          <button
            type="button"
            className="btn btn-secondary mx-2"
            onClick={onBack}
          >
            Back
          </button>
          <button type="button" className="btn btn-primary" onClick={onSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
