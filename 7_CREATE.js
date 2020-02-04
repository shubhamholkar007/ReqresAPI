data = {
"name": "morpheus",
"job": "leader"
}

fetch('https://reqres.in/api/users',{
method: 'POST',
headers: new Headers ({
"Content-type" : "application/json"
}), 
body: JSON.stringify(data)

})
.then(function(response){
if(response.status !== 201)
console.log("Looks like there was a problem. Status Code:"+response.status)
else
response.json().then(data =>
console.log(data)
)}

).catch(function(err) {
console.log('Fetch Error :-S', err);
});