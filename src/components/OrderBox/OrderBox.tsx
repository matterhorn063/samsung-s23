import axios from 'axios'
import React, { memo } from 'react'
import toast, { LoaderIcon, Toaster } from 'react-hot-toast'
import { Form, Loader } from 'semantic-ui-react'

import * as S from './OrderBox.styles'

const notify = () => toast('Cảm ơn, bạn đã đang ký thành công.')

export interface IOrderState {
  name: string
  phone: string
  email: string

  product: string
  color: string
  store: string
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

export const Stores: IOptionItem[] = [
  {
    value: '',
    name: 'Địa chỉ Galaxy House gần bạn nhất',
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
    store: '',
  })

  const [loading, setLoading] = React.useState<boolean>(false)

  const changeHandler = (e: any) => {
    setState((value) => ({
      ...value,
      [e.target.name || e.target.id]: e.target.value,
    }))
  }

  const submitHandler = async (e: any) => {
    e.preventDefault()
    try {
      const { name, phone, email, product, color, store } = state
      setLoading(true)
      const func = axios.post(
        'https://sheet.best/api/sheets/44dbacec-0190-4b19-8209-9f0dfb52b2d8',
        {
          Name: name,
          Phone: phone,
          Email: email,

          Product: product,
          Color: color,
          Store: store,
        }
      )
      toast
        .promise(func, {
          loading: 'Loading',
          success: 'Cảm ơn, bạn đã đang ký thành công.',
          error: 'Error when fetching',
        })
        .finally(() => {
          setLoading(false)
        })
      // notify()
    } catch (e) {
      // handle error
    }
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
        <h6 className="sub-header-1">
          Quý khách hàng vui lòng điền thông tin và chọn sản phẩm muốn mua. Nhân
          viên của Galaxy House sẽ liên hệ Quý khách hàng để tư vấn và hoàn tất
          thủ tục đặt trước.
        </h6>
        <h6 className="sub-header-2">
          Mọi thắc mắc xin liên hệ hotline: 1900.638436
        </h6>
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
            id="store"
            data-selected={true}
            required={true}
            onChange={changeHandler}
          >
            {Stores.map(renderOption)}
          </select>
        </Form.Field>
        <S.ButtonSubmit color="black" type="submit" disabled={loading}>
          <p className="button-text">Đặt trước ngay</p>
          {loading && <LoaderIcon className="loader" />}
        </S.ButtonSubmit>
      </Form>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          success: {
            duration: 3000,
          },
        }}
      />
    </S.Box>
  )
})

OrderBox.displayName = 'OrderBox'

export default OrderBox
