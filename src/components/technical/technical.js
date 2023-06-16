import { Link } from 'react-router-dom';
import './technical.css';
function Technical() {
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
        <h1 className='sh'>Technical Books</h1>
        <div className='srch1'>
      <input type="text" id='s' placeholder='Search books' />
      <form className='f' onSubmit={handleSubmit}>
      <button className='btn1' type="submit">Search</button>
    </form>
    </div>
        <div class="main_cards1">
            <Link to="/iot">
            <div class="card">
                <img src="https://tse4.mm.bing.net/th?id=OIP.ckzW3G5ZO1-jnE-1H94ylAHaFy&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>Internet Of Things</h4>
            </div>
            </Link>
            <Link to="/cloud">
            <div class="card">
            <img src="https://tse4.mm.bing.net/th?id=OIP.KOMZNLuu_qQseBE2IiwfSgHaE7&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>Cloud Computing</h4>
            </div>
            </Link>
            <Link to="/ds">
            <div class="card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.DKh9w9eKlBK4nG0810O2IwAAAA&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>Data Science</h4>
            </div>
            </Link>
            <Link to="/ml">
            <div class="card">
            <img src="https://tse4.mm.bing.net/th?id=OIP.YAnwSeQcvhgMPgW8KutFGAHaE8&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>Machine Learning</h4>

            </div>
            </Link>
            <Link to="/dl">
            <div class="card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.aSHSf2R-CFBdvXzET94k0gHaGY&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>Deep Learning</h4>
                
            </div>
            </Link>
        </div>
        <br/>
        <div class="main_cards2">
            <Link to="/ai">
            <div class="card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.__l27pPGXUbuA3W1pzJSPQHaED&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>Artificial Intelligence</h4>
            </div>
            </Link>
            <Link to="/ar">
            <div class="card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.4QVkP1KNa7PaOpfu4OkfBgHaHa&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>Augmented Reality</h4>
            </div>
            </Link>
            <Link to="/vr">
            <div class="card">
            <img src="https://tse3.mm.bing.net/th?id=OIP.JWkE78soskgjnk7e4rgkHQHaE7&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>Virtual Reality</h4>
            </div>
            </Link>
            <Link to="/bi">
            <div class="card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.TyC4DxhKSv-kKO9s0Z-R9gHaGI&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>Power Bi</h4>
            </div>
            </Link>
            <Link to="/btech">
            <div class="card">
            <img src="https://tse4.mm.bing.net/th?id=OIP.2GXFsBfJ97sDLs3uZJSO6QHaHa&pid=Api&P=0"
                alt="new"
                class="img_1"
                />
                <h4>Bio-technology</h4>
            </div>
            </Link>
        </div>
        
        
        </>

    );
    
}
export default Technical;