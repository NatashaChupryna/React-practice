import { PureComponent } from 'react';
import { ReaderDiv, Button } from './Reader.styled';

const LS_KEY = 'reader_item_index';

export class Reader extends PureComponent {
  state = {
    index: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  componentDidMount() {
    const savedIndex = localStorage.getItem(LS_KEY);
    if (savedIndex) {
      this.setState({ index: Number(savedIndex) });
    }
  }
  // onPrevBtn = () => {
  //     this.setState( prevState => ({
  //         index : prevState.index - 1
  //     }))
  // }

  // onNextBtn = () => {
  //     this.setState( prevState => ({
  //         index : prevState.index + 1
  //     }))
  // }

  changeIndex = value => {
    this.setState(prevState => ({ index: prevState.index + value })); //замість onPrevBtn i onNextBtn
  };

  render() {
    const currentItem = this.props.items[this.state.index];
    const totalItems = this.props.items.length;
    return (
      <ReaderDiv>
        <section>
          <Button
            type="button"
            onClick={() => this.changeIndex(-1)}
            disabled={this.state.index === 0}
          >
            &#10094;
          </Button>
          <Button
            type="button"
            onClick={() => this.changeIndex(1)}
            disabled={this.state.index + 1 === totalItems}
          >
            &#10095;
          </Button>
        </section>
        {/* &#10095; &#10094;- arrow sign */}

        <p>
          {this.state.index + 1}/{totalItems}
        </p>

        <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article>
      </ReaderDiv>
    );
  }
}
