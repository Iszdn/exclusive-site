import React, { Component } from 'react';
import './index.scss'

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: props.initialTime,
    };

    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTimer = () => {
    this.setState((prevState) => ({
      timeRemaining: prevState.timeRemaining - 1,
    }));

    if (this.state.timeRemaining === 0) {
      clearInterval(this.intervalId);
    }
  };

  render() {
    const { timeRemaining } = this.state;
    const days = Math.floor(timeRemaining / (24 * 60 * 60)); // günleri hesapla
    const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60)); // saatleri hesapla
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60); // dakikaları hesapla
    const seconds = timeRemaining % 60;

    return (
      <div className='timerrr'>
            <div className="crcle">
            <h1>{`${days}`}</h1>
             <p>Days</p> 
            </div>
            <div className="crcle">
            <h1>{`${hours}`}</h1>
             <p>Hours</p> 
            </div>
            <div className="crcle">
            <h1>{`${minutes}`}</h1>
             <p>Minutes</p> 
            </div>
            <div className="crcle">
            <h1>{`${seconds}`}</h1>
            <p>Seconds</p> 
            </div>
      </div>
    );
  }
}

// Örnek kullanım
function Time() {
  // 3 gün süresince geçen saniye sayısı hesaplaması
  const threeDaysInSeconds = 3 * 24 * 60 * 60;
  return <CountdownTimer initialTime={threeDaysInSeconds} />;
}

export default Time;
