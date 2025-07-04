let input = document.querySelector(".ipt");
let btn = document.querySelector(".sub");
let cont = document.querySelector(".cont");

function getUserInfo(username) {
  return fetch(`https://api.github.com/users/${username}`).then((raw) =>
    raw.json()
  );
}

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  let username = input.value.trim();

  getUserInfo(username)
    .then(function (data) {
        console.log(data);
        
      cont.innerHTML = `
            <p><b>Name:</b> ${data.name ?? "N/A"}</p>
            <p><b>Bio:</b> ${data.bio ?? "N/A"}</p>
            <p><b>Public repos:</b> ${data.public_repos ?? "N/A"}</p>
            <p><b>Followers:</b> ${data.followers ?? "N/A"}</p>
            <img src="${data.avatar_url}" width="100" alt="Avatar">
        `;
    })
    .catch((err) => {
      cont.innerHTML = "User not found or error occurred.";
      console.error(err);
    });
});
