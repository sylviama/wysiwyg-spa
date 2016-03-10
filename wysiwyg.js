
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.


// Create an array of objects that represents famous people (see structure below).
var people=[
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},

	{
	  title: "1st U.S. President",
	  name: "George Washington",
	  bio: "George Washington was the first President of the United States, the Commander-in-Chief of the Continental Army during the American Revolutionary War, and one of the Founding Fathers of the United States.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
	  lifespan: {
	    birth: 1732,
	    death: 1799
	  }
	},

	{
	  title: "16th President of the United States",
	  name: "Abraham Lincoln",
	  bio: "Lincoln led the United States through its Civil War—its bloodiest war and its greatest moral, constitutional, and political crisis.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Abraham_Lincoln_November_1863.jpg/1024px-Abraham_Lincoln_November_1863.jpg",
	  lifespan: {
	    birth: 1809,
	    death: 1865
	  }
	}]
//loop through into HTML
var string="";
for(var i=0;i<people.length;i++){
	string+= "<div><header><b>"+people[i].name + "</b>, "+people[i].title+"</header><section>"+people[i].bio+"</section><img src=" +people[i].image+" height=300 width=250></img><footer>"+people[i].lifespan.birth+"~"+people[i].lifespan.birth+"</div><br><br>";
}

document.getElementById("container").innerHTML = string;

// When you click on one of the person elements, a dotted border should appear around it.
document.getElementsById("container").addEventListener("click",);
for(i=0;i<el9.length;i++){
el9[i].addEventListener("click", focus);
	function focus(){
		this.style.border="thick dotted red";
		console.log(this);
	}
}






