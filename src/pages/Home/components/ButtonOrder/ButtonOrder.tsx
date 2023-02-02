import React from 'react'

import * as S from './ButtonOrder.styles'

const ButtonOrder = () => {
  const onClick = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <S.Container>
      <div className="content" onClick={onClick}>
        <S.Button bgColor="#DD000D">
          <p className="text">ĐẶT TRƯỚC NGAY</p>
          <div className="desc-container">
            <p className="desc">Giá trị cọc</p>
            <p className="price">1,000,000đ</p>
          </div>
        </S.Button>
        <S.Button bgColor="#005FFF" onClick={onClick}>
          <p className="text">ĐẶT TRẢ GÓP 0%</p>
          <div className="desc-container">
            <p className="desc">Giá trị cọc</p>
            <p className="price">1,000,000đ</p>
          </div>
        </S.Button>
      </div>
    </S.Container>
  )
}

export default React.memo(ButtonOrder)
