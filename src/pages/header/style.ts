import styled from 'styled-components';

export const Container = styled.div`
    background-color: #454545;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const Logo = styled.div`
    background-color: #778999;
    width: 8rem;
    height: 8rem;
    border-top-left-radius: .8rem;
    border-bottom-left-radius: .8rem;
`;

export const Menu = styled.div`
    ul {
        display: flex;
        gap: 2rem;
        align-items: center;
        flex-direction: row;
    }
    ul li a {
        color: #FFF;
        font-size: 1.5rem;
        font-weight: 600;
        padding: .8rem;
    }
`;

export const Form = styled.form`
    display: flex;
    gap: 2rem;
    align-items:center;

    .box {
        flex: 1;
        border-radius: .3rem;
        border: none;
        padding: .6rem;
        font-weight: 600;
        text-transform: none;
    }
    .button {
        border-radius: .3rem;
        border: none;
        padding: .6rem;
        cursor: pointer;
        background-color: #FFF;
        color: #333;
        font-weight: 600;
    }
`;

export const Image = styled.img`
     height: 100%;
     width: 100%;
     padding: 1rem;
     object-fit: cover;
`;