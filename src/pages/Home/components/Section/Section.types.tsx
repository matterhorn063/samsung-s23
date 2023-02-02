import S23_Black from '../../images/s23_black.png'
import S23_Cream from '../../images/s23_cream.jpg'
import S23_Green from '../../images/s23_green.jpg'
import S23_Lilac from '../../images/s23_lilac.jpg'

import S23_Plus_Black from '../../images/s23_plus_black.png'
import S23_Plus_Cream from '../../images/s23_plus_cream.png'
import S23_Plus_Green from '../../images/s23_plus_green.png'
import S23_Plus_Lilac from '../../images/s23_plus_lilac.png'

import S23_Ultra_Black from '../../images/s23_ultra_black.png'
import S23_Ultra_Cream from '../../images/s23_ultra_cream.png'
import S23_Ultra_Green from '../../images/s23_ultra_green.png'
import S23_Ultra_Lilac from '../../images/s23_ultra_lilac.png'

export const ColorProducts = {
  black: '#000000',
  cream: '#F2F1F1',
  green: '#275C3E',
  lilac: '#CCC8D3',
}

export interface Product {
  widthPercent: number
  name: string
  imgs: any[]
  colors: string[]
  price_256: string
  price_512?: string
  price_1t?: string
}

export const products: Product[] = [
  {
    widthPercent: 80,
    name: 'Samsung Galaxy S23',
    imgs: [S23_Black, S23_Cream, S23_Green, S23_Lilac],
    colors: [
      ColorProducts.black,
      ColorProducts.cream,
      ColorProducts.green,
      ColorProducts.lilac,
    ],
    price_256: '24,990,000đ',
  },
  {
    widthPercent: 90,

    name: 'Samsung Galaxy S23+',
    imgs: [S23_Plus_Black, S23_Plus_Cream, S23_Plus_Green, S23_Plus_Lilac],
    colors: [
      ColorProducts.black,
      ColorProducts.cream,
      ColorProducts.green,
      ColorProducts.lilac,
    ],
    price_256: '26,990,000đ',
    price_512: '29,990,000đ',
  },
  {
    widthPercent: 100,
    name: 'Samsung Galaxy S23 Ultra',
    imgs: [S23_Ultra_Black, S23_Ultra_Cream, S23_Ultra_Green, S23_Ultra_Lilac],
    colors: [
      ColorProducts.black,
      ColorProducts.cream,
      ColorProducts.green,
      ColorProducts.lilac,
    ],
    price_256: '31,990,000đ',
    price_512: '36,990,000đ',
    price_1t: '44,990,000đ',
  },
]
