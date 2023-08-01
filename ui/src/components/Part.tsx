import React, { useEffect, useState, } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { Button, Card, Input, Result, Row, Space, Spin, Statistic, Typography, Tag, Descriptions, Collapse, Divider } from 'antd'
import { SelectOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { getPart } from '../store/part/actions'
import './Part.css'
import Link from 'antd/es/typography/Link'

function Part() {
  const {
    error,
    part,
    partNumber,
    loading
  } = useAppSelector(state => state.parts)
  const dispatch = useAppDispatch()
  return (
    <div id="Part">
      <Typography.Title level={2}>
        BreadBoard Part Search
      </Typography.Title>
      <Input.Search
        name='partSearch'
        className='part-search'
        placeholder='Part Number'
        allowClear
        enterButton
        onSearch={(partNum) => {
          dispatch(getPart(partNum))
        }}
        >
      </Input.Search>
      { loading ? <Spin size='large'/> : 
        error ? <Result status={error.code === 404 ? 404 : 500} subTitle={error.message} /> :
        part &&
        <>
        <Typography.Title level={4}>
          Results
        </Typography.Title>
        <Card
          style={{maxWidth: '50%'}}
          title={
            <div style={{display: 'block', textAlign: 'left'}}>
            Part {partNumber}
          </div>
          }
          extra={
            <Space align='end'>
                <Link href={part.productUrl} target='_blank'>
                  <Button 
                    type='primary'
                    size='large'
                    icon={<ShoppingCartOutlined/>}
                    >
                    Buy
                  </Button>
                </Link>
                <Link href={part.productDoc} target='_blank'>
                  <Button 
                    size='large'
                    icon={<SelectOutlined/>}
                  >
                    View Datasheet
                  </Button>
                </Link>
              </Space>
          }
        >
          <Space direction='vertical'>
            <div style={{textAlign: 'left'}}>

            <Row>

              <Space size={"large"}>
              <img 
                style={{display: 'block'}}
                alt={`Image of product ${part.name}: ${part.description}`} 
                src={part.productImageUrl}
              />
                <Statistic
                  title="Total Stock"
                  value={part.totalStock}
                />
                <Statistic
                  title="Shortest Lead Time"
                  value={`${part.manufacturerLeadTime} Days`}
                  />
              </Space>
            </Row>
            <Typography.Title level={5}>
                Part Information 
            </Typography.Title>
            <Descriptions
              bordered
              column={1}
              layout='horizontal'
            >
              <Descriptions.Item
                label={'Name'}
              >
                {part.name}
              </Descriptions.Item>
              <Descriptions.Item
                label={'Description'}
              >
                {part.description}
              </Descriptions.Item>
              <Descriptions.Item
                label={'Manufacturer'}
              >
                {part.manufacturerName}
              </Descriptions.Item>
              <Descriptions.Item
                label={'Available Suppliers'}
              >
                {part.sourceParts.map((supplier) => {
                  return (
                    <Tag className='supplier-tag' color='cyan'>
                      {supplier}
                    </Tag>
                  )
                })}
              </Descriptions.Item>
              
            </Descriptions>
            <Typography.Title level={5} >
              Packaging Options: 
            </Typography.Title>

            <Collapse>
              { part.packaging.map(({
                  type,
                  minimumOrderQuantity,
                  quantityAvailable,
                  unitPrice,
                  supplier,
                  priceBreaks,
                  manufacturerLeadTime}, i) => {
                    return (
                      <Collapse.Panel
                      key={i}
                        header={`${supplier}: ${type}`}
                      >
                        <Descriptions
                          column={1}
                          bordered
                          layout='horizontal'
                        >
                          <Descriptions.Item
                            label={"Supplier"}
                          >
                            {supplier}
                          </Descriptions.Item>
                          <Descriptions.Item
                            label={"Packaging Type"}
                          >
                            {type}
                          </Descriptions.Item>
                          <Descriptions.Item
                            label={"Unit Price"}
                          >
                            {unitPrice === -1 ? 'Unknown': `$${Math.round(unitPrice * 100)/100}`}
                          </Descriptions.Item>
                          <Descriptions.Item
                            label={"Quantity Available"}
                            >
                            {quantityAvailable}
                          </Descriptions.Item>
                          <Descriptions.Item
                            label={"Minimum Order Quantity"}
                            >
                            {minimumOrderQuantity}
                          </Descriptions.Item>
                          </Descriptions>
                          
                          <Typography.Title level={5} >
                            Pricing Tiers: 
                          </Typography.Title>
                            {priceBreaks.map(({breakQuantity, unitPrice, totalPrice}, ii) => {
                              return (
                                  <Descriptions
                                    bordered
                                    column={1}
                                    style={{marginBottom: '10px'}}
                                  >
                                    <Descriptions.Item
                                      label={'Break Quantity (Min. for tier)'}
                                    >
                                      {breakQuantity}
                                    </Descriptions.Item>
                                    <Descriptions.Item
                                      label={'Price'}
                                    >
                                      ${Math.round(unitPrice * 100)/100}
                                    </Descriptions.Item>
                                    <Descriptions.Item
                                      label={'Price for Quantity'}
                                    >
                                      ${Math.round(totalPrice * 100)/100}
                                    </Descriptions.Item>
                                  </Descriptions>
                              )
                            })}
                    </Collapse.Panel>
                      )
              })}
              </Collapse>
              <Typography.Title level={5} >
                Specifications: 
              </Typography.Title>
              <Descriptions
                bordered
                column={1}
              >
                {part.specifications.map(({key, value}) => {
                  return <Descriptions.Item
                    label={key[0].toUpperCase() + key.substring(1)}
                  >
                    {value}
                  </Descriptions.Item>

                })}
              </Descriptions>
            </div>
          </Space>
        </Card>
      </>
      }
    </div>
    )
}

export default Part