import React from 'react';
import { Container, ButtonGoBack } from './styles';

export default function Board() {
    return (
        <>
            <Container>
                <img src={require('../../assets/image/logo.png')} alt="logo" />
                <ButtonGoBack>
                    <a href="/">
                        Go Back
                    </a>
                </ButtonGoBack>
            </Container>
        </>
    )
}