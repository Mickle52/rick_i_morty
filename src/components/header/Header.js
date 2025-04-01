import styled from 'styled-components';
import { Logo } from './Logo';
import { Filters } from './Filters';
import { useData } from '../providers';

export function Header() {
  const { fetchData, setApiURL, setActivePage } = useData();

  return (
    <HeaderContainer>
      <Logo />
      <Filters
        fetchData={fetchData}
        setUrl={setApiURL}
        setPage={setActivePage}
      />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;

  @media (max-device-width: 950px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }

  @media (max-device-width: 530px) {
    display: flex;
    flex-direction: column;
  }
`;
