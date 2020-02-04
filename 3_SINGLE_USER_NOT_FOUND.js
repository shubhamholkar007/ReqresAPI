var url = 'https://reqres.in/api/users/23';
fetch(url)
.then(
function(response) {
if (response.status !== 200)
console.log('Looks like there was a problem. Status Code: ' +response.status);
else
response.json().then(data => {
console.log(data);
}
)
}
)
.catch(function(err) {
console.log('Fetch Error :-S', err);
});