const url = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded',()=>{
const moviePlaceHolder = ()=>{
fetch(url)
.then(res =>res.json())
.then(content =>{
const firstMovie = content[0]

const filmImg = document.getElementById("poster")
const movieTitle = document.getElementById("filmTitle")
const movieDescr = document.getElementById("movieDescription")
const runningTime = document.getElementById("runtime")
const showingTime = document.getElementById("showtime")
const availTicket =document.getElementById("ticketsAvailable")
filmImg.src = firstMovie.poster
movieTitle.innerText = firstMovie.title
movieDescr.innerText = firstMovie.description
runningTime.innerText =`Runtime: ${firstMovie.runtime} minutes`
showingTime.innerText =`Showtime: ${firstMovie.showtime}`
availTicket.innerText =`Tickets Available: (${firstMovie.capacity - firstMovie.tickets_sold})`


const ticketBuy = document.getElementById("buyTicket")
let tickets = Number(firstMovie.capacity - firstMovie.tickets_sold)
ticketBuy.addEventListener('click',()=>{
tickets--
if(tickets <= 0){
 const frstMovie = document.getElementById("1")
 frstMovie.innerHTML=`${firstMovie.title}  <span></span>`
 availTicket.innerHTML = `Tickets available:  <span>0</span>`
 }
 else{
availTicket.innerText = `Tickets available: (${tickets})`

  }

         })
  })
 }



const movieDetails = ()=>{
fetch(url)
.then(response=>response.json())
.then(data=>{
console.log(data)
for(let i = 0; i < data.length; i++){
let item = data[i]
console.log(item)
const movieList = document.createElement("li")
const list = document.getElementById("showingMovie")

movieList.classList.add("list-group-item", "border", "border-info", "sinema")

movieList.setAttribute('id',`${item.id}`)
                
movieList.innerText = item.title
console.log(item.title)


list.appendChild(movieList)

movieList.addEventListener('click',()=>{
const filmImage = document.getElementById("poster")
const filmTitle = document.getElementById("filmTitle")
const filmDescr = document.getElementById("movieDescription")
const runTime = document.getElementById("runtime")
const showTime = document.getElementById("showtime")
const availTickets =document.getElementById("ticketsAvailable")


filmImage.src = item.poster
filmTitle.innerText = item.title
filmDescr.innerText = item.description
runTime.innerHTML =`Runtime:<span>${item.runtime}</span>`
showTime.innerText =`Showtime: ${item.showtime}`
availTickets.innerText =`Tickets available: (${item.capacity - item.tickets_sold})`

 const ticketsBuy = document.getElementById("buyTicket")
 let ticket = Number(item.capacity - item.tickets_sold)

ticketsBuy.addEventListener('click',()=>{

 ticket --
if(ticket <= 0){
  movieList.innerHTML =`${item.title} <span></span>`

 availTickets.innerHTML = `Tickets available: <span></span>`

}
else{
  availTickets.innerText = `Tickets available: (${ticket})`
  }                
  })
     })
      }
     })
    }

    movieDetails()
    moviePlaceHolder()
})