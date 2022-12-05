import { Button, Flex } from '@chakra-ui/react';
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