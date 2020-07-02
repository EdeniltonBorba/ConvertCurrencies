import styled from 'styled-components';

export const BoxBackground = styled.div`
height: 128px;
width: 905px;
border-radius: 15px;
background-color: #FFF;
box-shadow: 0 0 50px 0 rgba(0,0,0,0.2);
margin-left: 60px;
margin-top: 336px;
position: absolute;
display: flex;
`;

export const InputField = styled.div`
  height: 64px;
  width: 200px;
  margin-left: 40px;
  margin-top: 28px;
`;

export const DropdownFrom = styled.div`
  height: 64px;
  width: 200px;
  margin-left: 24px;
  margin-top: 28px;
  select {
    background-color:rgba(54,58,62,0.08);
    border: none;
    border-radius: 8px;
  }
`;

export const Switcher = styled.div`
img {
  height: 12px;
  width: 12px;
  margin-left: 16px;
  margin-top: 67px;
}
`;

export const DropdownTo = styled.div`
  height: 64px;
  width: 200px;
  margin-left: 16px;
  margin-top: 28px;
  select {
    background-color:rgba(54,58,62,0.08);
    border: none;
    border-radius: 8px;
  }
`;


export const Name = styled.div`
  height: 14px;
  width: 43px;
  color: #363A3E;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 14px;
  margin-left: 8px;
`;

export const Background = styled.div`
  height: 40px;
  width: 200px;
  border-radius: 8px;
  margin-top: 10px;  
  input {
    background-color:rgba(54,58,62,0.08);
    border: none;
    border-radius: 8px;
  }
`;

export const Button = styled.div`
input {
  height: 40px;
  width: 117px;
  border-radius: 8px;
  background-color: #FF4F54;
  margin-left: 40px;
  margin-top: 52px; 
  color: #FFF;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  border: none;
}
`;

export const ResultStyle = styled.div`
h4 {
  height: 23px;
  width: 400px;
  color: #363A3E;
  font-size: 20px;
  line-height: 23px;
  margin-left:110px;
  margin-top:528px;
}
h1 {
  height: 47px;
  width: 400px;
  color: #363A3E;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  margin-left:110px;
}
`;
