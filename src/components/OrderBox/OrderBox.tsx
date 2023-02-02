import React, { Component, memo } from 'react'
import { Button, Container, Form, Header } from 'semantic-ui-react'

import * as S from './OrderBox.styles'
import { Box } from './OrderBox.styles'

export interface IOrderState {
  name: string
  phone: string
  email: string

  product: string
  color: string
  address: string
}

export interface IOptionItem {
  value: string
  name: string
}

export const Products: IOptionItem[] = [
  {
    value: '',
    name: 'Sản phẩm bạn muốn mua',
  },
  {
    value: 'Samsung Galaxy S23 8GB RAM/ 256GB ROM',
    name: 'Samsung Galaxy S23 8GB RAM/ 256GB ROM',
  },
  {
    value: 'Samsung Galaxy S23+ 8GB RAM/ 256GB ROM',
    name: 'Samsung Galaxy S23+ 8GB RAM/ 256GB ROM',
  },
  {
    value: 'Samsung Galaxy S23+ 8GB RAM/ 512GB ROM',
    name: 'Samsung Galaxy S23+ 8GB RAM/ 512GB ROM',
  },
  {
    value: 'Samsung Galaxy S23 Ultra 8GB RAM/ 256GB ROM',
    name: 'Samsung Galaxy S23 Ultra 8GB RAM/ 256GB ROM',
  },
  {
    value: 'Samsung Galaxy S23 Ultra 12GB RAM/ 512GB ROM',
    name: 'Samsung Galaxy S23 Ultra 12GB RAM/ 512GB ROM',
  },
  {
    value: 'Samsung Galaxy S23 Ultra 12GB RAM/ 1TB ROM',
    name: 'Samsung Galaxy S23 Ultra 12GB RAM/ 1TB ROM',
  },
]

export const Colors: IOptionItem[] = [
  {
    value: '',
    name: 'Màu sắc',
  },
  {
    value: 'Đen Phantom',
    name: 'Đen Phantom',
  },
  {
    value: 'Kem Cotton',
    name: 'Kem Cotton',
  },
  {
    value: 'Xanh Botanic',
    name: 'Xanh Botanic',
  },
  {
    value: 'Tím Lilac',
    name: 'Tím Lilac',
  },
]

export const Address: IOptionItem[] = [
  {
    value: '',
    name: 'Địa chỉ Galaxy',
  },
  {
    value: 'HCM - 203 Nguyễn Thái Sơn, Q.Gò Vấp',
    name: 'HCM - 203 Nguyễn Thái Sơn, Q.Gò Vấp',
  },
  {
    value: 'HCM - 29 Âu Cơ, Q.11',
    name: 'HCM - 29 Âu Cơ, Q.11',
  },
  {
    value: 'HCM - 694 Tỉnh Lộ 10, Q.Bình Tân',
    name: 'HCM - 398-400 Quốc Lộ 50, H.Bình Chánh',
  },
]

const OrderBox = memo(() => {
  const [state, setState] = React.useState<IOrderState>({
    name: '',
    phone: '',
    email: '',
    product: '',
    color: '',
    address: '',
  })

  const changeHandler = (e: any) => {
    setState((value) => ({
      ...value,
      [e.target.name || e.target.id]: e.target.value,
    }))
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log('STATE: ', state)
  }

  const renderOption = (option: IOptionItem) => (
    <option value={option.value} key={option.name}>
      {option.name}
    </option>
  )

  return (
    <S.Box className="container">
      <Form className="form" onSubmit={submitHandler}>
        <h3>Đặt Trước Ngay, nhận ưu đãi đặc quyền</h3>
        <h6 className="sub-header">
          Quý khách hàng vui lòng điền thông tin và chọn sản phẩm muốn mua. Nhân
          viên của Galaxy House sẽ liên hệ Quý khách hàng để tư vấn và hoàn tất
          thủ tục đặt trước.
        </h6>
        <h6>Mọi thắc mắc xin liên hệ hotline: 1900.638436</h6>
        <Form.Field>
          <input
            placeholder="Họ và tên"
            type="text"
            name="name"
            value={state.name}
            required={true}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="Số điện thoại"
            type="tel"
            name="phone"
            value={state.phone}
            required={true}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={state.email}
            required={true}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <select
            id="product"
            data-selected={true}
            required={true}
            onChange={changeHandler}
          >
            {Products.map(renderOption)}
          </select>
        </Form.Field>
        <Form.Field>
          <select
            id="color"
            data-selected={true}
            required={true}
            onChange={changeHandler}
          >
            {Colors.map(renderOption)}
          </select>
        </Form.Field>
        <Form.Field>
          <select
            id="address"
            data-selected={true}
            required={true}
            onChange={changeHandler}
          >
            {Address.map(renderOption)}
          </select>
        </Form.Field>
        <S.ButtonSubmit color="black" type="submit">
          Đặt trước ngay
        </S.ButtonSubmit>
      </Form>
    </S.Box>
  )
})

OrderBox.displayName = 'OrderBox'

export default OrderBox
