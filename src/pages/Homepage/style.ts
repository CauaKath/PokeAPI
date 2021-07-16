import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
};

export const Align = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #4F99DD;
  font-size: 40px;
  width: 700px;
  line-heigt: 56px;

  margin-top: 25px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 50px;
  width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    border: 2px solid #fff;
    border-right: 0;
    ${props => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    background: #4F99DD;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#4F99DD')}
    }
  }
`;

export const Error = styled.span`
  width: 700px;
  color: #c53030;
  margin-top: 8px;
`;

export const Card = styled.div`
  margin-top: 50px;

  border-radius: 5px;
  width: 100%;
  padding: 45px;
  display: flex;
  flex-direction: row;
`;

export const DivImg = styled.div`
  width: 250px
  height: 250px;
  margin-right: 48px;

  img {
    width: 220px;
    height: 220px;
    margin: 0 15px 0 15px;
  }
`;

export const Types = styled.div`
  width: 250px;
  height: 30px;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background: #c4c4c4;

    display: flex;
    align-items: center;
    justify-content: center;

    & + div {
      margin-left: 5px;
    }
  }
`;

export const DivInfo = styled.div`
  width: 300px;
  height: 220px;
  background: #4F99DD;
  border-radius: 5px;
  padding: 20px;

  display: flex;
  flex-direction: row;

  div {
    width: 130px;

    h4 {
      font-size: 16px;
      color: #fff;
      margin-bottom: 5px;
    }

    p {
      font-weight: bold;
      margin-bottom: 20px;
    }

    ul {
      list-style: none;
      font-weight: bold;

      li {
        & + li {
          margin-top: 5px;
        }
      }
    }
  }
`;

export const DivStats = styled.div`
  width: 350px;
  height: 220px;
  background: #E82F2F;
  border-radius: 5px;
  padding: 20px;
  margin-left: 20px;

  ul {
    list-style: none;

    li {
      display: flex;
      flex-direction: row;

      p {
        width: 35px;
        font-weight: bold;

        &:first-child {
          width: 70px;
        }
      }

      div {
        border-radius: 5px;
      }

      & + li {
        margin-top: 13px;
      }
    }
  }
`;
