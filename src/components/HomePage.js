import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: '',
      currentYear: ''
    };
  }

  componentDidMount() {
    this.updateDateTime();
    this.timerID = setInterval(
      () => this.updateDateTime(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateDateTime() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();
    this.setState({
      currentMonth,
      currentYear
    });
  }

  render() {
    const { currentMonth, currentYear } = this.state;

    return (
      <div>
        <h1>Homepage</h1>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currentMonth}</td>
              <td>{currentYear}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default HomePage;
