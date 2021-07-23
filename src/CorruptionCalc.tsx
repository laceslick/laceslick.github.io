import React, { Component } from 'react';
import { Button, Container, Divider, Header, Input, Label, Placeholder, Segment } from 'semantic-ui-react';
import update from 'immutability-helper';

class CorruptionCalc extends Component<{}, { mod: number, c: number, mon: number }>  {
  constructor(props: any) {
    super(props)

    this.state = {
      mod: 0,
      c: 0,
      mon: 0
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e: any, d: any) {
    let newData: any = update(this.state, { [d.name]: { $set: d.value } });

    this.setState(newData);
  }

  calculateCoT(mod: number, c: number, mon: number) {

    let modifier: number = mod;
    let corruption: number = c;
    let months: number = mon;

    for (
      let i: number = corruption*1;
      i > 0;
      i = i + ((i*1 / -20) / 12) + (modifier*1 / 12)
    ) {
      months++;
    }
    console.log('modifier: ' + modifier);
    console.log('corruption: ' + corruption);
    console.log('months: ' + months);
    console.log(c + ' ' + mon);
    return (months)
  }

  render() {
    return (
      <Container>
        <Segment inverted>
          <Header as='h2' content='Corruption Calculator' />
          <Divider />
          <Input type='number' name='mod' onChange={this.onChange} value={this.state.mod} />
          <Input type='number' name='c' onChange={this.onChange} value={this.state.c} />
          <Input type='number' name='mon' onChange={this.onChange} value={this.state.mon} />
          <Label content={'It will take ' + this.calculateCoT(this.state.mod, this.state.c, this.state.mon) + ' months to burn to the ground'} />
          <Button onClick={() => console.log(this.state)} />
        </Segment>
      </Container>
    );
  }
}

export default CorruptionCalc;
