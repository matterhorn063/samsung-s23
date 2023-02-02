import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  padding-top: 40px;
  margin-top: -8px;

  .content {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 712px) {
  }
`

export const Button = styled.div<{ bgColor: string }>`
  :hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
  animation: all 0.2s ease-in-out;
  transform-origin: 50% 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  padding-left: 48px;
  padding-right: 48px;
  padding-top: 12px;
  margin-left: 8px;
  margin-right: 8px;

  background-color: ${({ bgColor }) => bgColor};
  border-radius: 32px;

  .text {
    font-weight: 700;
    font-size: 20px;
    color: white;
    text-align: center;
    margin-bottom: 0px;
  }

  .desc-container {
    display: flex;

    .desc {
      font-weight: 400;
      font-size: 14px;
      margin-top: 2px;
      margin-right: 6px;
      color: white;
      text-align: center;
    }

    .price {
      font-weight: 700;
      font-size: 16px;
      color: white;
      text-align: center;
    }
  }
  cursor: pointer;
`
