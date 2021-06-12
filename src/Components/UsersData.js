import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Users from './Users';
import Pagination from './Pagination';

export default function UsersData() {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);

  //useeffect for getitem from localstorage and fetching data from API
  useEffect(() => {
    //function for fetching data from API
    const fetchData = async () => {
      try {
        const result = await axios('https://randomuser.me/api/?results=20');
        setData(result.data.results);
        console.log(result.data.results);
      } catch (error) {
        alert(`Error ${error}`);
      }
    };

    const parsedData = localStorage.getItem('myData');
    //Logic to decide using localstorage (handle not update from refresh)
    if (parsedData) {
      setData(JSON.parse(parsedData));
    } else {
      fetchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //useeffect for setitem to localstorage
  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  //handle loading for fetching data
  if (data === undefined) {
    return <div>Still Loading...</div>;
  }

  //Pagination
  const indexOfLastUsers = currentPage * usersPerPage;
  const indexOfFirstUsers = indexOfLastUsers - usersPerPage;
  const currentUsers = data.slice(indexOfFirstUsers, indexOfLastUsers);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className="HeaderTitle">Users Contacts</h1>
      <Users users={currentUsers} />
      <Pagination
        usersPerPage={usersPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>
  );
}
