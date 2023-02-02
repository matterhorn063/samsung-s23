import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: black;

  .banner {
    object-fit: contain;
    object-position: top;
    width: 100%;
    padding-bottom: 32px;
  }

  .banner_full {
    display: block;
  }

  .banner_mobile {
    display: none;
  }

  @media (max-width: 1080px) {
    .banner_full {
      display: none;
    }

    .banner_mobile {
      display: block;
    }
  }
`
