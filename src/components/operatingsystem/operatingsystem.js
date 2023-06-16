import { Link } from 'react-router-dom';
import './operatingsystem.css';
function Operatingsystem() {
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
        <h1 className='sh1'>Operating System Books</h1>
        <div className='srch1'>
      <input type="text" id='s' placeholder='Search books' />
      <form className='f' onSubmit={handleSubmit}>
      <button className='btn1' type="submit">Search</button>
    </form>
    </div>
        <div class="main_cards1">
            <Link to="/win">
            <div class="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAcdKeE8VDyRYqpnyImnFJiLfSXkInAtrOw&usqp=CAU"
                alt="new"
                class="img_1"
                />
                <h4>Windows Os</h4>
            </div>
            </Link>
            <Link to="/mac">
            <div class="card">
            <img src="https://www.techrepublic.com/wp-content/uploads/2017/12/macoshero.jpg"   alt="new"
                class="img_1"
                />
                <h4>Mac Os</h4>
            </div>
            </Link>
            <Link to="/linux">
            <div class="card">
            <img src="https://miro.medium.com/max/820/1*lwq5LHM0rUVH0QGWTEtW6A.png"alt="new"
                class="img_1"
                />
                <h4>Linux Os</h4>
            </div>
            </Link>
            <Link to="/ubuntu">
            <div class="card">
            <img src="https://www.opensourceforu.com/wp-content/uploads/2018/10/image-1.jpg"  alt="new"
                class="img_1"
                />
                <h4>Ubuntu Os</h4>

            </div>
            </Link>
            <Link to="/cent">
            <div class="card">
            <img src="https://media.trustradius.com/product-logos/wa/pe/6QPDGDTFJUIA.JPEG" alt="new"
                class="img_1"
                />
                <h4>Cent Os</h4>
                
            </div>
            </Link>
        </div>
        <br/>
        <div class="main_cards2">
            <Link to="/chrome">
            <div class="card">
            <img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2019/06/Download-Chrome-OS.jpg?fit=1000%2C563&ssl=1"  alt="new"
                class="img_1"
                />
                <h4>Chrome Os</h4>
            </div>
            </Link>
            <Link to="/unix">
            <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLL36yy9qAx_6TLWZh0P2QUm_fAF3blsCinQ&usqp=CAU"
                alt="new"
                class="img_1"
                />
                <h4>Unix Os</h4>
            </div>
            </Link>
            <Link to="/bsd">
            <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzgNieocJYjvDZqQsXdKkYnVlTEwnTG0Mhw&usqp=CAU"     alt="new"
                class="img_1"
                />
                <h4>FreeBsd Os</h4>
            </div>
            </Link>
            <Link to="/deepin">
            <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqbjbQi9gd92-q_fcWgHdrCPNZ_XbZjbew5w&usqp=CAU"  alt="new"
                class="img_1"
                />
                <h4>Deepin Os</h4>
            </div>
            </Link>
            <Link to="/fedora">
            <div class="card">
            <img src="https://www.itsfoss.net/wp-content/uploads/2021/11/fedora-linux-open-source-open-source-wallpaper-preview.jpg"  alt="new"
                class="img_1"
                />
                <h4>fedora Os</h4>
            </div>
            </Link>
        </div>
        
        
        </>

    );
    
}
export default Operatingsystem;