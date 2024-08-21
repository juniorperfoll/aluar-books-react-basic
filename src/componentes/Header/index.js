import Logo from '../../componentes/Logo'
import OpcoesHeader from '../../componentes/OpcoesHeader';
import IconesHeader from '../../componentes/IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header