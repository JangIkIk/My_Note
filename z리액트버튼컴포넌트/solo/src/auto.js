import { useState, useEffect } from 'react';
import styled from 'styled-components';

const deselectedOptions = [
  'rustic',
  'antique',
  'vinyl',
  'vintage',
  'refurbished',
  '신품',
  '빈티지',
  '중고A급',
  '중고B급',
  '골동품'
];

const boxShadow = '0 4px 6px rgb(32 33 36 / 28%)';
const activeBorderRadius = '1rem 1rem 0 0';
const inactiveBorderRadius = '1rem 1rem 1rem 1rem';

export const InputContainer = styled.div`
  margin-top: 8rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: ${activeBorderRadius}; 
  z-index: 3;
  box-shadow: 0;

  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

export const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 3;

  > li:hover {
    background-color: lightgray;
    }  

  > li {
    padding: 0 1rem;

    &.selected {
      background-color: lightgray;
    }
  }
`;

export const Autocomplete = () => {
  const [hasText, setHasText] = useState(false); //input값의 유무 상태
  const [inputValue, setInputValue] = useState('');//input값의 상태
  const [options, setOptions] = useState(deselectedOptions);//option의 상태는 input값을 포함하는 autocomplete 추천 항목 리스트를 확인하기 위함
  const [selected, setSelected] = useState(-1);//키보드로 option 선택할때 필요한 selected상태

  useEffect(() => { 
    if (inputValue === '') { //처음 렌더링 됐을 때의 상태와, input값을 모두 지워줬을 때
      setHasText(false); //input값의 유무상태를 false(없음)으로
      setOptions([]);//option은 빈배열로 만들어서 아래에 리스트가 나타나지 않도록 구현
    }

    if(inputValue !== ''){ //input값을 입력하면
    setOptions(deselectedOptions.filter((el) => { //입력된 값을 포함하는 option만 걸러준 상태로 변경한다.
      return el.includes(inputValue)
      })
    )
  }
  }, [inputValue]);

  const handleInputChange = (event) => { //input값 변경 시 발생되는 이벤트 핸들러. 
    setInputValue(event.target.value); //inputValue를 입력된 값으로 바꿔준다.
    setHasText(true); //input값 유무상태도 당연히 true(있음)으로 바꿔준다.
  };

  const handleDropDownClick = (clickedOption) => { //DropDown 컴포넌트의 li엘리먼트에서 onClick으로 이벤트 핸들러 함수에 option을 전달해주고 있다.
    setInputValue(clickedOption) //전달받은 option으로 inputValue를 변경해준다.
  };

  const handleDeleteButtonClick = (event) => { //x 버튼 누르면
    setInputValue(""); //input입력창을 비워준다.
  };

  const handleKeyUp = (event) => { //option을 키보드로 선택할 수 있게해주는 핸들러 함수
    if(hasText){ //input에 값이 있을때
      if(event.key === 'ArrowDown' && options.length - 1 > selected){ 
        setSelected(selected + 1);
      }
      //options.length에 -1을 해주는 이유는 selected의 최대값을 맞춰주기 위해서이다.
      //예를들어 밑에 option이 2개가 나왔다고 가정했을 때, selected값이 최대 1까지 변할 수 있게 해줘야한다. 
      //'ArrowDown'키를 누르면 selected는 0이 되고, 한번 더 누르면 1이 되고, 그 다음은 더이상 옵션이 없기 때문에 키가 안먹히게 해주는 것이다.

      if(event.key === 'ArrowUp' && selected >= 0){ //처음 조건을 이해했다면 여기는 자연스럽게 이해될 것이다.
        setSelected(selected - 1);
      }
      if(event.key === 'Enter' && selected >= 0){ //Enter키로 option 선택
        handleDropDownClick(options[selected])
        setSelected(-1); //Enter키를 눌러서 선택이 되면 다시 selected는 -1이 되야한다.
      }
    }
  }

  return (
    <div className='autocomplete-wrapper'>
      <InputContainer >
        <input type="text" 
          value={inputValue} 
          defaultValue={inputValue} 
          onChange={handleInputChange}
          onKeyUp={handleInputChange}>
        </input>
        <div className='delete-button' 
             onClick={handleDeleteButtonClick}
             >&times;</div>
      </InputContainer>
      {/* //input에 값이없으면 DropDown이 보이지 않게 해준 것이다. */}
      {hasText && <DropDown options={options} 
                            handleComboBox={handleDropDownClick}
                            selected={selected}/>}
      {/* //위의 코드는 다음과 같다. */}
      {/*hasText ? <DropDown options={options}
                             handleComboBok={handleDropDownClick}
                             selected={selected}/>
                 : null */}
    </div>
  );
};

export const DropDown = ({ options, handleComboBox, selected }) => {
  return (
    <DropDownContainer>
        {options.map((option, idx) => {
          return <li 
                   key={idx}
                   onClick={() => handleComboBox(option)}
                   className={selected === idx ? 'selected' : ''}
                   >{option}</li>
        })}
    </DropDownContainer>
  );
};