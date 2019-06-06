import React, { Component } from "react";
// import Calendar from "react-calendar";
import img from './images/whatsapp.png'
import img1 from './images/dollor.png'

class Campaigns extends Component {
  constructor(props) {
    super();
    this.state = {
      campaignData: [
        {
          id: 1,
          date: "2019/10/12",
          campaign: "test whatsapp us",
          view: "view pricing",
          actions: "schedule plan"
        },
        {
          id: 2,
          date: "2019/06/06",
          campaign: "super jewels quest",
          view: "view pricing",
          actions: "schedule plan"
        },
        {
          id: 3,
          date: "2019/06/06",
          campaign: "mole slayer",
          view: "view pricing",
          actions: "schedule plan"
        },
        {
          id: 4,
          date: "2019/06/06",
          campaign: "dsghf aut autem",
          view: "view pricing",
          actions: "schedule plan"
        },
        {
          id: 5,
          date: "2019/06/06",
          campaign: "manacala",
          view: "view pricing",
          actions: "schedule plan"
        }
      ],
      date: new Date(),
      show: false
    };
  }

  onChange = date => this.setState({ date })

//   onenCalender = () => {
//         this.setState(prevState => ({
//             show: !prevState.show 
//           }));
//   }

  render() {
    const { campaignData } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="table-campaigns-container">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <td>date</td>
                      <td>campaign</td>
                      <td>view</td>
                      <td>actions</td>
                    </tr>
                  </thead>
                  <tbody>
                    {campaignData.map(el => (
                      <tr key={el.id}>
                        <td>{el.date}</td>
                        <td><img src={img} alt="" width="25"/>{el.campaign}</td>
                        <td><img className="dollor" src={img1} alt="" width="25"/>{el.view}</td>
                        <td>
                            <span><i className="fa fa-calendar" /></span>
                          {el.actions}
                          {/* {this.state.show ? (
                            <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                          />
                          ) : null } */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Campaigns;
