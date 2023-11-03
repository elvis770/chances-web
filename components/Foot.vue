<template>
    <div class="foot">
        <h2 class="head"> Take Fragerence Journey </h2>
        
       

        <div class="container">
            <div>
                <ul class="wrapper">
                    <li>
                        <img class="photo"
                        src="https://i.pinimg.com/564x/fe/bc/9e/febc9e16db92455e5492806dacf4a1e1.jpg" alt="">
                    </li>
                    
                </ul>
                <ul class="wrapper-one">
                    <li>
                        <img class="photo"
                        src="https://i.pinimg.com/564x/1c/c8/2f/1cc82f89f3f945f3ad4c361c7d3020ec.jpg" alt="">
                    </li>
                    
                </ul>
            </div>
            <div>        
                <ul class="wrapper-two">
                    <li>
                        <img class="photo"
                        src="https://i.pinimg.com/564x/06/37/dc/0637dcaff859155f5274b48aefc3364d.jpg" alt="">
                    </li>
                    
                </ul>
                <ul class="wrapper-three">
                    <li>
                        <img class="photo"
                        src="https://i.pinimg.com/564x/54/89/72/548972fe68bc0b935b0fb2a1bf14c14c.jpg" alt="">
                    </li>
                    
                </ul>
            </div>
            <div>       
                <ul class="wrapper-four">
                    <li>
                        <img class="photo"
                        src="https://i.pinimg.com/564x/95/ff/2a/95ff2adb78921183ca99b41347fe4e94.jpg" alt="">
                    </li>
                    
                </ul>
                <ul class="wrapper-five">
                    <li>
                        <img class="photo"
                        src="https://i.pinimg.com/564x/f4/95/5a/f4955afa340b68dd81401e77dac13c7e.jpg" alt="">
                    </li>
                    
                </ul>
            </div>
        </div>
         <div class="sets">
            <h3 class="long-text"> "Memory Is The Perfume Of The Soul" </h3> 
            
            <h3 class="long-text"> - Georges Sand </h3> 
        </div>
            
    </div>
</template>


<script>
export default {
    name:'FootView'
}
</script>

<style scoped>
*{
    text-align: center;
    background-color: #000000;
    border-radius: 10px;
    
}
.head{
    color:#D8D8D8 ;
    padding-top: 10px;
}
.container{
    display: flex;
    align-items: center;
}
.sets{
    display: inline-flex;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 20px;
}

.long-text{
    margin: 0;
    padding: 0;
    padding-top: 5px;
    color: #D8D8D8;
    padding-right: 5px;
}
.wrapper{
    list-style: none;
    padding-right: 12rem;
    
}
.wrapper-one{
    list-style: none;
    padding-left: 16rem;
}
.wrapper-two{
    list-style: none;
    padding-right: 12rem;
    
}
.wrapper-three{
    list-style: none;
   padding-left: 16rem;
}
.wrapper-four{
    list-style: none;
   padding-right: 16rem;
   
}
.wrapper-five{
    list-style: none;
   padding-left: 16rem;
  
}
.photo{
    height: 250px;
    border-radius: 15px;
}
.text{
    color: #ffffff;
    font-size: 20px;
    padding-left: 10px;
}
</style>