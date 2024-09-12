import React, { useContext } from 'react';
import Select, { components, MenuListProps, GroupBase } from 'react-select';
import ReactLoading from 'react-loading';
import { CurrentTokenizerOptionsContext, TokenizerOption, TokenizerValue } from './currentTokenizerOptions';

const menuHeaderStyle = {
  padding: '8px 12px',
  color: 'white',
};

// Modified MenuList to show the grouped TokenizerOption and render the TokenizerValue items for selection.
const MenuList = (
  props: MenuListProps<TokenizerValue, false, GroupBase<TokenizerOption>>
) => (
  <components.MenuList {...props}>
    {props.children}
  </components.MenuList>
);

export const SelectTokenizer = () => {
  const { tokenizers, selectedTokenizer, setSelectedTokenizer } = useContext(
    CurrentTokenizerOptionsContext
  );

  const handleTokenizerChange = (selectedOption: TokenizerValue | null) => {
    if (selectedOption) {
      setSelectedTokenizer(selectedOption.value);
    }
  };
  if (tokenizers[0].label === "") {
    return <ReactLoading />;
  }

  const groupedOptions = tokenizers.map((tokenizer) => ({
    label: tokenizer.label,
    options: tokenizer.options,
  }));

  const selectedOption = tokenizers
    .flatMap((tokenizer) => tokenizer.options)
    .find((option) => option.value === selectedTokenizer) || null;

  return (
    <Select<TokenizerValue, false, GroupBase<TokenizerOption>>
      defaultValue={selectedOption}
      options={groupedOptions}
      components={{ MenuList }}
      getOptionLabel={(option) => option.value}
      getOptionValue={(option) => option.value} 
      onChange={handleTokenizerChange}
      isSearchable={true}
    />
  );
};

