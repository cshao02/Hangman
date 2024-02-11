const list = [
  //mrt stations
  ["Lakeside", "Jurong East", "Joo Koon", "Pioneer", "Clementi", "Tuas Link", "Tuas West Road", 
             "Tuas Crescent", "Gul Circle", "Boon Lay", "Chinese Garden", "Dover", "Buona Vista",     
              "Commonwealth", "Queenstown", "Redhill", "Tiong Bahru", "Outram Park", "Tanjong Pagar", 
              "Raffles Place", "City Hall", "Bugis", "Lavender", "Kallang", "Paya Lebar", "Eunos", 
              "Kembangan", "Bedok", "Tanah Merah", "Simei", "Tampines", "Pasir Ris", "Expo", 
              "Changi Airport", "Bukit Batok", "Bukit Gombak", "Choa Chu Kang", "Yew Tee", "Kranji", 
              "Marsiling", "Woodlands", "Admiralty", "Sembawang", "Canberra", "Yishun", "Khatib", 
              "Yio Chu Kang", "Ang Mo Kio", "Bishan", "Braddell", "Toa Payoh", "Novena", "Newton", 
              "Orchard", "Somerset", "Dhoby Ghaut", "Marina Bay", "Marina South Pier", "HarbourFront", 
              "Telok Blangah", "Labrador Park", "Pasir Panjang", "Haw Par Villa", "Kent Ridge", 
              "Holland Village", "Farrer Road", "Botanic Gardens", "Caldecott", "Marymount", "Bishan",
             "Lorong Chuan", "Serangoon", "Bartley", "Tai Seng", "MacPherson", "Dakota", "Mountbatten",
             "stadium", "Nicoll Highway", "Promenade", "Esplanade", "Bras Basah", "Bayfront", "Chinatown", 
             "Clarke Quay", "Little India", "Farrer Park", "Boon Keng", "Potong Pasir", "Woodleigh", 
             "Kovan", "Hougang", "Buangkok", "Sengkang", "Punggol"], 
 
  //countries
  [
	"Afghanistan",
	"Albania",
	"Algeria",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"Bulgaria",
	"Burkina Faso",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Chile",
	"China",
	"Colombia",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Cyprus",
	"Czechia",
	"Denmark",
	"Dominica",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Fiji",
	"Finland",
	"France",
	"Gabon",
	"Georgia",
	"Germany",
	"Ghana",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guyana",
	"Haiti",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"South Korea",
  "North Korea",
	"Kuwait",
	"Kyrgyzstan",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"New Zealand",
	"Nicaragua",
	"Nigeria",
	"Norway",
	"Pakistan",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Romania",
	"Russia",
	"Rwanda",
	"Samoa",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sweden",
	"Switzerland",
	"Taiwan",
	"Tajikistan",
	"Tanzania",
	"Thailand",
	"Timor-Leste",
	"Trinidad",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"United States of America",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela",
	"Vietnam",
	"Yemen",
	"Zambia",
	"Zimbabwe",
], 
              
  //food
  ["chicken rice", "char kway teow", "roti prata", "Hokkien Mee", "fishball noodles", "Mee Rebus", "Banmian", "Nasi Lemak", "Mee Goreng", "Nasi Goreng", "Hor Fun", "Fried Rice", "Mee Soto", "Laksa", "Mee Siam", "Bak Kuh Teh", "Duck Rice", "Ramen", "Chilli Crab", "Satay", "Oyster Omelette", "Carrot Cake", "Curry Puff"],
  ["a", "ab", "abc"]
  
];

let word;

