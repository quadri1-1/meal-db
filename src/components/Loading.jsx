import React from 'react'
import { Puff } from 'react-loader-spinner'

const Loading = () => {
  return (
      <div className='d-flex justify-content-center align-item-center vh-100'>
          <Puff
  height="200"
  width="200"
  radius={1}
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

export default Loading