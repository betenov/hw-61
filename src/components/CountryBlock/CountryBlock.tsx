import React from 'react';
interface Props {
  name:string;
  onClick:React.MouseEventHandler;
}


const CountryBlock:React.FC<Props> = ({name, onClick,}) => {

  return (
    <>
      <li onClick={onClick}>
        {name}
      </li>
    </>
  );
};

export default CountryBlock;