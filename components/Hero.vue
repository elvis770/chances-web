<template>
    <div class="hero">
        <h2> SELECT YOUR CATEGORY</h2>

        <ul class="container">
            <li class="photo">
                <router-link to="/womens">
                    <img class="image-photo" 
                    src="https://i.pinimg.com/564x/2b/ab/8f/2bab8f2458c81e174c6742c95d6cc2f8.jpg" alt="WOMEN">
                </router-link>
                
               
            </li>
            <li class="photo">
                <router-link to="/mens">
                    <img class="image-photo"
                    src="https://i.pinimg.com/564x/37/f6/18/37f61819e1babc87541258efa1738f7a.jpg" alt="MEN">
                </router-link>
                 
                
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name:'HeroView' 
}
</script>

<style scoped>
*{
    padding-top: 30px;
    text-align: center;
}
.container{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 350px;
    list-style: none;

}

.photo{
    height: 350px;
    padding: 0;
    margin: 0;
    
}
.image-photo{
    display: block;
    height: 350px;
    opacity:1;
    transition: .5s ease;
    backface-visibility: visible;
    border-radius: 10px;
}
/*
.middle{
    padding: 0;
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
}

.photo:hover .image-photo{
    opacity: 0.8;
}

.photo:hover .middle{
    opacity: 1;
}
.text {
  background-color: none;
  color: #000000;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

.text a{
    text-decoration: none;
    color: #000000;
    margin: 0;
  padding: 0;
}*/
</style>
