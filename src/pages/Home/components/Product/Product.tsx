import React from 'react'
import { Image } from 'semantic-ui-react'

import * as S from './Product.styles'
import { Product, products } from './Product.types'

const Item = (props: { item: Product }) => {
  const { item } = props
  const [currentIndex, setCurrentIndex] = React.useState(2)

  return (
    <S.ItemContainer currentIndex={currentIndex} data-aos="fade-up">
      <div
        style={{
          width: `${item.widthPercent}%`,
        }}
      >
        <Image className="img" src={item.imgs[currentIndex]}></Image>
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
        <p className="price">
          256GB:&nbsp;&nbsp;
          <span className="price-amount">{item.price_256}</span>
        </p>
        {item.price_512 && (
          <p className="price">
            512GB:&nbsp;&nbsp;
            <span className="price-amount">{item.price_512}</span>
          </p>
        )}
        {item.price_1t && (
          <p className="price">
            1TB:&nbsp;&nbsp;
            <span className="price-amount">{item.price_1t}</span>
          </p>
        )}
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

const ProductList = () => {
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

export default React.memo(ProductList)
