import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';

const StyledHeader = styled.div`
    a {
        display: inline-block;
        margin: 0 1rem;
    }
`;

const Header = () => (
    <StyledHeader>
        Header
        <Link href="/">
            <a>Home</a>
        </Link>

        <Link href="/about">
            <a>About</a>
        </Link>
    </StyledHeader>
);

export default Header;