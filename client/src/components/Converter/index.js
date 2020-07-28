import React, { Component, useState } from 'react';
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
import api from '../../services/api.js';


const [amount, setAmount] = useState('');
const [from, setFrom] = useState('');
const [to, setTo] = useState('');
const [value, setValue] = useState('');

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

    RegisterConversion() {
        const [amount, setAmount] = useState('');
        const [from, setFrom] = useState('');
        const [to, setTo] = useState('');
        const [value, setValue] = useState('');

        async function handleSubmit() {

            const data = {
                conversion_value: amount,
                conversion_currency: from,
                converted_value: to,
                converted_currency: value
            }
            if (amount !== '' && from !== '' && to !== '' && value !== '') {
                const response = await api.post('/api/conversion')

                if (response.status === 200) {
                    window.location.href = '/history'
                } else {
                    alert('error registering the conversion');
                }
            } else {
                alert('please, fill in the data');
            }
        }
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
                                                required
                                                id="amount"
                                                name="amount"
                                                label="Amount"
                                                type="text"
                                                value={amount}
                                                onChange={e => setAmount(e.target.value)}
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
                                                required
                                                name='from'
                                                id="from"
                                                label="from"
                                                type="text"
                                                value={from}
                                                onChange={e => setFrom(e.target.value)}
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
                                                required
                                                name='to'
                                                id="to"
                                                label="To"
                                                type="text"
                                                value={to}
                                                onChange={e => setTo(e.target.value)}
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
                    <Button
                        required
                        name='value'
                        id="value"
                        label="Value"
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        className="form-control"
                    >Save</Button>
                </ResultStyle>
            </>
        )

    }
}