import { Button, Flex, Select } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MasaiJobCard from '../Components/MasaiJobCard';
import { masaiJobCardApiCall } from '../ReduxJobCard/action'

function Home() {
  const dispatch = useDispatch();

  const job = useSelector((state) =>state.job);

  useEffect(() => {
    if (job?.length === 0) {
      dispatch(masaiJobCardApiCall())
    }
    
  },[])

  console.log(job)
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
        // onChange={filterRole}

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
        {job?.length > 0 && job.map((el,index) => (
          <MasaiJobCard key={index} data={ el} />
      ))}
      </Flex>
      <Flex
        flexDirection='row-reverse'
        m='15px'
        gap='10px'
      >
       <Button>Prev</Button>
       <Button>Next</Button>
      </Flex>
    </>
  )
}

export default Home