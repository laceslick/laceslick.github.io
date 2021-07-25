import React, { Component } from 'react';
import { Button, Container, Divider, Grid, Header, Input, Label, Placeholder, Segment } from 'semantic-ui-react';
import update from 'immutability-helper';

class StyledInput extends Component<{ name: string, onChange: any, value: any, content: string }, {}> {

  render() {
    return (
      <div style={{ width: '30%' }}>
        <Input fluid labeled labelPosition='left' type='number' name={this.props.name} onChange={this.props.onChange} value={this.props.value} >
          <Label style={{ width: '50%' }} content={this.props.content} />
          <input step='0.01' />
        </Input>
      </div>
    );
  }
}

class CorruptionCalc extends Component<{}, { mod: number, c: number, mon: number, calcMon: number }>  {
  constructor(props: any) {
    super(props)

    this.state = {
      mod: 0,
      c: 0,
      mon: 0,
      calcMon: 0
    }

    this.onChange = this.onChange.bind(this);
    this.calculateCoT = this.calculateCoT.bind(this);
  }

  onChange(e: any, d: any) {
    let newData: any;
    if (d.name === 'c') {
      if (d.value > 100) {
        newData = update(this.state, { [d.name]: { $set: 100 } });
      } else if (d.value < 0) {
        newData = update(this.state, { [d.name]: { $set: 0 } });
      } else {
        newData = update(this.state, { [d.name]: { $set: d.value } });
      }
    // } else if (d.name === 'mod') {
    //   if (d.value > 0) {
    //     newData = update(this.state, { [d.name]: { $set: 0 } });
    //   } else {
    //     newData = update(this.state, { [d.name]: { $set: d.value } });
    //   }
    } else {
      newData = update(this.state, { [d.name]: { $set: d.value } });
    }



    this.setState(newData);
  }

  calculateCoT(mod: number, c: number, mon: number) {

    let modifier: number = mod;
    let corruption: number = c;
    let months: number = mon;
    let newData: any;
    if (corruption > mod*20)
    {
      for (
        let i: number = corruption * 1;
        i > 0 && i > (mod*20)+.5 ;
        i = i + ((i * 1 / -20) / 12) + (modifier * 1 / 12)
      ) {
        months++;
      }
      newData = update(this.state, { calcMon: { $set: months } });
    }
    else if (corruption < mod*20)
    {
      for (
        let i: number = corruption * 1;
        i < (mod*20)-.5;
        i = i + ((i * 1 / -20) / 12) + (modifier * 1 / 12)
      ) {
        months++;
      }
      newData = update(this.state, { calcMon: { $set: months } });
    }
    else{
    }



    this.setState(newData);
  }

  render() {
    return (
      <Container>
        <Segment inverted>
          <Header as='h2' content='Corruption Calculator' />
          <Divider />
          <Grid style={{ padding: '14px', paddingTop: '0px' }} >
            <Grid.Row>
              <StyledInput name='mod' value={this.state.mod} onChange={this.onChange} content='Modifier' />
            </Grid.Row>
            <Grid.Row>
              <StyledInput name='c' value={this.state.c} onChange={this.onChange} content='Corruption' />
            </Grid.Row>
            {/* <StyledInput name='mon' value={this.state.mon} onChange={this.onChange} content='Months' /> */}
            <Label content={'It will take ' + this.state.calcMon + ' months to reach equilibrium point, which is ' + this.state.mod*20 + ', within 0.5 corruption'} />
            <Button onClick={() => this.calculateCoT(this.state.mod, this.state.c, this.state.mon)} />
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default CorruptionCalc;
