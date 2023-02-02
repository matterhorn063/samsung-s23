import React from 'react'

import * as S from './ButtonOrder.styles'
import { Expand, LastButton } from './ButtonOrder.styles'

const ButtonOrder = () => {
  const [expand, setExpand] = React.useState(false)
  const onClick = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <S.Main>
      <S.Container>
        <div className="content" onClick={onClick}>
          <S.Button bgColor="#94A2F2">
            <p className="text">ĐẶT TRƯỚC NGAY</p>
            <div className="desc-container">
              <p className="desc">Giá trị đặt cọc</p>
              <p className="price">1,000,000đ</p>
            </div>
          </S.Button>
          <S.Button bgColor="#1A73E8" onClick={onClick}>
            <p className="text">ĐẶT TRẢ GÓP 0%</p>
            <div className="desc-container">
              <p className="desc">Giá trị đặt cọc</p>
              <p className="price">1,000,000đ</p>
            </div>
          </S.Button>
        </div>
      </S.Container>
      <S.LastButton bgColor="#" onClick={() => setExpand(true)}>
        <p className="text">ĐẶT CỌC NGAY</p>
        <div className="desc-container">
          <p className="desc" />
          <p className="price" />
        </div>
      </S.LastButton>
      <S.Expand hidden={!expand} className="expand-view">
        Số tài khoản: 04301010039227
        <br />
        Tên Tài Khoản: Công Ty Cổ Phần Dịch Vụ Phát Triển Thị Trường C.L <br />
        Ngân Hàng Thương Mại Cổ Phần Hàng Hải Việt Nam (MSB) - Chi Nhánh Cộng
        Hòa
      </S.Expand>
    </S.Main>
  )
}

export default React.memo(ButtonOrder)
