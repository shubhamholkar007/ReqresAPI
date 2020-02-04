data ={
"name": "morpheus",
"job": "zion resident"
}

fetch('https://reqres.in/api/users/2',{
method: 'DELETE',
headers: new Headers ({
"Content-type" : "application/json"
}), 
body: JSON.stringify(data)

})
.then(function(response){
if(response.status !== 204)
console.log("Looks like there was a problem. Status Code:"+response.status)
else
response.json().then(data =>
console.log(data)
)}

).catch(function(err) {
console.log('Fetch Error :-S', err);
});