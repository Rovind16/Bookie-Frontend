import './home.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Name from '../namedisplay/namedisplay'
function Home() {
  function handleSubmit(e) {
    e.preventDefault();   
    var a=document.getElementsByClassName("card");
    var s=document.getElementById('s').value;
    console.log(s);
    var f=0;
    if(s!=0){
    for(var i=0;i<=4;i++){
      a[i].style.display='none';
    }
    for(var i=0;i<=4;i++){
      var s1=a[i].childNodes[1].innerHTML;
         if(s.toLowerCase()==s1.toLowerCase()){
          f=1;
          a[i].style.display = 'block';
         }
    }
  }
    if(f==0){
      var a = document.getElementsByClassName("card")
      for(var i=0;i<=4;i++){
          a[i].style.display = "block";
      }
      window.alert('There is no Book which you are looking')
   
  }
}
function checkLogin(e) {
 
  var x = localStorage.getItem("loggedIn");
  console.log(x);
  if(x=="false"){
    window.alert("You need to login to access books");
    e.preventDefault();
  }
}  
    return(
        <>
        <div className='name'>
         <Name></Name>
         </div>
        <div className='srch'>
      <input type="text" id='s' placeholder='Search books' />
      <form className='f' onSubmit={handleSubmit}>
      <button className='btn1' type="submit">Search</button>
    </form>
    </div>
          <h1 className='bc'>Book Category</h1>
        <div class="main_cards">
            <Link to="/technical" onClick={checkLogin}>
            <div class="card">
            <img
            src="https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMHJlYWRpbmclMjBib29rfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="new"
            class="img_1"
          />
          <h3>Technical</h3>
            </div>
            </Link>

            <Link to="/fullstack" onClick={checkLogin}>  
           <div class="card">
            <img
            src="https://cdn9.dissolve.com/p/D1061_16_337/D1061_16_337_1200.jpg"
            alt="new"
            class="img_1"
            />
          <h3>Full-stack</h3>
            </div>
            </Link>
            <Link to="/frontend" onClick={checkLogin}>  
            <div class="card">
            <img
            src="https://image.shutterstock.com/image-photo/concentrated-bearded-man-reading-book-260nw-334592630.jpg"
            alt="new"
            class="img_1"
          />
          <h3>Front-end</h3>
            </div>
            </Link>
            <Link to="/coding" onClick={checkLogin}>  
            <div class="card">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mlDi1KfChFZDsX7lYsrb_icaHxBrq6NjIdbw5HvDpuOldZ9TAxxEBWicM5WeRwA044w&usqp=CAU"
            alt="new"
            class="img_1"
          />
          <h3>Coding language</h3>
            </div>
            </Link>
            <Link to="/os" onClick={checkLogin}>
            <div class="card">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveoqgM0GZIU7U7iZfqPSYU8Lwu_d7pwnc3A&usqp=CAU"
            alt="new"
            class="img_1"
          />
          <h3>Operating system</h3>
            </div>
            </Link>
        </div>
        </>

    );

}
export default  Home;