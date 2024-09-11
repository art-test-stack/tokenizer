import React, { useContext } from 'react';

import Select, { components, MenuListProps } from 'react-select';
import ReactLoading from 'react-loading';
import { CurrentTokenizerOptionsContext } from './currentTokenizerOptions';
import { CurrentSelectedTokenizerContext } from './selectedTokenizer';
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
  console.log("props:", props)
  return (
    <components.MenuList {...props}>
      <div style={menuHeaderStyle}>Custom Menu List</div>
      {props.children}
    </components.MenuList>
  );
};

export const SelectTokenizer = ( ) => {
  // const tokenizers = useContext(CurrentTokenizerOptionsContext);
  const { tokenizers, selectedTokenizer, setSelectedTokenizer } = useContext(
    // CurrentSelectedTokenizerContext
    CurrentTokenizerOptionsContext
  );
  
  const handleTokenizerChange = (e: any) => {
    console.log("handleTokenizerChange", e.target.value)
    setSelectedTokenizer(e.target.value);
  };
  console.log("tokenizers:", tokenizers)
  console.log("selected tokenizer:", selectedTokenizer)
  if (tokenizers[0].label == ""){return <ReactLoading/>}
  return <Select<string, false>
    defaultValue={selectedTokenizer}
    options={tokenizers}
    components={{ MenuList }}
    onChange={handleTokenizerChange}
  />
};