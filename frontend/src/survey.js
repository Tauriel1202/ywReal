import React from "react";

class Survey extends React.Component {
  render() {
    return (
      <form method="post" action="/done">
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
          Season: <input type="text" name="" />
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
      </form>
    );
  }
}

export default Survey;
