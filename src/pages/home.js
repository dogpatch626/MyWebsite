import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";
import Pic from "../media/Discord_4EHOGP4lqK.png";
import Bs from "../media/bs.png";
import Footer from "../components/footer";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link,
} from "react-router-dom";

import Pok from "../components/components";
class HomePage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#DFDDEF", height: "100vh" }}>
        <center>
          <div
            className="row"
            style={{
              position: "relative",
              paddingop: "150px",
            }}
          >
            <div className="col">
              <Card style={{ width: "18rem", backgroundColor: "#36393E" }}>
                <Card.Img variant="top" src={Pic} />
                <Card.Body style={{ color: "white" }}>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    ● Built a discord bot using node.js API that allows user to
                    interact with the bot to summon it into a channel to play a
                    certain popular clip from twitch.tv. The Bot is hosted on
                    Heroku and available 24/7
                  </Card.Text>
                  <Card.Text>
                    ● Allowed users to interact with the bot as a PokeDex taking
                    data from the PokeApi online
                  </Card.Text>
                  <a href="https://discord.com/api/oauth2/authorize?client_id=705113374890917980&permissions=36928512&scope=bot">
                    <Button variant="primary" style={{ color: "black" }}>
                      Add the bot to your server!!
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "18rem", backgroundColor: "#36393E" }}>
                <Card.Img
                  variant="top"
                  src="https://www.volexity.com/wp-content/uploads/2017/03/TVP_VolatilityLogo.png"
                  style={{ height: "70px" }}
                />
                <Card.Body style={{ color: "white" }}>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    ● College capstone walking through malware and volitile
                    memory analysis with Volitility tool and kali linux
                  </Card.Text>
                  <a href="https://github.com/dogpatch626/VolitilitySchool#volitilityschool">
                    <Button variant="primary" style={{ color: "black" }}>
                      Take a look at it!
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "18rem", backgroundColor: "#36393E" }}>
                <Card.Img variant="top" src={Pic} />
                <Card.Body style={{ color: "white" }}>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" style={{ color: "black" }}>
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
export default withRouter(HomePage);
