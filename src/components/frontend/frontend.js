import { Link } from 'react-router-dom';
// import './operatingsystem.css';
function Frontend(){
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
        <h1 className='sh1'>Front end Books</h1>
        <div className='srch1'>
      <input type="text" id='s' placeholder='Search books' />
      <form className='f' onSubmit={handleSubmit}>
      <button className='btn1' type="submit">Search</button>
    </form>
    </div>
        <div class="main_cards1">
            <Link to="/flutter">
            <div class="card">
                <img src="https://yt3.googleusercontent.com/ytc/AL5GRJVFUbrqLgTKs3qvoiGiZDvJHXkB_pzHwyussmGX=s900-c-k-c0x00ffffff-no-rj"
                alt="new"
                class="img_1"
                />
                <h4>Flutter</h4>
            </div>
            </Link>
            <Link to="/reactjs">
            <div class="card">
            <img src="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"   alt="new"
                class="img_1"
                />
                <h4>React Js</h4>
            </div>
            </Link>
            <Link to="/reactnative">
            <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HEr6fykbgN_GnedAp8PnRmCSGi96QBnqkA&usqp=CAU"alt="new"
                class="img_1"
                />
                <h4>React Native</h4>
            </div>
            </Link>
            <Link to="/angular">
            <div class="card">
            <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png"  alt="new"
                class="img_1"
                />
                <h4>Angular</h4>

            </div>
            </Link>
            <Link to="/bootstrap">
            <div class="card">
            <img src="https://avatars.githubusercontent.com/u/2918581?s=280&v=4" alt="new"
                class="img_1"
                />
                <h4>Bootstrap</h4>
                
            </div>
            </Link>
        </div>
        <br/>
        <div class="main_cards2">
            <Link to="/npm">
            <div class="card">
            <img src="https://www.w3schools.com/whatis/img_npm.jpg"  alt="new"
                class="img_1"
                />
                <h4>Npm</h4>
            </div>
            </Link>
            <Link to="/ionic">
            <div class="card">
            <img src="https://avatars.githubusercontent.com/u/47375633?s=200&v=4"
                alt="new"
                class="img_1"
                />
                <h4>Ionic</h4>
            </div>
            </Link>
            <Link to="/vue">
            <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8D0qTmuGPHbPl1bcplcG8hLooqRN-0SnenoClBrRtQt-pyVjg913ijmGFY1fUzJMHFOM&usqp=CAU"     alt="new"
                class="img_1"
                />
                <h4>Vue.js</h4>
            </div>
            </Link>
            <Link to="/typescript">
            <div class="card">
            <img src="https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b_400x400.jpg"  alt="new"
                class="img_1"
                />
                <h4>Type Script</h4>
            </div>
            </Link>
            <Link to="/nextjs">
            <div class="card">
            <img src="https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/635543691615050863a92f1f_nextjs-logo.png"  alt="new"
                class="img_1"
                />
                <h4>Next js</h4>
            </div>
            </Link>
        </div>
        
        
        </>

    );
    
}
export default Frontend;