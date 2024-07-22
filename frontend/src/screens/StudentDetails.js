import React, { useState, useEffect } from 'react'
import Classes from '../screens/classData'
import axios from 'axios'
import ClassItems from '../components/ClassItems'
const StudentDetails = () => {
  console.log(Classes)
  const searchSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
    // alert("Search icon is clicked.")
  }

  return (
    <div className='container2 bg2' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className='outer' style={{ width: "100%" }}>
        {/* <input type='text' placeholder='Search for student...' />
        <span className='search-icon' onClick={searchSubmit}>
          <i className='fas fa-search'></i>
        </span> */}
        <h3>Browse By Class</h3>
        <div className='classes'>
          {Classes.map((classinfo) => (
            <ClassItems
              key={classinfo._id}
              target={`/student_details/details/${classinfo.classname}`}
              //  target=
              classid={classinfo.classname}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
