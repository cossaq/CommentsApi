import React, { useState } from 'react';

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
    <div>
      <h1>Comment List</h1>
      <p>
        Fetched from
        <i> https://jsonplaceholder.typicode.com/comments</i>
      </p>
      {comments.slice(page * 4 - 4, page * 4).map((comment) => (
        <div className='card' style={{ width: '700px', marginBottom: '20px' }}>
          <div className='card-body'>
            <h5 className='card-title'>Name: {comment.name}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>
              Email: {comment.email}
            </h6>
            <p className='card-text'>Body: {comment.body}</p>
          </div>
        </div>
      ))}
      <ul className='pagination'>
        <li className='page-item'>
          <button className='page-link' onClick={decPage}>
            &lt; Previous
          </button>
        </li>
        <li className='page-item'>
          <p className='page-link'>{page}</p>
        </li>
        <li className='page-item'>
          <button className='page-link' onClick={incPage}>
            Next &gt;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
