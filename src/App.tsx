import React, { Component } from 'react';
import styled from 'styled-components';
import { Howl } from 'howler';
import se from './res/se.mp3';

const sound = new Howl({ src: se });

const Container = styled.div`
  text-align: center;
`;

const Header = styled.h1``;

const Counter = styled.h2``;

const Button = styled.button``;

interface Props {}
interface State {
  33: number;
  4: number;
}

export default class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      33: 0,
      4: 0,
    };
  }

  onClickHandler = () => {
    this.setState(prev => ({ 33: prev[33] + 33, 4: prev[4] + 4 }));
    sound.play();
  };

  render() {
    return (
      <Container>
        <Header>33-4 Counter</Header>
        <Counter>{`${this.state[33]}-${this.state[4]}`}</Counter>
        <Button onClick={this.onClickHandler}>Click!</Button>
      </Container>
    );
  }
}
