/* create html blocks */

function createUserRow(user) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    let a = document.createElement('a');
    a.href = `user-details.html?user_id=${user.id}`;
    a.innerText = 'view details';
    p.innerText = `${user.id}. ${user.name}`;
    div.appendChild(p);
    div.appendChild(a);
    div.classList.add('users-list-item');
    return div;
}

function createUserPostsBlock(post) {
    let div = document.createElement('div');
    let title = document.createElement('h2');
    let a = document.createElement('a');

    div.classList.add('user-posts-item');

    title.innerText = post.title;
    a.href = `post-details.html?post_id=${post.id}`;
    a.innerText = 'read more';

    div.append(title, a);
    return div;
}

function createUserDetailsBlock(user) {
    let div = document.createElement('div');

    let general = document.createElement('div');
    let name = document.createElement('h2');
    let username = document.createElement('h3');
    let email = document.createElement('div');
    let phone = document.createElement('div');
    let website = document.createElement('div');

    let company = document.createElement('div');
    let companyBs = document.createElement('div');
    let companyCatchPhrase = document.createElement('div');
    let companyName = document.createElement('div');

    let address = document.createElement('div');
    let addressGeo = document.createElement('div');
    let addressGeoLat = document.createElement('div');
    let addressGeoLng = document.createElement('div');
    let addressCity = document.createElement('div');
    let addressStreet = document.createElement('div');
    let addressSuite = document.createElement('div');
    let addressZipcode = document.createElement('div');

    company.classList.add('user-details-company');
    address.classList.add('user-details-address');

    name.innerText = user.name;
    username.innerText = user.username;
    email.innerHTML = '<b>Email:</b> ' + user.email;
    phone.innerHTML = '<b>Phone:</b> ' + user.phone;
    website.innerHTML = '<b>Website:</b> ' + user.website;
    companyBs.innerHTML = '<b>BS:</b> ' + user.company.bs;
    companyCatchPhrase.innerHTML = '<b>Catch Phrase:</b> ' + user.company.catchPhrase;
    companyName.innerHTML = '<b>Company Name:</b> ' + user.company.name;
    addressGeoLat.innerHTML = '<b>Geo Lat:</b> ' + user.address.geo.lat;
    addressGeoLng.innerHTML = '<b>Geo Lng:</b> ' + user.address.geo.lng;
    addressCity.innerHTML = '<b>City:</b> ' + user.address.city;
    addressStreet.innerHTML = '<b>Street:</b> ' + user.address.street;
    addressSuite.innerHTML = '<b>Suite:</b> ' + user.address.suite;
    addressZipcode.innerHTML = '<b>Zip Code:</b> ' + user.address.zipcode;

    general.append(name, username, email, phone, website);
    company.append(companyName, companyBs, companyCatchPhrase);
    addressGeo.append(addressGeoLat, addressGeoLng);
    address.append(addressCity, addressStreet, addressSuite, addressZipcode, addressGeo)

    div.append(general, address, company);

    return div;
}

function createPostCommentBlock(comment) {
    let div = document.createElement('div');

    let name = document.createElement('h2');
    let email = document.createElement('h3');
    let body = document.createElement('p');

    name.innerText = comment.name;
    email.innerText = comment.email;
    body.innerText = comment.body;

    div.classList.add('post-comments-item');

    div.append(name, email, body);
    return div;
}

function createPostDetailsBlock(post) {
    let div = document.createElement('div');
    let a = document.createElement('a');
    let title = document.createElement('h2');
    let body = document.createElement('p');

    title.innerText = post.title;
    body.innerText = post.body;
    a.innerText = 'Back to user';
    a.href = `user-details.html?user_id=${post.userId}`;

    div.append(title, body, a);
    return div;
}

/* load data from remote api  */

function loadUserDetails() {
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('user_id');
    if (userId) {
        let userDetails = document.getElementsByClassName('user-details')[0];
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/`)
            .then(response => response.json())
            .then(user => {
                userDetails.appendChild(createUserDetailsBlock(user));
            });
    }
}

function loadUserPosts() {
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('user_id');
    if (userId) {
        let userPosts = document.getElementsByClassName('user-posts')[0];
        userPosts.innerText = '';
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts/`)
            .then(response => response.json())
            .then(posts => {
                for (const post of posts) {
                    userPosts.appendChild(createUserPostsBlock(post));
                }
            });
    }
}

function loadPostDetails() {
    const searchParams = new URLSearchParams(location.search);
    const postId = searchParams.get('post_id');
    if (postId) {
        let postDetails = document.getElementsByClassName('post-details')[0];
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/`)
            .then(response => response.json())
            .then(post => {
                postDetails.appendChild(createPostDetailsBlock(post));
            });
        loadPostComments();
    }
}

function loadPostComments() {
    const searchParams = new URLSearchParams(location.search);
    const postId = searchParams.get('post_id');
    if (postId) {
        let postComments = document.getElementsByClassName('post-comments')[0];
        postComments.innerText = '';
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                for (const comment of comments) {
                    postComments.appendChild(createPostCommentBlock(comment));
                }
            });
    }
}

function loadUsers() {
    let usersListContainer = document.getElementsByClassName('users-list')[0];
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            console.log(users);
            for (const user of users) {
                usersListContainer.appendChild(createUserRow(user));
            }
        });
}