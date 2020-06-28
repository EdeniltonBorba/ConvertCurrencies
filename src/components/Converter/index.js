import React from 'react';
import {
    BoxBackground,
    InputField,
    DropdownFrom,
    Switcher,
    DropdownTo,
    Name,
    Background,
} from "./styles.js";
import ButtonConvert from '../ButtonConvert/index.js';

export default function Box() {
    return (
        <BoxBackground>
            <form>
                <div className="form-row">
                    <InputField>
                        <div className="form-group">
                            <Name>
                                <label for="inputCity">Amount</label>
                            </Name>
                            <Background>
                                <input type="text" className="form-control" id="inputAmount" placeholder="$" />
                            </Background>
                        </div>
                    </InputField>
                    <DropdownFrom>
                        <div className="form-group">
                            <Name>
                                <label for="inputState">From</label>
                            </Name>
                            <Background>
                                <select id="inputState" className="form-control">
                                    <option selected>EUR</option>
                                    <option>...</option>
                                </select>
                            </Background>
                        </div>
                    </DropdownFrom>
                    <Switcher>
                        <div className="form-group">
                            <img src={require('../../assets/image/Switcher.png')} alt="logo" />
                        </div>
                    </Switcher>
                    <DropdownTo>
                        <div className="form-group">
                            <Name>
                                <label for="inputZip">To</label>
                            </Name>
                            <Background>
                                <select id="inputState" className="form-control">
                                    <option selected>USD</option>
                                    <option>...</option>
                                </select>
                            </Background>
                        </div>
                    </DropdownTo>
                    <ButtonConvert />
                </div>
            </form>
        </BoxBackground>
    );
}
