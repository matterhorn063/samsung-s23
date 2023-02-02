import styled from 'styled-components'
import { SectionImageType } from './Section'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 32px;
  padding-top: 16px;
`

export const SectionContainer = styled.div<{ type: SectionImageType }>`
  display: flex;
  padding-top: 32px;
  justify-content: flex-start;
  padding-left: 5%;
  padding-right: 5%;
  flex-direction: ${({ type }) =>
    type === SectionImageType.left ? 'row' : 'row-reverse'};

  .img-container {
    width: 50%;
    .img {
      width: 100%;
    }
  }

  .info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    padding: 0px 64px;

    .title {
      color: #89d876;
      font-size: 36px;
      font-weight: 700;
      line-height: 34px;
      margin-bottom: 20px;
    }

    .subTitle {
      color: white;
      color: #89d876;
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .label {
      color: white;
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .desc {
      color: white;
      font-size: 18px;
      font-weight: 400;
      width: 90%;
      margin-bottom: 24px;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;

    .img-container {
      width: 100%;
      margin-bottom: 64px;
      .img {
        /* width: 100%; */
      }
    }

    .info {
      width: 100%;
      padding: 0px 64px;
      justify-content: center;
      align-items: center;
      margin-bottom: 16px;

      .title {
        font-size: 32px;
        text-align: center;
      }

      .subTitle {
        font-size: 28px;
        text-align: center;
      }

      .label {
        font-size: 26px;
        text-align: center;
      }

      .desc {
        font-size: 16px;
        width: 80%;
        text-align: center;
      }
    }
  }
`
