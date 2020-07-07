import React, { useState, useEffect } from 'react';
import { Container, ButtonGoBack } from './styles';
import ConversionHistory from '../../components/ConversionHistory/index.js';

export default function History() {
    /*
        const [conversion, setConversion] = useState([])
        const [formObject, setFormObject] = useState({})
    
        useEffect(() => {
            loadConcersion()
        }, [])
    */
    return (
        <>
            <Container>
                <img src={require('../../assets/image/logo.png')} alt="logo" />
                <ButtonGoBack>
                    <a href="/">
                        Go Back
                    </a>
                </ButtonGoBack>
                <ConversionHistory />
            </Container>
        </>
    )
}