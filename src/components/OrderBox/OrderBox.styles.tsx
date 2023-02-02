import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    padding: ${theme.spacing[16]};
    margin-top: 32px;
    ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToSmall`
      padding: ${theme.spacing[10]};
    `}
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .sub-header-1 {
        margin-top: 8px;
        width: fit-content;
      }
      .sub-header-2 {
        margin-bottom: 24px;
      }
      h3 {
        max-width: 800px;
      }
      h6 {
        max-width: 750px;
        font-weight: 500;
        ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToSmall`
            max-width: 95vw;
            width: fit-content;
            line-break: auto;
        `}
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
    margin-bottom: 60px;
    width: 257px;
    height: 56px;
    border-radius: 28px;
    color: ${theme.colors.black};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    :hover {
      transform: scaleX(1.02);
    }
    :active {
      transform: translateY(-2px);
    }
    .button-text {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin: 0;
    }
    .loader {
      width: 18px;
      height: 18px;
      margin-left: 12px;
    }
    transition: all 0.2s ease-in-out;
  `}
`
