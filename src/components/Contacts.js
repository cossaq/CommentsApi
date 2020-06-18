import React, { useState } from 'react';
import './Contacts.css';

const Contacts = ({ comments }) => {
  const [page, setPage] = useState(1);

  const incPage = () => {
    if (page * 4 < comments.length) {
      setPage(page + 1);
    }
  };

  const decPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className='col-sm-10'>
      <h1>User List</h1>
      <p>
        Fetched from
        <i> https://jsonplaceholder.typicode.com/users</i>
      </p>
      {comments.slice(page * 4 - 4, page * 4).map((comment) => (
        <div
          className='card'
          style={{ height: '100px', width: '500px', marginBottom: '20px' }}
        >
          <div className='card-body row'>
            <div className='col-3'>
              <h6 className='card-text'>Name</h6>
              <h6 className='card-text'>Username</h6>
              <h6 className='card-text'>Email</h6>
            </div>

            <div className='col-5'>
              <h6 className='card-text'>{comment.name}</h6>
              <h6 className='card-text'>{comment.username}</h6>
              <h6 className='card-text'>{comment.email}</h6>
            </div>
          </div>
        </div>
      ))}
      <ul className='pagination'>
        <li className='page-item'>
          <button
            className={page === 1 ? 'page-link disabled' : 'page-link'}
            onClick={decPage}
          >
            &lt; Previous
          </button>
        </li>
        <li className='page-item'>
          <p className='page-link page-number'>{page}</p>
        </li>
        <li className='page-item'>
          <button
            className={
              page * 4 > comments.length ? 'page-link disabled' : 'page-link'
            }
            onClick={incPage}
          >
            Next &gt;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
