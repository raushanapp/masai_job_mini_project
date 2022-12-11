import { Button, Flex, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MasaiJobCard from '../Components/MasaiJobCard';
import { filterJobApiCall, masaiJobCardApiCall } from '../ReduxJobCard/action'

function Home() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();
  const job = useSelector((state) =>state.job);

  useEffect(() => {
    if (job?.length === 0) {
      // console.log("inside useff",page)
      dispatch(masaiJobCardApiCall());
    }
    
    setFilter(job);
    
  }, [job?.length,page]);

  const filterByRole = (e) => {
    const filter = e.target.value;
    if (filter==="Frontend" || filter==="FullStack") {
      console.log(filter,page)
      dispatch(filterJobApiCall({page,filter}));
      // setFilter(job)
    }
    else if(filter==="Backend") {
        setFilter("")
    }
    else {
      setFilter("")
      if (filter === null) {
        setFilter(job)
      }
    }
   
  }
  const incrementPage = (value) => {
    setPage((pre) => pre + value);
    if (page !== 0 && filter?.length >= 10) {
      
      dispatch(masaiJobCardApiCall(page));
      return;
    }
    else {
      if (page ===1) {
        return;
      }
      else {
        dispatch(masaiJobCardApiCall(page));
        
      }
    }
    
  }
  
  // console.log(page)

  // console.log("page:",job)
  return (
    <>
      <Select placeholder='Filter By Role'
        w='25%'
        h='45px'
        p='10px'
        alignItems='center'
        marginLeft='100px'
        marginTop='20px'
        fontSize='18px'
        onChange={filterByRole}

      >
          <option value="Frontend">Fronted</option>
          <option value="Backend">Backend</option>
          <option value="FullStack">FullStack</option>
      </Select>
      <Flex
        // border='1px solid #ccc'
        flexDirection='column'
        w='100%'
        // h='600px'
        justifyContent='space-around'
        align='center'
        m='auto'
        gap='25px'
        bg='teal.50'
        p='20px'
        marginTop='50px'
      >
        {filter?.length > 0 && filter.map((el,index) => (
          <MasaiJobCard key={index} data={ el} />
      ))}
      </Flex>
      <Flex
        flexDirection='row-reverse'
        m='15px'
        gap='10px'
      >
        {page === 0 ? <Button isDisabled={true}>Prev</Button> : <Button onClick={() => incrementPage(-1)} >Prev</Button>}
        <Text fontSize='20px'>{ page}</Text>
       {filter?.length<10?<Button isDisabled={true}>Next</Button>:<Button onClick={()=>incrementPage(1)}>Next</Button>}
      </Flex>
    </>
  )
}

export default Home