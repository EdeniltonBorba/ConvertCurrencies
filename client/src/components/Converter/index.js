import React, { Component } from 'react';
import {
    BoxBackground,
    InputField,
    DropdownFrom,
    Switcher,
    DropdownTo,
    Name,
    Background,
    Button,
    ResultStyle,
} from "./styles.js";
import api from '../../services/api';

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
            <>
                <BoxBackground>
                    <div className="converter">
                        <form>
                            <div className="form-row">
                                <InputField>
                                    <div className="form-group">
                                        <Name>
                                            <label for="inputCity">Amount</label>
                                        </Name>
                                        <Background>
                                            <input
                                                type="text"
                                                onChange={(event) => { this.setState({ currenciesA_value: event.target.value }) }}
                                                className="form-control"
                                                placeholder="1.00" />
                                        </Background>
                                    </div>
                                </InputField>
                                <DropdownFrom>
                                    <div className="form-group">
                                        <Name>
                                            <label for="inputState">From</label>
                                        </Name>
                                        <Background>
                                            <select
                                                name='currencies'
                                                id="from"
                                                className="form-control"
                                            >
                                                <option selected>{this.props.currenciesA}</option>
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
                                            <select
                                                name='currencies'
                                                id="to"
                                                className="form-control"
                                            >
                                                <option selected>{this.props.currenciesB}</option>
                                                <option value='CAD' title='Canadian Dollar'>CAD</option>
                                                <option value='EUR' title='Euro'>EUR</option>
                                                <option value='GBP' title='British Pound Sterling'>GBP</option>
                                                <option value='PLN' title='Polish Zloty'>PLN</option>
                                                <option value='USD' title='United States Dollar'>USD</option>
                                            </select>
                                        </Background>
                                    </div>
                                </DropdownTo>
                                <Button>
                                    <input type="button" value="Convert" onClick={this.converter}></input>
                                </Button>
                            </div>
                        </form>
                    </div>
                </BoxBackground>
                <ResultStyle>
                    <h4>1 EUR = </h4>
                    <h1>{this.state.currenciesB_value} USD</h1>
                </ResultStyle>

            </>
        )

    }
}