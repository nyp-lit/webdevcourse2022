// SECTION 1 created by Sharina Rafael
// SECTION 2 created by Jolene Chong
// HTML AND CSS IS THE SAME AS STARTER FILE

// CODE FOR SECTION 1

// TYPE CONVERSION Q1) Convert ”932” (a string) into a number using a type conversion method
document.write("<br>" + Number("932") + " " + typeof Number("932"));

// Q2) Now make another variable b and set the value as “h”, use another method to convert the value into a number (Hint: Use the unary + operator)
// Q2a) Console.log the variable b. What is its data type?
let b = "h";
let c = + b;
document.write("<br> b is a " + typeof b);
document.write("<br> c is a " + typeof c);

// Q3) Round off the floating point number 2.71828 to 2 decimal places.
let d = 2.71828
document.write("<br> 2.71828 rounded off to 2 decimal places is " + d.toFixed(2))

// ARROW FUNCTIONS Q1) Rewrite the following code to arrow syntax:
function Multiplication(a, b) {
  return a * b;
}
// Arrow syntax
const Multiplication = (a, b) => a * b;

function Hello(name) {
  return 'Hello' + name;
}

// Arrow syntax
const Hello = name => 'Hello' + name;

function Farewell() {
  return 'Bye';
}

// Arrow syntax
const Farewell = () => 'Bye'

function CalculateGST(price) {
  const onepercent = price / 100
  return onepercent * 7
}
// Arrow syntax
const CalculateGST = (price) => {
  const onepercent = price / 100
  return onepercent * 7
}

// END OF CODE FOR SECTION 1

// CODE FOR SECTION 2
// function to loadPosts() from data/users.json db

// can yall tell me if we are tryng to get info frm a database do we need async await
// does this function need to be asynchronous
async function loadPosts() {
    const response = await fetch('data/users.json');
    const posts = await response.json() // see what happens if you return without formatting itto json
    // console.log(posts)
    // return (await fetch('data/users.json')).json()

    return posts
}

// function to wait for DOM to load then asynchronously add a post and display posts after
document.addEventListener('DOMContentLoaded', async () => {
    let users = [];
    try{
        users = await loadPosts()
    }catch(e){
        console.log("error:", e)
    }

    console.log(users)

    users.map( (user,i) => {
        console.log(user);
        // console.log(user.username)
        // console.log(user['posts'])
        console.log(i);

        document.querySelector(`#user${i+1} p`).innerHTML = '';

        for (var j = 0; j< user.posts.length; j++){
            const userblock = document.querySelector(`#user${i+1}-posts`)
            const div = document.createElement("div")
            div.classList.add("post")
            const text = document.createElement('p')
            div.appendChild(text)
            text.innerHTML += user.posts[j];
            userblock.appendChild(div)
        }

    })

})

// using APIs with async await
async function loadCat() {
  const response = await fetch('https://aws.random.cat/meow');
  const cat = await response.json()
  console.log(cat.file)

  // document.getElementById("myImg").src = cat.file;

  return cat
}

// END OF CODE FOR SECTION 2
