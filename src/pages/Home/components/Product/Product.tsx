import React from 'react'

import * as S from './Product.styles'
import { Product, products } from './Product.types'

const Item = (props: { item: Product }) => {
  const { item } = props
  const [currentIndex, setCurrentIndex] = React.useState(2)

  return (
    <S.ItemContainer currentIndex={currentIndex}>
      <div
        style={{
          width: `${item.widthPercent}%`,
        }}
      >
        <img className="img" src={item.imgs[currentIndex]}></img>
      </div>

      <p className="name">{item.name}</p>
      <div className="color-container">
        {item.colors.map((color, index) => (
          <div
            key={color + item.name}
            style={{ backgroundColor: color }}
            onClick={() => setCurrentIndex(index)}
            className="color"
          />
        ))}
      </div>
      <p className="label-price">Giá bán</p>
      <div className="price-container">
        <p className="price">256GB: {item.price_256}</p>
        {item.price_512 && <p className="price">512GB: {item.price_512}</p>}
        {item.price_1t && <p className="price">1TB: {item.price_1t}</p>}
      </div>
      <S.ButtonBuy
        onClick={() => {
          window.scrollTo({
            left: 0,
            top: document.body.scrollHeight,
            behavior: 'smooth',
          })
        }}
      >
        <p className="text-buy">Đặt cọc ngay</p>
      </S.ButtonBuy>
    </S.ItemContainer>
  )
}

export function ProductList() {
  return (
    <S.Container>
      <div className="content">
        {products.map((product) => (
          <Item key={product.name} item={product} />
        ))}
      </div>
    </S.Container>
  )
}
