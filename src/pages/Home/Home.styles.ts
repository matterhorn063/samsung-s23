import styled, { css } from 'styled-components'

export const Container = styled.div`
<<<<<<< HEAD
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
=======
  ${({ theme }) => css``}
>>>>>>> 51277461d5f8232858d006c56fe1647e590bc27d
`
