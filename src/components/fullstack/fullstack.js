import { Link } from 'react-router-dom';
function FullStack() {
    function handleSubmit(e) {
        e.preventDefault();   
        var a=document.getElementsByClassName("card");
        var s=document.getElementById('s').value;
        console.log(s);
        var f=0;
        if(s!=0){
        for(var i=0;i<a.length;i++){
          a[i].style.display='none';
        }
        for(var i=0;i<a.length;i++){
          var s1=a[i].childNodes[1].innerHTML;
             if(s.toLowerCase()==s1.toLowerCase()){
              f=1;
              a[i].style.display = 'block';
             }
        }
      }
        if(f==0){
          var a = document.getElementsByClassName("card")
          for(var i=0;i<a.length;i++){
              a[i].style.display = "block";
          }
          window.alert('There is no Book which you are looking')
       
      }
    }
    return(
        <>
        <h1 className='sh'>FullStack Books</h1>
        <div className='srch1'>
      <input type="text" id='s' placeholder='Search books' />
      <form className='f' onSubmit={handleSubmit}>
      <button className='btn1' type="submit">Search</button>
    </form>
    </div>
        <div class="main_cards1">
            <Link to="/html">
            <div class="card">
                <img src="https://tse1.mm.bing.net/th?id=OIP.f89oNi15RQ-rBwtKE1In9AHaFa&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>HTML/CSS</h4>
            </div>
            </Link>
            <Link to="/js">
            <div class="card">
            <img src="https://tse2.mm.bing.net/th?id=OIP.4go3b33sOpfhyrW4ibQ4_AHaHa&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>JAVASCRIPT</h4>
            </div>
            </Link>
            <Link to="/php">
            <div class="card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.cmONiA9L-oy6EF4Yn92k6wHaHa&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>PHP/BACKEND</h4>
            </div>
            </Link>
            <Link to="/java">
            <div class="card">
            <img src="https://tse2.mm.bing.net/th?id=OIP.V9ACnAqslzyMAy3OEZDXlQHaFj&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>JAVA</h4>

            </div>
            </Link>
            <Link to="/python">
            <div class="card">
            <img src="https://tse4.mm.bing.net/th?id=OIP.PXNp62LLV-aLT2ZUpHupZgHaHw&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>PYTHON</h4>
                
            </div>
            </Link>
        </div>
        <br/>
        <div class="main_cards2">
            <Link to="/jsserver">
            <div class="card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.sgtgc25P_C8dApHRMbvFZAAAAA&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>JS SERVER</h4>
            </div>
            </Link>
            <Link to="/mysql">
            <div class="card">
            <img src="https://tse2.mm.bing.net/th?id=OIP.nl27KBxaMgpYfhpd08vYtQHaFj&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>MY SQL</h4>
            </div>
            </Link>
            <Link to="/nosql">
            <div class="card">
            <img src="https://tse2.mm.bing.net/th?id=OIP.LaT3MPLOcSF2uqlNkJOCrgHaD8&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>NOSQL</h4>
            </div>
            </Link>
            <Link to="/mongo">
            <div class="card">
            <img src="https://res.cloudinary.com/hevo/image/upload/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif"
                alt="new"
                class="img_1"
                />
                <h4>MONGO DB</h4>
            </div>
            </Link>
            <Link to="/expressjs">
            <div class="card">
            <img src="https://tse2.mm.bing.net/th?id=OIP.mbGqG9oLZIhHr4KoESQtIAHaJ4&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>EXPRESSJS</h4>
            </div>
            </Link>
        </div>
        
        
        </>

    );
    
}
export default FullStack;