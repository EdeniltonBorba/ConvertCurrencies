import React from 'react';
import { UpperHalf, Headline, PickarLogoWhite } from './styles';
import Box from '../../components/Converter/index.js';
import ButtonHistory from '../../components/ButtonHistory/index.js';

export default function Board() {
    return (

        <UpperHalf>
            <PickarLogoWhite>
                pickar
            </PickarLogoWhite>
            <Headline>
                Convert currencies in real-time.
            </Headline>
            <Box />
            <ButtonHistory />
        </UpperHalf>
    )
}