import React, { useContext } from 'react';

import Select, { components, MenuListProps } from 'react-select';
import ReactLoading from 'react-loading';
import { currentTokenizerOptions } from './currentTokenizerOptions';
import { currentSelectedTokenizer } from './selectedTokenizer';
// import { CurrentTokenizerOptionsProvider } from '@/app/page';

export interface TokenizerOption {
  label: string,
  options: string[]
}

const menuHeaderStyle = {
  padding: '8px 12px',
  // background: colourOptions[2].color,
  color: 'white',
};

const MenuList = (
  props: MenuListProps<string>
) => {
  return (
    <components.MenuList {...props}>
      <div style={menuHeaderStyle}>Custom Menu List</div>
      {props.children}
    </components.MenuList>
  );
};

export const SelectTokenizer = ( ) => {
  // export const SelectTokenizer = ( tokenizers: TokenizerOption[] ) => {
  // console.log('data here', tokenizers);
  
  const [tokenizers, setTokenizers] = useContext(currentTokenizerOptions);
  const [selectedTokenizer, setSelectedTokenizer] = useContext(currentSelectedTokenizer);
  
  const handleTokenizerChange = (e: any) => {
    setSelectedTokenizer(e.target.value);
  };
  // console.log("select tokenizer:", tokenizers)
  if (tokenizers === undefined){return <ReactLoading/>}
  return <Select<string, false>
    defaultValue={selectedTokenizer}
    options={tokenizers}
    components={{ MenuList }}
    onChange={handleTokenizerChange}
  />
};