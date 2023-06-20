import './inner_iot.css';
import React, { useState } from 'react';
function Inner_java() {
    const [email,setEmail] = useState(localStorage.getItem('emaill'))
    function addCart(e){
        var qty = document.getElementsByClassName("num");
        var a=document.getElementsByClassName('main_inner');
        var arr = [];
        var sum=0;
        for(var i=0;i<qty.length;i++){
            if(qty[i].value===""){
                continue;
            }else{
                arr.push(a[i].childNodes[1].childNodes[0].innerHTML+" "+qty[i].value+" books "+a[i].childNodes[1].childNodes[5].childNodes[1].innerHTML);
                var k=(a[i].childNodes[1].childNodes[5].childNodes[1].innerHTML);
                sum=sum+((k)*qty[i].value);
                const imageContainers = document.getElementsByClassName('image_inner');
                const imgElement = imageContainers[i].querySelector('img');
                const imageLink = imgElement.getAttribute('src');
                var storage=a[i].childNodes[1].childNodes[0].innerHTML+" "+qty[i].value+" books ";
                console.log(storage)
                fetch('https://bookie-backend.onrender.com/addToCart',
                        {
                        method:'POST',
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            "Access-Control-Allow-Origin": "*",
                        },
                        body:JSON.stringify({
                            email,
                            storage
                        })
                        })
                        .then((res) => res.json())
                        .then((data) => {
                        console.log(data);
                        })



    //
                fetch('https://bookie-backend.onrender.com/cartimg',
                {
                  method:'POST',
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                  },
                  body:JSON.stringify({
                    email,
                    imageLink
                  })
                })
                .then((res) => res.json())
                .then((data) => {
                console.log(data);
                if (data.status == "ok") {
                  console.log("img added!")
                }
                })
        }


    }
    console.log(arr);
    localStorage.setItem("JAVA", arr);
    window.alert("Book Added to cart!")
    var frate=localStorage.getItem("TotalAmount");
    sum=parseInt(sum)+parseInt(frate);
    localStorage.setItem("TotalAmount", sum);
    e.preventDefault();
    }
    return(
    <>
    <div class="master_div">
    <div class="main_inner">
        <div class="image_inner">
            <img src="https://cdn.codegym.cc/images/article/960defdc-e2f5-48ac-8810-d8b4436a88a7/512.jpeg"
            alt="new"/>
        </div>
        
        <div class="description_inner">
           
            <h5>JAVA GUIDE</h5>
            <h4>By Franz Kafka</h4>
            <br/>
            <br/>
            <br/>
           
            <pre>-20%   $240   $<s>290</s></pre>
            <a href='/'><h5>Add to Whishlist</h5></a>
            <img src="http://animalultrasoundassociation.org/wp-content/uploads/2019/08/trustpilot.jpg"
            alt="new"/>
             <div class="qty"><p>QTY :</p><input type="number" name="" class="num"/></div>
        </div>
    </div>
    <div class="main_inner">
        <div class="image_inner">
            <img src="https://cdn.codegym.cc/images/article/dfbed226-4330-4230-af4c-f4c2e1977229/512.jpeg"
            alt="new"/>
        </div>
        
        <div class="description_inner">
           
            <h5>JAVA FUNDAMENTALS</h5>
            <h4>By Orely Kafka</h4>
            <br/>
            <br/>
            <br/>
   
            <pre>-26%   $290   $<s>470</s></pre>
            <a href='/'><h5>Add to Whishlist</h5></a>
            <img src="http://animalultrasoundassociation.org/wp-content/uploads/2019/08/trustpilot.jpg"
            alt="new"/>
             <div class="qty"><p>QTY :</p><input type="number" name="" class="num"/></div>
        </div>
    </div>
    </div>
    <button className='btn' onClick={addCart}>Add to cart</button>
    </>

    );
    
}
export default Inner_java;
