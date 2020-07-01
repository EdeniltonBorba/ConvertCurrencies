import React, { Component } from 'react';
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

export default class Convert extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currenciesA_value: "",
            currenciesB_value: 0,
        }
        this.converter = this.converter.bind(this);
    }

    converter() {
        let from_to = `${this.props.currenciesA}&source=${this.props.currenciesB}`;
        let url = `http://apilayer.net/api/live?access_key=c9aea1c61115f79a367ae98929ce1195&currencies=${from_to}&format=1`;
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let price = json.quotes.USDEUR;
                let currenciesB_value = (parseFloat(this.state.currenciesA_value) * price).toFixed(2)
                this.setState({ currenciesB_value })
            })

    }

    render() {
        return (
            <BoxBackground>
                <div className="converter">
                    <h2>{this.props.currenciesA} to {this.props.currenciesB}</h2>
                    <input type="text" onChange={(event) => { this.setState({ currenciesA_value: event.target.value }) }} className="form-control" placeholder="$" />
                    <input type="button" value="Convert" onClick={this.converter}></input>
                    <h2>{this.state.currenciesB_value} USD</h2>

                </div>
            </BoxBackground>

            /*
            <BoxBackground>
                <form>
                    <div className="form-row">
                        <InputField>
                            <div className="form-group">
                                <Name>
                                    <label for="inputCity">Amount</label>
                                </Name>
                                <Background>
                                    <input type="text" onChange={(event) => { this.setState({ coinA_value: event.target.value }) }} className="form-control" id="inputAmount" placeholder="$" />
                                </Background>
                            </div>
                        </InputField>
                        <DropdownFrom>
                            <div className="form-group">
                                <Name>
                                    <label for="inputState">From</label>
                                </Name>
                                <Background>
                                    <select name='currencies' id="from" className="form-control">
                                        <option selected>{this.props.value}</option>
                                        <option value='CAD' title='Canadian Dollar'>CAD</option>
                                        <option value='EUR' title='Euro'>EUR</option>
                                        <option value='GBP' title='British Pound Sterling'>GBP</option>
                                        <option value='PLN' title='Polish Zloty'>PLN</option>
                                        <option value='USD' title='United States Dollar'>USD</option>
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
                                    <select name='currencies' id="to" className="form-control">
                                        <option selected>{this.props.value}</option>
                                        <option value='CAD' title='Canadian Dollar'>CAD</option>
                                        <option value='EUR' title='Euro'>EUR</option>
                                        <option value='GBP' title='British Pound Sterling'>GBP</option>
                                        <option value='PLN' title='Polish Zloty'>PLN</option>
                                        <option value='USD' title='United States Dollar'>USD</option>
                                    </select>
                                </Background>
                            </div>
                        </DropdownTo>
                        <input type="button" value="Convert" onClick={this.converter}></input>
                        <h2>{this.state.coinB_value}</h2>
                        <ButtonConvert />
                    </div>
                </form>
            </BoxBackground>
            */

        )

    }
}