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
                        <div className="form-group col-md-6">
                            <Name>
                                <label for="inputCity">Amount</label>
                            </Name>
                            <Background>
                                <input type="text" className="form-control" id="inputAmount" placeholder="$" />
                            </Background>
                        </div>
                    </InputField>
                    <DropdownFrom>
                        <div className="form-group col-md-4">
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
                            <div className="form-check">
                                <img src={require('../../assets/image/Switcher.png')} alt="logo" />
                            </div>
                        </div>
                    </Switcher>
                    <DropdownTo>
                        <div className="form-group col-md-2">
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
                    <ButtonConvert>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </ButtonConvert>
                </div>
            </form>
        </BoxBackground>
    );
}
