class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paraText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis tortor a finibus feugiat. Aliquam eu volutpat odio, et tincidunt lorem. Proin mollis erat neque, sit amet ullamcorper sem suscipit ac.",
    };
    this.keyUpHandler = this.keyUpHandler.bind(this);
  }
  keyUpHandler(event) {
    var searchedPara = document.querySelector(".search-content p");
    var words = event.currentTarget.value;
    var regex = RegExp(words, "gi"); // case insensitive
    var replacement = "<b>" + words + "</b>";
    var newHTML = searchedPara.textContent.replace(regex, replacement);
    searchedPara.innerHTML = newHTML;
  }
  render() {
    return (
      <div>
        <input
          type="text"
          id="searchtext"
          placeholder="search"
          onKeyUp={this.keyUpHandler}
        />
        <div className="search-content">
          <p>{this.state.paraText}</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.querySelector("#app"));
