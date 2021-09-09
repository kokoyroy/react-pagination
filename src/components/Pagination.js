import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, changePage }) => {
    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pageNumbers.push(index);
    }

    const displayNumbers = () => {
        return pageNumbers.map(num => (
            <li onClick={() => changePage(num)} key={num} className='page-item'>
                <a href='!#' className='page-link'>{num}</a>
            </li>));
    };

    return (
        <nav>
            <ul className='pagination'>
                {displayNumbers()}
            </ul>
        </nav>
    );
};

export default Pagination;
