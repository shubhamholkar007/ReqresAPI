data ={
"email": "sydney@fife"
}

fetch('https://reqres.in/api/register',{
method: 'POST',
headers: new Headers ({
"Content-type" : "application/json"
}), 
body: JSON.stringify(data)

})
.then(function(response){
if(response.status !== 200)
{
console.log("Looks like there was a problem. Status Code:"+response.status)
response.json().then(data => 
console.log(data)
)}
else
response.json().then(data =>
console.log(data)
)}

).catch(function(err) {
console.log('Fetch Error :-S', err);
});