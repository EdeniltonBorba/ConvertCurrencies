import React from 'react';
import { Container } from './styles';

export default function Board() {
    return (
        <>
            <Container>
                <img src={require('../../assets/image/logo.png')} alt="logo" />
            </Container>
        </>
    )
}