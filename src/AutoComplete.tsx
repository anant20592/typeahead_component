import * as React from 'react';

export interface ListItemI {
  value: number | string;
  label: string;
}

export interface AutoCompleteProps {
  list: ListItemI[];
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  list,
}: AutoCompleteProps) => {
  const [opened, setOpened] = React.useState<boolean>(true);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [selectedValues, setSelectedValues] = React.useState<ListItemI[]>([]);
  const [optionList, setOptionList] = React.useState<ListItemI[]>(list);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setOptionList(
      list.filter((item) =>
        item.label.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleListItem = (selected: ListItemI) => {
    setSelectedValues([...selectedValues, selected]);
  };

  return (
    <div>
      <div
        style={{
          border: '1px solid',
          padding: '1px 8px',
          width: '100%',
          display: 'flex',
        }}
      >
        {selectedValues.map((item) => (
          <p>{item.label}</p>
        ))}
        <input
          type="text"
          style={{ marginLeft: '3px', border: 'none', flex: '1 1 auto' }}
          onChange={handleChange}
          value={inputValue}
        />
        <span style={{ marginRight: '8px' }}>^</span>
      </div>
      {opened && (
        <div style={{ border: '1px solid' }}>
          <ul>
            {optionList.map((item) => (
              <li
                style={{ listStyle: 'none' }}
                key={item.value}
                onClick={() => handleListItem(item)}
              >
                {item.label}
              </li>
            ))}
            {/* <li style={{ listStyle: 'none' }}>Item 2</li>
            <li style={{ listStyle: 'none' }}>Item 3</li>
            <li style={{ listStyle: 'none' }}>Item 4</li>
            <li style={{ listStyle: 'none' }}>Item 5</li>
            <li style={{ listStyle: 'none' }}>Item 6</li>
            <li style={{ listStyle: 'none' }}>Item 7</li>
            <li style={{ listStyle: 'none' }}>Item 8</li>
            <li style={{ listStyle: 'none' }}>Item 9</li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
