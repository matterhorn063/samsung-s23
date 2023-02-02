import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  padding-bottom: 32px;
  padding-top: 16px;

  .content {
    width: 100%;
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

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  .img {
    width: 100%;
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
    }
  }

  .label-price {
    margin-top: 16px;
    font-weight: 600;
    font-size: 20px;
  }

  .price-container {
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .price {
      font-weight: 400;
      line-height: 16px;
      font-size: 14px;
      text-align: center;
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
  margin-top: 16px;
  .text-buy {
    font-weight: 500;
    font-size: 16px;
    color: white;
    text-align: center;
  }

  background-color: #416445;
  border-radius: 20px;
  cursor: pointer;
`
