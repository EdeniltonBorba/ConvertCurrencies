import React, { Component } from 'react';
import { Container, Names, Conversion } from './styles';

class ConversionHistory extends Component {
    render() {
        return (
            <>
                <Container>
                    <Names>
                        <ul>Date</ul>
                        <ul>From</ul>
                        <ul>To</ul>
                    </Names>
                    <Conversion>

                    </Conversion>
                </Container>
            </>
        )
    }
}

export default ConversionHistory;