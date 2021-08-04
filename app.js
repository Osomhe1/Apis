
document.getElementById('gettext').addEventListener('click', getText);
document.getElementById('getuser').addEventListener('click', getUser);
document.getElementById('getpost').addEventListener('click', getPost);
document.getElementById('addpost').addEventListener('submit', addPost);
document.getElementById('getmusic').addEventListener('click', getMusic);

function getText(){

fetch('example.txt')
  .then((res) => res.text())
  .then((data) => {
    document.getElementById('output').innerHTML = data
    // console.log(data)
  })
}

function getUser(){
  fetch('user.json')
  .then((res) =>(res.json()))
  .then((data)=>{
        let outPut = '<h2>User</h2>';

      data.forEach((user)=>{
        outPut += `
        <ul class="list-group mb-3">
        <li class="list-group-item" > ID: ${user.id} </li>
        <li class="list-group-item"> Name: ${user.name} </li>
        <li class="list-group-item"> email: ${user.email} </li>
        </ul>
        `
      })
        document.getElementById('output').innerHTML = outPut

  })
}

// get post
function getPost(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      let outPut = '<h2>Posts</h2>'

      data.forEach((post) => {
        outPut += `

        <div class="card card-body mb-3>
        <h1> ID: ${post.id} </h1>
        <h2> TITLE: ${post.title} </h2>
        <p> BODY: ${post.body} </p>
        </div>
        `
      })
      document.getElementById('output').innerHTML = outPut
    })
}

// add post
function addPost(e){
  e.preventDefault();

  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;


    fetch('https://jsonplaceholder.typicode.com/posts', {
      method:"post",
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({title, body})
    })
    .then((res)=>res.json())
    .then((data)=> console.log(data))    

}
// console.log(getmusic)
// console.log('https://api.deezer.com/album/302127')
// console.log(outPut)


// fetch music
// const music_api = 'https://api.deezer.com/album/302127'

function getMusic(){
fetch('https://api.deezer.com/user/2529/playlists')
  .then((res) =>res.json())
  .then((data) => {
  

    let output = '<h2>Musics</h2>'

    data.forEach((music) => {
      output += `
      <div>${music.data} </div>
      <div>${music.type} </div>
      <div>${music.title} </div>
      `
    })
    document.getElementById('getmusic').innerHTML = text
  })
}

