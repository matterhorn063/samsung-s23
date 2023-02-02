import OrderBox from '~/components/OrderBox'

import * as S from './Home.styles'
import { ButtonOrder } from './components/ButtonOrder'
import { ProductList } from './components/Product'
import { Sections } from './components/Section'
import BannerImg from './images/banner.jpg'
import Banner1080Img from './images/banner_1080.jpg'

export function Home() {
  return (
    <S.Container>
      <img alt="banner" className="banner banner_full" src={BannerImg} />
      <img alt="banner" className="banner banner_mobile" src={Banner1080Img} />
      <ButtonOrder />
      <ProductList />
      <Sections />
      <OrderBox />
    </S.Container>
  )
}
