// Fetching data from API
// M3-D2 
const listAlbum = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
        .then(response => response.json())
        .then(queen => {
            // Dom Manipulation
            console.log(queen)
            console.log(queen.data)


            const row = document.querySelector(".row")
            for (let i = 0; i < queen.data.length; i++) {
                const SongName = queen.data[i]

                const col = document.createElement("div")
                col.classList.add(".th")
                col.className = "col-3"
                col.innerHTML =
                    `<tr class="table-row-container text-white" id="trow-1" onmouseover="hideNumAddIcon()" onmouseout="hideIconAddNum()" onclick="footerMusicChange()">
                <th scope="row"><span class="p-0" id="number-1">1</span>
                  <i class="bi bi-play"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" style="display: none;" class="bi bi-play" viewBox="0 0 16 16">
                      <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    </svg>
                <img class="ml-4 mr-4" id="artist-image-id" src="${SongName.artist.picture_medium}" width="50px" alt="">
                <span id="music-name-1" class="text-white">${SongName.title}</span>
              </th>
                <td class="listened-amount">${SongName.rank}</td>                          
                <td class="music-time">
                  <div class="heart-music-icon d-inline-block pr-5">
                      <i class="bi bi-heart heard-music" ></i>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                      </svg>
                    </div>  
                  ${SongName.duration}
                  <div  class="three-dots-end d-inline-block">
                    <i class="bi bi-three-dots"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                  </div>
                </td>
                  
              </tr>`

                row.appendChild(col)
            }



        })
        .catch(err => console.log(err))
        .finally(() => console.log("fetching done"))
}


window.onload = () => {
    document.getElementById("follow-btn").addEventListener("click", listAlbum)

    console.log("LAST CONSOLE LOG, but seen as first thing (synchronous)")
}



















// Follow to Following
function followFollowing() {
    let btn = document.getElementById("follow-btn")
    if (btn.textContent == "FOLLOW") {
        btn.innerText = "FOLLOWING"
    }
    else {
        btn.innerText = "FOLLOW"
    }
}
//trow-1
function hideNumAddIcon() {
    document.getElementById("number-1").style.display = "none"
    let a = document.getElementById("trow-1")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "inline-block";
    }
}

function hideIconAddNum() {
    document.getElementById("number-1").style.display = "inline-block"
    let a = document.getElementById("trow-1")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
    }

}
//trow-2
function hideNumAddIcon1() {
    document.getElementById("number-2").style.display = "none"
    let a = document.getElementById("trow-2")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "inline-block";
    }
}

function hideIconAddNum1() {
    document.getElementById("number-2").style.display = "inline-block"
    let a = document.getElementById("trow-2")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
    }
}

//trow-3
function hideNumAddIcon2() {
    document.getElementById("number-3").style.display = "none"
    let a = document.getElementById("trow-3")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "inline-block";
    }
}

function hideIconAddNum2() {
    document.getElementById("number-3").style.display = "inline-block"
    let a = document.getElementById("trow-3")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
    }
}
//trow-4
function hideNumAddIcon3() {
    document.getElementById("number-4").style.display = "none"
    let a = document.getElementById("trow-4")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "inline-block";
    }
}

function hideIconAddNum3() {
    document.getElementById("number-4").style.display = "inline-block"
    let a = document.getElementById("trow-4")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
    }
}
//trow-3
function hideNumAddIcon4() {
    document.getElementById("number-5").style.display = "none"
    let a = document.getElementById("trow-5")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "inline-block";
    }
}

function hideIconAddNum4() {
    document.getElementById("number-5").style.display = "inline-block"
    let a = document.getElementById("trow-5")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
    }
}


// header background change after 70px
let topBar = document.getElementById('topBar')
let mainContent = document.querySelector('#homeMainContent')

window.addEventListener('scroll', function () {

    if (window.pageYOffset < 70) {
        topBar.classList.remove('gradientBG')
    }
    if (topBar.classList.contains('gradientBG') && window.pageYOffset > 100) {
        return
    }
    if (window.pageYOffset > 70) {
        topBar.classList.add('gradientBG')
    }
}

)


// footer music change
function footerMusicChange() {
    let musicId = document.getElementById("music-name-1")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}

function footerMusicChange1() {
    let musicId = document.getElementById("music-name-2")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id-1")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}
function footerMusicChange2() {
    let musicId = document.getElementById("music-name-3")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id-2")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}
function footerMusicChange3() {
    let musicId = document.getElementById("music-name-4")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id-3")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}
function footerMusicChange4() {
    let musicId = document.getElementById("music-name-5")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id-4")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}

// Extra
// Sidebar collapse
function collapseSidebar() {
    let spotifyIcon = document.getElementById("spotify-icon-id")
    spotifyIcon.style.display = "none"
    document.getElementById("small-spotify-icon").style.display = "flex"
    let sidebarWidth = document.getElementById("nav-sideBar")
    sidebarWidth.style.minWidth = "80px"
    sidebarWidth.style.maxWidth = "80px"
    document.getElementById("music-sidebar-id").style.display = "none"

    document.getElementById("sidebar-home-text").style.display = "none"
    document.getElementById("sidebar-search-text").style.display = "none"
    document.getElementById("sidebar-library-text").style.display = "none"
    document.getElementById("sidebar-playlist-text").style.display = "none"
    document.getElementById("sidebar-liked-songs-text").style.display = "none"
    document.getElementById("sidebar-install-apps").style.display = "none"
    document.getElementById("bi-left-icon").style.marginLeft = "80px"
}
function openSidebar() {
    let spotifyIcon = document.getElementById("spotify-icon-id")
    spotifyIcon.style.display = "flex"
    document.getElementById("small-spotify-icon").style.display = "none"
    let sidebarWidth = document.getElementById("nav-sideBar")
    sidebarWidth.style.minWidth = "232px"
    sidebarWidth.style.maxWidth = "232px"
    document.getElementById("music-sidebar-id").style.display = "flex"
    document.getElementById("sidebar-home-text").style.display = "flex"
    document.getElementById("sidebar-search-text").style.display = "flex"
    document.getElementById("sidebar-library-text").style.display = "flex"
    document.getElementById("sidebar-playlist-text").style.display = "flex"
    document.getElementById("sidebar-liked-songs-text").style.display = "flex"
    document.getElementById("sidebar-install-apps").style.display = "flex"
    document.getElementById("bi-left-icon").style.marginLeft = "230px"
}

$(window).resize(function () {
    let spotifyIcon = document.getElementById("spotify-icon-id")
    spotifyIcon.style.display = "none"
    document.getElementById("small-spotify-icon").style.display = "flex"
    let sidebarWidth = document.getElementById("nav-sideBar")
    sidebarWidth.style.minWidth = "80px"
    sidebarWidth.style.maxWidth = "80px"
    document.getElementById("music-sidebar-id").style.display = "none"

    document.getElementById("sidebar-home-text").style.display = "none"
    document.getElementById("sidebar-search-text").style.display = "none"
    document.getElementById("sidebar-library-text").style.display = "none"
    document.getElementById("sidebar-playlist-text").style.display = "none"
    document.getElementById("sidebar-liked-songs-text").style.display = "none"
    document.getElementById("sidebar-install-apps").style.display = "none"
    document.getElementById("bi-left-icon").style.marginLeft = "80px"

});

window.onresize = collapseSidebar()