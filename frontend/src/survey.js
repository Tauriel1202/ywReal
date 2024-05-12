import React from "react";
import axios from "axios";

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  }

  getUrl() {
    let url = "http://localhost:1218";
    if (!window.location.host.includes("localhost")) {
      url = window.location.host;
    }
    return url;
  }

  add(e) {
    e.preventDefault();

    let inputs = document.querySelectorAll("input:not(input[type='radio']");
    let colorInput = document.querySelector("input[name='color']:checked");

    let adjs = document.querySelector("input[name='adjs']:checked").value;
    let objs = document.querySelector("input[name='objs']:checked").value;
    let animals = document.querySelector("input[name='animals']:checked").value;

    let username = adjs + objs + animals;

    let data = {};

    for (let i of inputs) {
      data[i.getAttribute("name")] = i.value;
    }

    data["color"] = colorInput.value;
    data["username"] = username;

    // axios.post("http://localhost:1218/survey", { data }).then(() => {

    axios.post(`${this.getUrl()}/survey`, { data }).then(() => {
      let a = document.createElement("a");
      a.href = "/done";
      a.click();
    });
  }

  adjs() {
    let adjs = [
      "Adventurous",
      "Ambitious",
      "Brave",
      "Bright",
      "Charming",
      "Cheerful",
      "Compassionate",
      "Confident",
      "Considerate",
      "Cooperative",
      "Courageous",
      "Creative",
      "Decisive",
      "Determined",
      "Energetic",
      "Enthusiastic",
      "Flexible",
      "Friendly",
      "Gentle",
      "Graceful",
      "Happy",
      "Honest",
      "Humble",
      "Independent",
      "Intelligent",
      "Joyful",
      "Kind",
      "Lively",
      "Loving",
      "Modest",
      "Mysterious",
      "Optimistic",
      "Passionate",
      "Patient",
      "Peaceful",
      "Polite",
      "Quiet",
      "Reliable",
      "Resourceful",
      "Sensitive",
      "Sincere",
      "Strong",
      "Swift",
      "Thoughtful",
      "Trustworthy",
      "Understanding",
      "Warm",
      "Wise",
    ];

    return adjs.map((adj) => {
      return (
        <label>
          {adj}
          <input type="radio" name="adjs" value={adj} />
        </label>
      );
    });
  }

  animals() {
    let animals = [
      "Alligator",
      "Bear",
      "Cat",
      "Dog",
      "Dolphin",
      "Dragon",
      "Elephant",
      "Fox",
      "Giraffe",
      "Horse",
      "Iguana",
      "Jaguar",
      "Koala",
      "Lion",
      "Monkey",
      "Narwhal",
      "Octopus",
      "Penguin",
      "Rabbit",
      "Sloth",
      "Tiger",
      "Unicorn",
      "Vulture",
      "Walrus",
      "Yak",
      "Zebra",
    ];

    return animals.map((animal) => {
      return (
        <label>
          {animal}
          <input type="radio" name="animals" value={animal} />
        </label>
      );
    });
  }

  objs() {
    let objs = [
      "Autumn",
      "Avalanche",
      "Blizzard",
      "Cloud",
      "Cyclone",
      "Dew",
      "Drought",
      "Earth",
      "Earthquake",
      "Fern",
      "Flower",
      "Grass",
      "Grove",
      "Hurricane",
      "Hurricane",
      "Ice",
      "Jasmine",
      "Kite",
      "Leaf",
      "Lightning",
      "Maple",
      "Mushroom",
      "Nature",
      "Nut",
      "Oak",
      "Orchid",
      "Petal",
      "Pine",
      "Rain",
      "Rainbow",
      "River",
      "Season",
      "Snow",
      "Sprout",
      "Sun",
      "Sycamore",
      "Thunderstorm",
      "Tornado",
      "Tree",
      "Umbrella",
      "Valley",
      "Vine",
      "Water",
      "Wind",
      "Yam",
    ];

    return objs.map((o) => {
      return (
        <label>
          {o}
          <input type="radio" name="objs" value={o} />
        </label>
      );
    });
  }

  username() {
    return (
      <div className="userDiv">
        <div className="adjs scroll">{this.adjs()}</div>
        <div className="obs scroll">{this.objs()}</div>
        <div className="ans scroll">{this.animals()}</div>
      </div>
    );
  }

  colors() {
    let colors = [
      "#A30000", //darkred
      "#E71D36", //red
      "#FF721A", //orange
      "#FBFF00", //yellow
      "#34FF5C", //green
      "#00931B", //darkgreen
      "#00FFBF", //seafoam
      "#60E2FF", //lightblue
      "#17C1FF", //blue
      "#0036BF", //darkblue
      "#D9B3FF", //lightpurple
      "#7500BD", //purple
      "#ffd3e0", //lightpink
      "#FF709B", //pink
      "white", //white
      "#894900", //brown
      "#BBB9B5", //grey
      "#13010B", //black
    ];

    return colors.map((color) => {
      return (
        <label
          key={color}
          className="color"
          style={{ backgroundColor: color, color: color }}
        >
          <input
            type="radio"
            name="color"
            value={color}
            style={{ backgroundColor: color, color: color }}
          />
        </label>
      );
    });
  }

  render() {
    return (
      <>
        <h2>About You Survey</h2>
        <p>
          Tell us a little about your favorites! We are looking to make
          birthdays and other young women related things more meaningful and
          special. These answers will help us with that.
        </p>
        <form method="post" action="/done">
          {/* <label>
            Username: <input type="text" name="username" />
          </label> */}
          <label>
            Username (choose a value from each category):
            {this.username()}
          </label>

          <div className="colorDiv">
            Color:
            <button
              className="off"
              type="button"
              onClick={(e) => {
                document.querySelector(".colors").classList.toggle("on");
                e.target.classList.toggle("on");
              }}
            >
              <img src="./arrow.png" alt="arrow btn" height={100} width={100} />
            </button>
            <div className="colors">{this.colors()}</div>
          </div>
          <label>
            Character: <input type="text" name="char" />
          </label>
          <label>
            Book/Movie: <input type="text" name="media" />
          </label>
          <label>
            Scripture/Scripture Story: <input type="text" name="scrip" />
          </label>
          <label>
            Hymn / Church Song: <input type="text" name="song" />
          </label>
          <label>
            Season: <input type="text" name="season" />
          </label>
          <label>
            Hobbies: <input type="text" name="hobbies" />
          </label>
          <label>
            Candy: <input type="text" name="candy" />
          </label>
          <label>
            Dessert: <input type="text" name="dessert" />
          </label>
          <label>
            Food: <input type="text" name="food" />
          </label>
          <label>
            Dislikes: (limit 3) <input type="text" name="dis" />
          </label>
          <div id="bow">
            <img src="../bow.png" alt="bow" width={100} height={100} />
          </div>
          <button
            className="btn"
            type="submit"
            onClick={(e) => {
              this.add(e);
            }}
          >
            Finish Survey
          </button>
        </form>
      </>
    );
  }
}

export default Survey;