class Hangman extends React.Component {
  constructor(props) {
    super(props)
    //if player reaches the end for that category, prevent game from bugging out
    if (list[this.props.number].length === 0) {
      word = "";
    }
    else {
      word = list[this.props.number][getRndInteger(0, list[this.props.number].length - 1)];
    }
    this.state = {
      word: word, //stores the word
      question: word //question displayed
        .replace(/(\s)/g, "\xa0\xa0\xa0") //to see the space more clearly
        .replace(/[a-z]/ig, "_ "),
      input: "", //user input in text box
      count: 0, //count towards death
      history: []  //display history of user input
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoss = this.handleLoss.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleEnter);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEnter);
  }
  //tracks user input
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  //allow submit by pressing enter button
  handleEnter(event) {
    if (event.which === 13) {
      document.getElementById("submit").click();
    }
  }
  handleSubmit() {
    let regex = new RegExp(this.state.input, "ig");
    //if guess is correct
    if (this.state.input.toLowerCase() === this.state.word.toLowerCase()) {
      //give the congratulatory background color change animation
      $("body").addClass("animation");
      
      //reveal answer
      let reveal = this.state.word.replace(/\s/g, "\xa0");
      this.setState({
        question: reveal.split("").join(" ").replace(/ \xa0 /g, "\xa0\xa0\xa0")
      })
      
      //pop up congratulatory text
      setTimeout(() => {alert("Congratulations!")}, 1000);
      //reset to default
      setTimeout(() => {$("body").removeClass("animation")}, 1000)                   

      //remove word from list to prevent duplicate
      setTimeout(() => {
        list[this.props.number].splice(list[this.props.number].indexOf(word), 1);
        //reset to new word
        if (list[this.props.number].length === 0) {
          word = "";
        }
        else {
          word = list[this.props.number][getRndInteger(0, list[this.props.number].length - 1)];
        }
        this.setState({
          word: word,
          question: word
            .replace(/(\s)/g, "\xa0\xa0\xa0")
            .replace(/[a-z]/ig, "_ "),
          input: "",
          count: 0,
          history: []
        })
      }, 1000)
      return;
    }
    //if no matches or input more than one character
    else if (!regex.test(this.state.word) || this.state.input.length > 1) {
      //update death count
      this.setState(state => ({
        count: state.count + 1
      }))
      //allow display to render first before alert message pop up
      if (this.state.count === 6) {
        $("body").css("background-color", "black");
        setTimeout(this.handleLoss, 800);
      }
    }
    //got match
    else {
      let array = []; //for index of matched letters
      let arr = []; //for the matched letters themselves
      for (let i = 0; i < this.state.word.length; i++) {
        //match user input to word
        if (this.state.input.toLowerCase() === this.state.word[i].toLowerCase()) {
          array.push(i)
          arr.push(this.state.word[i])
        }
      }
      //split question into array of letters and space
      let letters = this.state.question
        .replace(/\xa0\xa0\xa0/g, "\xa0 ") //to split the string so that space is one item
        .split(" ");
      //edit question
      for (let i = 0; i < array.length; i++) {
        letters.splice(array[i], 1, arr[i])
      }
      //update question with user answer
      this.setState({
        question: letters.join(" ").replace(/\xa0 /g, "\xa0\xa0\xa0")
      })
    }
    //append user input to history
    let historia = this.state.history;
    historia.push(this.state.input)
    //returns input field to empty string
    this.setState(state => ({
      input: "",
      history: historia
    }))
  }
  //alert message when lose
  handleLoss() {
    alert("You lost! The answer is " + word);
    //change color back to default
    setTimeout(() => {$("body").css("background-color", "#64636B")}, 10);
    
    //remove word from list to prevent duplicate
    list[this.props.number].splice(list[this.props.number].indexOf(word), 1);
    //reset to new word
    if (list[this.props.number].length === 0) {
      word = "";
    }
    else {
      word = list[this.props.number][getRndInteger(0, list[this.props.number].length - 1)];
    }
    this.setState({
      word: word,
      question: word
      .replace(/(\s)/g, "\xa0\xa0\xa0")
      .replace(/[a-z]/ig, "_ "),
      input: "",
      count: 0,
      history: []
    })
    
  }
  render() {
    return (
      <div id="box">
        <div class="flex img">
          {this.state.count === 0 ? <img src="https://res.cloudinary.com/dz0ntcrdg/image/upload/v1675183913/my%20stuff/h1_vzxmqw.png"/> : this.state.count === 1 ? <img src="https://res.cloudinary.com/dz0ntcrdg/image/upload/v1675183913/my%20stuff/h2_gop4pu.png"/> : this.state.count === 2 ? <img src="https://res.cloudinary.com/dz0ntcrdg/image/upload/v1675183913/my%20stuff/h3_hirfy4.png"/> : this.state.count === 3 ? <img src="https://res.cloudinary.com/dz0ntcrdg/image/upload/v1675183947/my%20stuff/h4_ta2sbv.png" /> : this.state.count === 4 ? <img src="https://res.cloudinary.com/dz0ntcrdg/image/upload/v1675183947/my%20stuff/h5_bbprbi.png" /> : this.state.count === 5 ? <img src="https://res.cloudinary.com/dz0ntcrdg/image/upload/v1675183913/my%20stuff/h6_yksklb.png" /> : this.state.count === 6 ? <img src="https://res.cloudinary.com/dz0ntcrdg/image/upload/v1675183913/my%20stuff/h7_ah99ym.png"/> : <img src="https://res.cloudinary.com/dz0ntcrdg/image/upload/v1675183914/my%20stuff/h8_ddrsxs.png"/>} 
        </div>
        <p id="display">{this.state.question}</p>
        <div class="flex">
          <input id="input" type="text" onChange={this.handleChange} value={this.state.input} />
          <button id="submit" type="submit" onClick={this.handleSubmit}>ENTER</button>
        </div>
        <div id="history">
          <p>History:</p>
          {this.state.history.map(item => <li>{item}</li>)}
        </div>
      </div>
    )
  }
}

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: false,
      number: null //to know which list to access
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  handleClick(input) {
    //switch the lists and colors
    switch(input) {
      case "mrt":
        this.setState({
          number: 0
        });
        break;
        
      case "countries":
        setTimeout(() => {$("#box").css("background-color", "#E97C7C")}, 10);
        setTimeout(() => {$("#box").css("border", "6px dotted #923232")}, 10);
        setTimeout(() => {$("#submit").css("background-color", "#B81111")}, 10);
        setTimeout(() => {$("#submit").css("box-shadow", "0 0 1px 1px #890000")}, 10);
        this.setState({
          number: 1
        });
        break;
        
      case "food":
        setTimeout(() => {$("#box").css("background-color", "#6FBE69")}, 10);
        setTimeout(() => {$("#box").css("border", "6px dotted green")}, 10);
        setTimeout(() => {$("#submit").css("background-color", "#30AB26")}, 10);
        setTimeout(() => {$("#submit").css("box-shadow", "0 0 1px 1px green")}, 10);
        this.setState({
          number: 2
        });
        break;
        
      default:
        break;
    }
    //switch between the different game modes
    this.setState({
      game: true
    })
  }
  handleBack() {
    this.setState({
      game: false
    })
  }
  render() {
    //switch between homepage and hangman
    return (
      <div>
        {this.state.game ?   
          <div>
            <Hangman number={this.state.number}/>
            <button id="back" onClick={this.handleBack}>BACK</button>
          </div> : 
          <div id="home">
            <h1 id="welcome">Welcome to Hangman <i class="far fa-dizzy"></i></h1>
            <div class="flex gap">
              <button id="mrt" onClick={() => this.handleClick("mrt")}>MRT</button>
              <button id="countries" onClick={() => this.handleClick("countries")}>COUNTRIES</button>
              <button id="food" onClick={() => this.handleClick("food")}>FOOD</button>
            </div>
            <p id="me">Designed and Coded by cshao</p>
          </div>}  
      </div>
    )
  }
}

ReactDOM.render(<Homepage />, document.getElementById("root"))

//generate random integer from min to max included
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
