

let detailsname = document.querySelector('.conatiner__details-name');
let userinput = document.querySelector('.container__searchbar-input');

let searchbtn = document.querySelector('.container__searchbar-btn')
let profilepic = document.querySelector('.container__result-icon')
let joineddate = document.querySelector('.container__details-joined-date')
let loginname = document.querySelector('.container__details-username')
let locatio = document.getElementById('location')
let twitter = document.getElementById('twitter')
let link = document.getElementById('link')
let company = document.getElementById('company')
let repos = document.querySelector('.container__details-repos-number')
let followers = document.querySelector('.container__details-followers-number')
let following = document.querySelector('.container__details-following-number')
let bio = document.querySelector('.container__details-bio')
let result = document.querySelector('.container__result')
let month = ['jan', 'feb', 'mar', 'apr', 'may','jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec']

searchbtn.addEventListener('click', () => {

    result.classList.add('hide')
    if (result.classList.contains('hide')) {
        result.classList.remove('hide')
        
    }

    fetch(`https://api.github.com/users/${userinput.value}`)
        .then((data) => {
            return data.json()
        })
        .then((uname) => {
            console.log(uname);
            let jdate = new Date(uname.created_at);
            let jmonth = jdate.getMonth()
            
            profilepic.setAttribute('src', uname.avatar_url)
            detailsname.innerHTML = uname.name;
            joineddate.innerHTML = `Joined ${jdate.getDate()} ${month[jmonth]} ${jdate.getFullYear()}`
            loginname.innerHTML = `@${uname.login}`
            loginname.setAttribute('href' , `${uname.html_url}`)
            repos.innerHTML = uname.public_repos;
            followers.innerHTML = uname.followers;
            following.innerHTML = uname.following;
            locatio.innerHTML = uname.location ? uname.location : 'not given';
            twitter.innerHTML = uname.twitter_username ? uname.twitter_username : "not given";
            bio.innerHTML = uname.bio ? uname.bio : "This profile has no bio"
            company.innerHTML = uname.company ? uname.company : "not given"
            link.innerHTML = uname.blog ? uname.blog : "not given"
        })

})