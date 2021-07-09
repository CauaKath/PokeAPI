import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #4F99DD;
  font-size: 40px;
  max-width: 500px;
  line-heigt: 56px;

  margin-top: 15px;
`;

export const SearchBar = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

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

export const Card = styled.div`
  margin-top: 40px;
  max-width: 700px;

  border-radius: 5px;
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
`;

export const DivLeft = styled.div`
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

export const DivRight = styled.div`
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
