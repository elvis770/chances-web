<template>
    <div class="makeup">
        <h2 class="text">
            
        </h2>
        <ul class="wrapper">
            <li>
                <img class="photo"
                src="@/assets/lipstick.jpeg" alt="">
            </li>
            
            <li>
                <img class="photo"
                src="https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFrZSUyMHVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="">
            </li>
            <li>
                <img class="photo"
                src="https://images.unsplash.com/photo-1631730486784-5456119f69ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80" alt="">
            </li>
            <li>
                <img class="photo"
                src="https://images.unsplash.com/photo-1618111415464-62013acf8656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">
            </li>
            <li>
                <img class="photo"
                src="https://images.unsplash.com/photo-1631214499500-2e34edcaccfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" alt="">
            </li>
        </ul>

        <div class="container">
            
            <h3 class="long-text">"Beauty Awakens The Soul To Act"  </h3> 
            
            <h3 class="long-text"> - DANTE ALIGHIERI </h3> 
        </div>
    </div>
</template>

<script>
export default {
    name:'MakeupView'
}
</script>

<style scoped>
*{
    text-align: center;
    margin-top: 90px;
    background-color: #DCDCDC;
    border-radius: 10px;
}
.text{
    margin: 0;
    padding: 0;
    padding-top: 20px;
}
.wrapper{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
   padding: 0;
   padding-bottom: 30px;
   list-style: none;
}
.photo{
    height: 200px;
    margin: 0;
    padding: 0;
}
.container{
    display: inline-flex;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 20px;
}

.long-text{
    margin: 0;
    padding: 0;
    padding-top: 5px;
    padding-right: 5px;
}
</style>