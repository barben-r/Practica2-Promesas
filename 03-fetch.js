// 1. GET request using fetch()
fetch("https://reqres.in/api/users?page=1")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    // 2. Create a variable to store HTML table headers
    let li = ``;
    let li2 = ``;

    // 3. Loop through each data and add a table row
    json.data.forEach((user) => {
      li += `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${user.email}</h5>
              <p class="card-text">${user.first_name}</p>
              <p class="card-text">${user.last_name}</p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="user(${user.id})">Details</button>
            </div>
          </div>`;

      // li2 += `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      //     <div class="modal-dialog">
      //       <div class="modal-content">
      //         <div class="modal-header">
      //           <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
      //           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      //         </div>
      //         <div class="modal-body">
      //         <img src="https://reqres.in/img/faces/${user.id}-image.jpg" class="card-img-top" alt="...">
      //         <h5 class="card-title">Correo: ${user.email}</h5>
      //         <p class="card-text">FirstName: ${user.first_name}</p>
      //         <p class="card-text">LastName: ${user.last_name}</p>
      //         </div>
      //         <div class="modal-footer">
      //           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>`;
    });

    // 4. DOM Display result
    document.getElementById("users").innerHTML = li;
    // document.getElementById("modals").innerHTML = li2;
  });

function user(id) {
  fetch(`https://reqres.in/api/users/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.data);
      let li = ``;
      li += `<div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <img src="https://reqres.in/img/faces/${json.data.id}-image.jpg" class="card-img-top" alt="...">
              <h5 class="card-title">Correo: ${json.data.email}</h5>
              <p class="card-text">FirstName: ${json.data.first_name}</p>
              <p class="card-text">LastName: ${json.data.last_name}</p>`;
        document.getElementById("modals").innerHTML = li;
    })
    .catch((error) => {
      console.error(error);
    });
}
