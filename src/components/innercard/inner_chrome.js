import './inner_iot.css';
function Inner_chrome() {
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
        }
    }
    console.log(arr);
    localStorage.setItem("CHROME", arr);
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
            <img src="https://kbimages1-a.akamaihd.net/be05d5d2-2906-4f2d-8da9-94aca927575b/353/569/90/False/the-complete-idiot-s-guide-to-google-chrome-and-chrome-os.jpg"
            alt="new"/>
        </div>
        
        <div class="description_inner">
           
            <h5>CHROME GOOGLE OS</h5>
            <h4>By Franz Kafka</h4>
            <br/>
            <br/>
            <br/>
            
            <pre>-20%   $240   $<s>420</s></pre>
            <a href='/'><h5>Add to Whishlist</h5></a>
            <img src="http://animalultrasoundassociation.org/wp-content/uploads/2019/08/trustpilot.jpg"
            alt="new"/>
             <div class="qty"><p>QTY :</p><input type="number" name="" class="num"/></div>
        </div>
    </div>
    <div class="main_inner">
        <div class="image_inner">
            <img src="https://m.media-amazon.com/images/I/41oeSTToJUL._SL500_.jpg"
            alt="new"/>
        </div>
        
        <div class="description_inner">
           
            <h5>CHROME OS</h5>
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
export default Inner_chrome;