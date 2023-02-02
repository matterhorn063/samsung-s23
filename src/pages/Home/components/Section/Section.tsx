import React from 'react'

import Section1 from '../../images/section_1.jpg'
import Section2 from '../../images/section_2.jpg'
import Section4 from '../../images/section_3.jpg'
import Section3 from '../../images/section_4.jpg'

import * as S from './Section.styles'

export enum SectionImageType {
  left,
  right,
}

export interface ISection {
  type: SectionImageType
  image: any
  title: string
  titleColor?: string
  subTitle?: string
  contents: { label: string; desc: string }[]
}

const data: ISection[] = [
  {
    type: SectionImageType.right,
    image: Section1,
    title: 'Siêu Phân Giải 200MP',
    contents: [
      {
        label: 'Câu chuyện đêm ấn tượng trong từng điểm ảnh',
        desc: 'Samsung chính thức áp dụng cảm biến có độ phân giải 200MP trên dòng điện thoại Galaxy S23 Ultra. Với công nghệ Siêu Phân Giải 200MP, Chỉ cần một chạm, dễ dàng bắt ngay 200 triệu điểm ảnh siêu chi tiết và đầy ấn tượng.',
      },
    ],
  },
  {
    type: SectionImageType.left,
    image: Section2,
    title: 'Chân Dung Đêm',
    contents: [
      {
        label: 'Chân dung rực rỡ đạt ‘triệu like’',
        desc: 'Bộ xử lý hình ảnh AI hoàn toàn mới thắp sáng màn đêm khi chụp với camera sau lẫn camera selfie. Giải pháp siêu chụp đêm, giảm nhiễu hiệu quả giúp bắt trọn chân dung sáng rõ.',
      },
    ],
  },
  {
    type: SectionImageType.right,
    image: Section3,
    title: 'Siêu Bút Hiệu Năng S Pen',
    contents: [
      {
        label: 'Linh hoạt ghi chú cùng S Pen trên ứng dụng Google',
        desc: 'Với mong muốn tối ưu hóa và nâng cao hiệu suất công việc, Samsung kết hợp với Google, giúp S Pen trên Galaxy S23 Ultra có thể ghi chú dễ dàng trên các nền tảng ứng dụng công việc quen thuộc.',
      },
      {
        label: 'Chuyển từ hình ảnh sang nội dung dễ dàng',
        desc: 'Không cần tốn thời gian cho việc đánh lại nội dung từ hình ảnh, S Pen thế hệ mới hỗ trợ chuyển đổi từ hình ảnh sang nội dung một cách nhanh chóng.',
      },
    ],
  },
  {
    type: SectionImageType.left,
    image: Section4,
    title: 'HIỆU NĂNG VƯỢT TRỘI MỚI',
    titleColor: 'white',
    subTitle: 'Thế Hệ Vi Xử Lý Snapdragon 8 Gen 2 Mạnh Mẽ Nhất',
    contents: [
      {
        label: 'Cân mượt mọi tựa game khủng',
        desc: 'Nhờ vi xử lý Snapdragon 8 Gen 2 mạnh mẽ và tân tiến nhất, Galaxy S23 Series hứa hẹn mang đến hiệu năng vượt trội, chiến nhẹ, cân trọn mọi tựa game khủng.',
      },
      {
        label: 'Chiến xuyên ngày đêm',
        desc: 'Dung lượng pin cải tiến, kết hợp cùng phần mềm AI Quản lí năng lượng thông minh, cho thời lượng sử dụng tăng đến 22% cho dòng sản phẩm Galaxy S23 Series. Sẵn sàng cho những cuộc chiến bất tận.',
      },
    ],
  },
]

const Sections = () => {
  const renderSection = (item: ISection) => {
    return (
      <S.SectionContainer type={item.type} data-aos="slide-up">
        <div className="img-container">
          <img className="img" src={item.image} />
        </div>
        <div className="info">
          <p className="title" style={{ color: item.titleColor }}>
            {item.title}
          </p>
          {item.subTitle && <p className="subTitle">{item.subTitle}</p>}
          {item.contents.map((content) => (
            <>
              <p className="label">{content.label}</p>
              <p className="desc">{content.desc}</p>
            </>
          ))}
        </div>
      </S.SectionContainer>
    )
  }

  return <S.Container>{data.map((item) => renderSection(item))}</S.Container>
}

export default React.memo(Sections)
