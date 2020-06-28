import React from 'react';
import {
    BoxBackground,
    InputField,
    Name,
    Background,
} from "./styles.js";
import ButtonConvert from '../ButtonConvert/index.js';

export default function Box() {
    return (
        <BoxBackground>

            <InputField>
                <Name>
                    Amount
                   </Name>
                <Background>

                </Background>
            </InputField >
            <InputField>
                <Name>
                    From
                   </Name>
                <Background>

                </Background>
            </InputField >
            <InputField>
                <Name>
                    To
                   </Name>
                <Background>

                </Background>
            </InputField >
            <ButtonConvert />
        </BoxBackground >
    );
}
