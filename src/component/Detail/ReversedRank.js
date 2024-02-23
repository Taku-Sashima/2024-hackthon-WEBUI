import React from 'react';

export default function ReversedRank(props) {
  const changeText = () => {
    props.isReversed ? props.setIsReversed(false) :props.setIsReversed(true);
  };

  return (
    <div className="detailtop" onClick={changeText}>
      {props.isReversed ? '似てない匂いの商品' : '似た匂いの商品'}
    </div>
  );
}
