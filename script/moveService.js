let url = "https://api.themoviedb.org/3/discover/movie?api_key=6243f561bcd008ec397a81449573a5f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
let movielist = document.querySelector(".movielist");


let xhr = new XMLHttpRequest;
const movies = (url, callback) => {
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let response = JSON.parse(xhr.responseText);
            if (callback)
                callback(response);
        }

    }
    xhr.open("GET", url)
    xhr.send()

}

const myfun = response => {
    for (let i = 0; i < 4; i++) {


        let firstdiv = document.createElement("div"); // 1st
        let seconddiv = document.createElement("div"); // miag

        // image
        let posterimg = document.createElement("img"); // img
        posterimg.src = ` http://image.tmdb.org/t/p/w185${response.results[i].poster_path}`;

        document.getElementsByClassName
        let moviename = document.createElement("h1");
        // moviename.classList.add("dgfd", "sdfd")
        moviename.innerText = response.results[i].title;
        let movierate = document.createElement("h2");
        movierate.innerText = response.results[i].vote_average;

        seconddiv.appendChild(posterimg).classList.add("poster");

        firstdiv.appendChild(seconddiv).classList.add();
        firstdiv.appendChild(moviename).classList.add("name");
        firstdiv.appendChild(movierate).classList.add("rate");

        

        movielist.appendChild(firstdiv).classList.add("row");
       
       
      
 


        // posterimg.src = ` http://image.tmdb.org/t/p/w185${response.results[i].poster_path}`;
        //    /iZf0KyrE25z1sage4SYFLCCrMi9.jpg
        //     url=}
        // console.log("hello")
    }
};
movies(url, myfun);