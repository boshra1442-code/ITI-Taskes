// async function getPosts() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     if (response.ok) {
//         let responseData = await response.json();
//         console.log(responseData);
//     }
// }

// getPosts();

let postsDiv = document.querySelector('.posts');
function displayContent(postsArray) {
  let contentContainer = '';
  for (const post of postsArray) {
    let {id, title, body} = post;
    contentContainer += `
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">${`title`}</h4>
          <p class="card-text">${body}</p>
        </div>
        <span>Post ID: ${id}</span>
      </div>`;
  }
  postsDiv.innerHTML = contentContainer;
}

async function getPosts() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'});
    let responseData = await response.json();
    displayContent(responseData);
  }
  catch (error) {
    console.error(`An Error: ${error}`);
  }
}

getPosts();