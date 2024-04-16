
import React, { useState, useEffect } from 'react';
import './table.css';
import College from '../Components/College/College';
import Coursefee from '../Components/CourseFree/Coursefee';
import Placement from '../Components/Placement/Placement';
import UserReview from '../Components/UserReview/UserReview';

const DummyData = [
  { id: 1, name: 'A-Featured', featured: true, fees: 10000,placement:'120000', userReviewRating: 4.5},
  { id: 2, name: '', featured: false,fees: 12000,placement:'130000', userReviewRating: 4.0 },
  { id: 3, name: '', featured: false,fees: 15000,placement:'130000', userReviewRating: 4.5 },
  { id: 4, name: 'A-Featured', featured: true, fees: 10000,placement:'130000', userReviewRating: 4.2 },
  { id: 5, name: '', featured: false,fees: 12000,placement:'130000', userReviewRating: 4.0 },
  { id: 6, name: '', featured: false,fees: 15000,placement:'130000', userReviewRating: 4.5 },
  { id: 7, name: 'A-Featured', featured: true, fees: 10000,placement:'130000', userReviewRating: 4.2 },
  { id: 8, name: '', featured: false, fees: 12000,placement:'130000', userReviewRating: 4.0 },
  { id: 9, name: '', featured: false,fees: 15000,placement:'130000', userReviewRating: 4.5 },
  { id: 10, name: 'A-Featured', featured: true,fees: 95000,placement:'130000', userReviewRating: 4.5 },
  { id: 11, name: '', featured: false,fees: 12000,placement:'130000', userReviewRating: 4.0 },
  { id: 12, name: '', featured: false,fees: 15000,placement:'130000', userReviewRating: 4.5 },
  
 
  // Add more dummy data as needed
];



const Table = () => {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const sortedColleges = [...DummyData].filter(college =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy) {
      sortedColleges.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = pageNumber * itemsPerPage;
    const paginatedColleges = sortedColleges.slice(startIndex, endIndex);

    setColleges(paginatedColleges);
  }, [searchTerm, sortBy, sortOrder, pageNumber]);

  const handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPageNumber(prevPage => prevPage + 1);
    }
  };

  const handleSort = field => {
    if (sortBy === field) {
      setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className='App'>
      <input className='input1' type="text" placeholder="Search by college name" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>CD Rank</th>
            <th onClick={() => handleSort('name')}>Colleges</th>
            {/* <th onClick={() => handleSort('featured')}>Featured</th> */}
            <th onClick={() => handleSort('fees')}>Courses Fees</th>
            <th onClick={() => handleSort('placement')}>Placements</th>
            <th onClick={() => handleSort('userReviewRating')}>User Review</th>
          </tr>
        </thead>
        <tbody onScroll={handleScroll}>
          {colleges.map(college => (
            <tr key={college.id}>
              <td>#{college.id}</td>
              <td>{college.name}<College /> </td>
              {/* <td>{college.featured ? 'Yes' : 'No'}</td> */}
              <td>{college.fees}<Coursefee/></td>
              <td>{college.placement}<Placement/></td>
              <td>{college.userReviewRating}<UserReview/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

