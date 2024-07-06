'use client'
import React, { useState } from 'react'
import DataView from './components/DataView';
import Header from './components/Header';

const page = () => {
  const [filterButton , setFilterButton] = useState("");
  const onChange = (e:string) => {
    setFilterButton(e)
  }
  return (
    <div>
      <Header onChange={onChange} />
      <DataView filterButton={filterButton}/>
    </div>
  )
}

export default page