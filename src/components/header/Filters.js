import styled from 'styled-components';
import { useState } from 'react';

export function Filters({ fetchData, setUrl, setPage }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  let filteredURL = 'https://rickandmortyapi.com/api/character/?';

  const applyFilters = async () => {
    setPage(0);
    if (status && !filteredURL.includes(status)) {
      filteredURL += status;
    }
    if (gender && !filteredURL.includes(gender)) {
      filteredURL += gender;
    }
    if (species && !filteredURL.includes(species)) {
      filteredURL += species;
    }
    if (type && !filteredURL.includes('type=')) {
      filteredURL = 'https://rickandmortyapi.com/api/location/?';
      filteredURL += `&type=${type}`;
    }
    if (name && !filteredURL.includes('name=')) {
      filteredURL += `&name=${name}`;
    }
    setUrl(filteredURL);
    await fetchData(filteredURL);
  };
  const resetFilters = () => {
    setName('');
    setGender('');
    setType('');
    setStatus('');
    setGender('');
    setSpecies('');
    document.querySelector('#name-input').value = '';
    document.querySelector('#type-input').value = '';
    const test = document.querySelectorAll('.select');
    test.forEach((e) => {
      for (let i = 0; i < e.options.length; i++) {
        e.options[0].selected = true;
      }
    });
    setUrl('https://rickandmortyapi.com/api/character/?');
    setPage(0);
  };

  return (
    <FiltersContainer>
      <StyledSelect
        className="select"
        onChange={(e) => {
          if (e.target.value.length > 0) {
            setStatus(`&status=${e.target.value}`);
          }
        }}
        defaultValue={''}
      >
        <option value="" disabled hidden>
          Status
        </option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknow">unknown</option>
      </StyledSelect>
      <StyledSelect
        className="select"
        onChange={(e) => {
          if (e.target.value.length > 0) {
            setGender(`&gender=${e.target.value}`);
          }
        }}
        defaultValue={''}
      >
        <option value="" disabled hidden>
          Gender
        </option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </StyledSelect>
      <StyledSelect
        className="select"
        onChange={(e) => {
          if (e.target.value.length > 0) {
            setSpecies(`&species=${e.target.value}`);
          }
        }}
        defaultValue={''}
      >
        <option value="" disabled hidden>
          Species
        </option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Mythological%20Creature">Mythological Creature</option>
        <option value="Poopybutthole">Poopybutthole</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Disease">Disease</option>
        <option value="Cronenberg">Cronenberg</option>
        <option value="Robot">Robot</option>
        <option value="unknow">unknow</option>
      </StyledSelect>
      <StyledInput
        id="name-input"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></StyledInput>
      <StyledInput
        id="type-input"
        placeholder="Type"
        onChange={(e) => {
          setType(e.target.value);
        }}
      ></StyledInput>
      <ButtonsContainer>
        <ApplyButton onClick={applyFilters}>Apply</ApplyButton>
        <ResetButton onClick={resetFilters}>Reset</ResetButton>
      </ButtonsContainer>
    </FiltersContainer>
  );
}

const FiltersContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 180px);
  grid-template-rows: repeat(2, 40px);
  gap: 10px;

  @media (max-device-width: 950px) {
    grid-template-columns: repeat(3, 150px);
  }

  @media (max-device-width: 530px) {
    grid-template-columns: 240px;
    grid-template-rows: repeat(6, 40px);
    justify-content: center;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  background-color: #263750;
  border: 1px solid #83bf46;
  border-radius: 8px;
  color: #b3b3b3;
  padding-inline: 16px;

  &:hover,
  &:active {
    background-color: #346;
    border: 1px solid #83bf46;
  }

  option {
    border-radius: 7px 7px 0 0;
    background: #fff;
    color: black;
    width: 180px;
    height: 40px;

    &:hover {
      background: rgba(131, 191, 70, 0.2);
      outline: none;
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: #263750;
  border: 1px solid #83bf46;
  border-radius: 8px;
  color: #b3b3b3;
  padding-inline: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background-color: #346;
    border: 1px solid #83bf46;
  }

  &:active {
    background-color: #346;
    border: 1px solid #83bf46;
  }
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const ApplyButton = styled.button`
  width: 100%;
  height: 100%;
  border: 1px solid #83bf46;
  border-radius: 8px;
  background: transparent;
  color: #83bf46;

  &:hover {
    background: #83bf46;
    color: #fff;
    cursor: pointer;
  }
`;

const ResetButton = styled.button`
  width: 100%;
  height: 100%;
  border: 1px solid #ff5152;
  border-radius: 8px;
  background: transparent;
  color: #ff5152;

  &:hover {
    background: #ff5152;
    color: #fff;
    cursor: pointer;
  }
`;
