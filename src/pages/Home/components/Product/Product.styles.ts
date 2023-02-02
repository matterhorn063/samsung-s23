import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  padding-bottom: 48px;
  padding-top: 24px;

  .content {
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: 712px) {
    .content {
      flex-direction: column;
    }
  }
`

export const ItemContainer = styled.div<{ currentIndex: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToSmall`
    margin-top: 20px;
  `}

  .img {
    width: 100%;
    :hover {
      transform: scale(1.08);
      transition: all 0.2s ease-in-out;
    }
  }

  .name {
    margin-top: 8px;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
  }

  .color-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    .color {
      width: 24px;
      height: 24px;
      border-radius: 12px;
      margin-left: 4px;
      margin-right: 4px;
      :hover {
        transform: scale(1.2);
        opacity: 0.8;
      }
      transition: all 0.2s ease-in-out;
    }
  }

  .label-price {
    margin-top: 16px;
    font-weight: 600;
    font-size: 20px;
  }

  .price-container {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .price {
      font-weight: 500;
      line-height: 120%;
      font-size: 16px;
      text-align: center;
      .price-amount {
        font-weight: 700;
        line-height: 120%;
        font-size: 18px;
        text-align: center;
        color: #487a4f;
      }
    }
  }
`

export const ButtonBuy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  padding-left: 24px;
  padding-right: 24px;
  height: 48px;
  margin-top: 22px;

  .text-buy {
    font-weight: 500;
    font-size: 18px;
    color: white;
    text-align: center;
  }

  background: linear-gradient(45deg, #92d38c 0%, #51965c 30%, #416445 100%);
  border-radius: 20px;
  cursor: pointer;

  :hover {
    transform: scaleX(1.02);
  }

  :active {
    transform: translateY(-2px);
  }

  transition: all 0.2s ease-in-out;

  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToSmall`
    width: 65vw;
  `}
`
