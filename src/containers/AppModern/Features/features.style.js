import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  padding: 105px 0 40px;
  overflow: hidden;
  @media only screen and (max-width: 1440px) {
    padding: 50px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -12px 0 -30px;

  > div {
    width: calc(100% / 4 - 34px);
    margin: 38px 0 30px;
    @media only screen and (max-width: 1366px) {
      width: calc(100% / 4 - 30px);
    }
    @media only screen and (max-width: 991px) {
      width: calc(100% / 2 - 30px);
    }
    @media only screen and (max-width: 767px) {
      width: calc(100% / 2 - 15px);
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
      margin-top: 15px;
    }
  }

  .feature__block {
    align-items: flex-start;
    flex-direction: column;
    @media only screen and (max-width: 767px) {
      align-items: center;
      text-align: center;
    }
    .icon__wrapper {
      position: relative;
      @media only screen and (max-width: 1366px) {
        img {
          height: 72px;
        }
      }
      @media only screen and (max-width: 480px) {
        img {
          height: 70px;
        }
      }
      i {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        color: var(--color);
        transition: all 0.5s cubic-bezier(0.75, -0.5, 0, 1.75);
        &.plus {
          top: 0;
          left: 0;
          transform: translate(20px, 20px) scale(0.1) rotate(-180deg);
        }
        &.circle {
          top: 0;
          right: 0;
          transform: translate(-20px, 20px) scale(0.1) rotate(-180deg);
        }
        &.star {
          bottom: -5px;
          left: calc(50% - 8px);
          transform: translate(0, -20px) scale(0.1) rotate(-180deg);
        }
      }
    }
    .content__wrapper {
      padding-left: 0;
      margin-top: -5px;
      @media only screen and (max-width: 1366px) {
      }
      @media only screen and (max-width: 767px) {
      }
      h3 {
        color: ${themeGet('colors.heading')};
        font-size: 19px;
        line-height: 30px;
        font-weight: 500;
        margin-bottom: 15px;
        @media only screen and (max-width: 1366px) {
          font-size: 18px;
          margin-bottom: 5px;
        }
      }
      p {
        color: ${themeGet('colors.textColor')};
        font-size: 15px;
        line-height: 28px;
        margin: 0;
      }
    }
    &:hover {
      .icon__wrapper {
        cursor: pointer;
        i {
          opacity: 1;
          visibility: visible;
          &.plus {
            transform: translate(-4px, -4px) scale(1) rotate(180deg);
          }
          &.circle {
            transform: translate(4px, -4px) scale(1) rotate(180deg);
          }
          &.star {
            transform: translate(0, -4px) scale(1) rotate(180deg);
          }
        }
      }
    }
  }
`;

export default SectionWrapper;
