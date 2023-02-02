import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    padding: ${theme.spacing[16]};
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .sub-header-1 {
        margin-top: 4px;
      }
      .sub-header-2 {
        margin-bottom: 16px;
      }
      h3 {
        max-width: 800px;
      }
      h6 {
        max-width: 750px;
        font-weight: 500;
      }
      .field {
        width: 100%;
        font-size: 18px;
        margin-top: 4px;
        max-width: 650px;
        font-weight: 500;
        select,
        input {
          background-color: ${theme.colors.black};
          border: 1px solid ${theme.colors.white};
          border-radius: 8px;
          color: ${theme.colors.white};
        }
        input::placeholder {
          color: ${theme.colors.white};
        }
      }
    }
  `}
`

export const ButtonSubmit = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.white} !important;
    margin-top: 12px;
    width: 257px;
    height: 56px;
    border-radius: 28px;
    color: ${theme.colors.black};
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
    :hover {
      transform: scaleX(1.02);
    }
    :active {
      transform: translateY(-2px);
    }
    transition: all 0.2s ease-in-out;
  `}
`
