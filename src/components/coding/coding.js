import { Link } from 'react-router-dom';
function Coding() {
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
        <h1 className='sh'>Coding Books</h1>
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
            <Link to="/c">
            <div class="card">
            <img src="https://contentstatic.techgig.com/photo/90325682.cms"
                alt="new"
                class="img_1"
                />
                <h4>C language</h4>
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
            <Link to="/c++">
            <div class="card">
            <img src="https://www.analyticsinsight.net/wp-content/uploads/2022/03/bh1-1024x725-1.jpg"
                alt="new"
                class="img_1"
                />
                <h4>C++ language</h4>
            </div>
            </Link>
            <Link to="/r">
            <div class="card">
            <img src="https://ih1.redbubble.net/image.2089856395.6447/st,small,507x507-pad,600x600,f8f8f8.jpg"
                alt="new"
                class="img_1"
                />
                <h4>R language</h4>
            </div>
            </Link>
            <Link to="/csharp">
            <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mhLw6EgPC8AmmUzD4W1-AmjJ5BrQtz7rXw&usqp=CAU"
                alt="new"
                class="img_1"
                />
                <h4>c# language</h4>
            </div>
            </Link>
            <Link to="/perl">
            <div class="card">
            <img src="https://technogeekscs.com/wp-content/uploads/2022/04/perl-scripting-programming-training-1024x576.png"
                alt="new"
                class="img_1"
                />
                <h4>PERL</h4>
            </div>
            </Link>
            <Link to="/php">
            <div class="card">
            <img src="https://thehackernews.com/images/-PVsiTY_P80o/XXI-P17bzYI/AAAAAAAA0_w/QmGHPdewmYo4qrlfiJd_IAKsfuVYmec1gCLcBGAs/w0/php-programming-language.jpg"
                alt="new"
                class="img_1"
                />
                <h4>PHP</h4>
            </div>
            </Link>
        </div>
        
        
        </>

    );
    
}
export default Coding;