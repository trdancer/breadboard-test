import React, { useEffect, useState, } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { Input, Result, Spin, Typography } from 'antd'
import { getPart } from '../store/part/actions'
function Part() {
  const {
    error,
    part,
    partNumber,
    loading
  } = useAppSelector(state => state.parts)
  const dispatch = useAppDispatch()

  const [partNum, setPartNum] = useState("")
  // useEffect(() => {
  //   dispatch(getPart(partNum))
  // }, [partNumber])
  return (
    <div>
      <Typography.Title level={2}>
        Part Search
      </Typography.Title>
      <Input.Search
        placeholder='Part Number'
        allowClear
        enterButton
        onSearch={(partNum) => {
          console.log('searched')
          dispatch(getPart(partNum))
        }}
      >
      </Input.Search>
      { loading ? <Spin size='large'/> : 
        error ? <Result status={error.code === 404 ? 404 : 500} subTitle={error.message} /> :
        <>
          {JSON.stringify(part, null, 4)}
        </>
      }
    </div>
  )
}

export default Part