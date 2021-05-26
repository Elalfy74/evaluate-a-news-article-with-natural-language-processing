
function submitevent(event) {

    event.preventDefault()
    
    // get the url which user has entered
    let url_value = document.getElementById('url_area').value

    //check if the url is valid
    if(User.checkForURL(url_value)){
        
        document.querySelector('#failed').textContent=""

        //fetching the server and send the url
        fetch(`http://localhost:8084/send_url/?text=${url_value}`)
        .then(res => res.json())
        .then(function(res) {
            //update the ui with the data from server
            document.querySelector("#score").textContent=(`Score=${res.score}`)
            document.querySelector("#agreement").textContent=(`Agreement=${res.agr}`)
            document.querySelector("#subject").textContent=(`Subjectivity=${res.sub}`)
            document.querySelector("#confidence").textContent=(`Confiedence=${res.conf}`)
            document.querySelector("#irony").textContent=(`Irony=${res.iro}`)
            //adding the date of request
            let d = new Date();
            //add 1 to month beacuse it is count from 0 to 11
            let month= parseInt(d.getMonth(),10)+1
            let nDate = month+'.'+ d.getDate()+'.'+ d.getFullYear();
            document.querySelector("#date").textContent=(`Date=${nDate}`)
    })
    }
    //if the link is not valid alert the client to edit it
    else{
        document.querySelector('#failed').textContent="Not Vaild URL"
        document.querySelector("#score").textContent=(``)
        document.querySelector("#agreement").textContent=(``)
        document.querySelector("#subject").textContent=(``)
        document.querySelector("#confidence").textContent=(``)
        document.querySelector("#irony").textContent=(``)
    }
    
}

export { submitevent }
