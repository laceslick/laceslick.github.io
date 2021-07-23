import React, { Component } from 'react';
import { Container, Placeholder, Segment } from 'semantic-ui-react';

class CorruptionCalc extends Component {


  render() {

    return(
      <Container>
        <Segment inverted>
          <Placeholder>
            <Placeholder.Image style={{width:'400px', height:'400px'}}>

            </Placeholder.Image>
          </Placeholder>
        </Segment>
      </Container>
    );

  }
}

export default CorruptionCalc;
