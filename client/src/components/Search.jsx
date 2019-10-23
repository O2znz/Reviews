import React from 'react';
const styled = window.styled;

const Form = styled.form`
  width: 376px;
  height: 37px;
  box-sizing: border-box;
  border-radius: 4px;
  border-color: rgba(0,0,0,0.16);
  border-width: 1px;
  border-style: solid;
  margin-bottom: 8px;
  display: flex;
`;

const ViewIconContainer = styled.div`
  height: 14px;
  width: 14px;
`;

const Button = styled.button`
  border: none;
  border-color: transparent;
  background-color: transparent;
  padding-left: 8px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 376px;
  border: none;
  border-color: transparent;
  background-color: transparent;
  vertical-align: middle;
  padding: 6px 7px 6px 0px;
  font-size: 14px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  color: #484848;
  font-weight: 450;
  outline: none;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.searchValue(this.state.value);
    event.preventDefault();
  }

  render() {
    const viewIcon = 'm10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1';

    return (
      <Form onSubmit={this.handleSubmit}>
        <Button type="submit" onSubmit={this.handleSubmit}>
          <ViewIconContainer>
            <svg viewBox="0 0 24 24">
              <path d={viewIcon} fillRule="evenodd"></path>
            </svg>
          </ViewIconContainer>
        </Button>
        <Input placeholder="Search reviews" type="text" value={this.state.value} onChange={this.handleChange} />
      </Form>
    );
  }
}

export default Search;