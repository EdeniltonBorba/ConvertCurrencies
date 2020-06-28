import React from 'react';
import { UpperHalf, Headline, } from './styles';
import Box from '../../components/Converter/index.js';
import ButtonHistory from '../../components/ButtonHistory/index.js';
import Global from '../../styles/global.js';
import Result from '../../components/Result/index.js';



export default function Board() {
    return (
        <>
            <UpperHalf>
                <img src={require('../../assets/image/logo.png')} alt="logo" />
                <Headline>
                    Convert currencies in real-time.
                </Headline>
                <Box />
                <ButtonHistory />
                <Result />
            </UpperHalf>
            <Global />
        </>
    )
}