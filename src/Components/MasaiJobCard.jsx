import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

function MasaiJobCard({data}) {
  return (
    <Flex
      // border='1px solid #ccc'
      align='center'
      justifyContent='space-around'
      w='90%'
      h='160px'
      gap='15px'
      // p='15px'
      borderRadius='10px'
      boxShadow='md' p='5' rounded='md' bg='white'
    >
      <Flex
        // border='1px solid #777'
        w='50%'
        h='100%'
        justify='space-around'
        gap='10px'
        align='center'
      >
        <Flex
          align='center'
          // p='10px'
          // border='1px solid #777'
          w='30%'
          h='100%'
          justify='space-around'
          // borderRadius='50% 50% 50% 50%'

        >
         <Image src='https://via.placeholder.com/150' w='250' h='140px'  p='10px' borderRadius='50%'/>
        </Flex>
        <Flex
          // border='1px solid #777'
          w='70%'
          h='100%'
          // align='center'
          justify='space-between'
          gap='5px'
          flexDirection='column'

        >
          <Text color='teal.400'>{data.company}</Text>
          <Heading fontSize='20px'>{data.position}</Heading>
          {/* postedAt and full time */}
          <Flex
            align='center'
            justify='space-between'

          >
            <Text>{ data.postedAt}</Text>
            <Text>{ data.contract}</Text>
            <Text>{ data.location}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        // border='1px solid #777'
        w='50%'
        h='100%'
        justify='space-around'
        gap='10px'
        color='teal.400'
        align='center'
      >
        <Text boxShadow='base' p='3' rounded='md' bg='teal.50'>{ data.role}</Text>
        <Text boxShadow='base' p='3' rounded='md' bg='teal.50'>{ data.level}</Text>
        <Text boxShadow='base' p='3' rounded='md' bg='teal.50'>{ data.language}</Text>
        {/* <Text boxShadow='base' p='3' rounded='md' bg='white'></Text> */}
      </Flex>

    </Flex>
  )
}

export default MasaiJobCard