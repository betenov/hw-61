import React from 'react';
interface Props {
  name:string;
  onClick:React.MouseEventHandler
}


const CountryBlock:React.FC<Props> = ({name, onClick}) => {
  return (
    <div>
      <li onClick={onClick}>
        <a>
          {name}
        </a>
      </li>
    </div>
  );
};

export default CountryBlock;