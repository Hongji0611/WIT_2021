function fetchUser(){
    var url = 'https://jsonplaceholder.typicode.com/posts/';
    return fetch(url).then(function(response){
        return response.json();
    })
}

async function userOne(){
    var user = await fetchUser();
    user.filter(user => user.userId == 1).map(user => {
        var box = document.createElement('div');
        var line = "<br>userId: "+ user.userId + "<br>id: " + user.id + "<br>title: " + user.title + "<br>body: " + user.body
        box.innerHTML = line
        document.body.append(box)
    })
}

userOne()