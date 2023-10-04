import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A React Developer",
        imgSrc:
          "https://images.pexels.com/photos/7289412/pexels-photo-7289412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profession: "Software Engineer",
      },
      show: false,
      mountedTime: null,
    };
  }

  componentDidMount() {
    this.setState({ mountedTime: new Date().toLocaleTimeString() });

    // Set up an interval to update the mountedTime every second
    this.interval = setInterval(() => {
      this.setState({ mountedTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Component Mounted Time: {mountedTime}</p>
      </div>
    );
  }
}

export default App;
