import * as React from 'react';
import AutoComplete from './AutoComplete';
import './style.css';
const itemArr = [
  { value: 1, label: 'Item One' },
  { value: 2, label: 'Item Two' },
  { value: 3, label: 'Item Three' },
  { value: 4, label: 'Item Four' },
  { value: 5, label: 'Item Five' },
  { value: 6, label: 'Item Six' },
  { value: 7, label: 'Item Seven' },
  { value: 8, label: 'Item Eight' },
  { value: 9, label: 'Item Nine' },
  { value: 10, label: 'Item Ten' },
  { value: 11, label: 'Item Eleven' },
  { value: 12, label: 'Item twelve' },
];
export default function App() {
  return (
    <div>
      <h1>Typeahead Component</h1>
      <div style={{ width: '50%' }}>
        <AutoComplete list={itemArr} />
      </div>
    </div>
  );
}
