<template>
    <div class="meone">

        "A MAN'S BODY IS EVERYTHING"
        <div class="container">
            <div class="slide">
                <img class="photo"
                src="https://cdn-images.farfetch-contents.com/19/37/17/57/19371757_43386056_1000.jpg" id="last-clone" alt="">
                <img class="photo"
                src="https://cdn-images.farfetch-contents.com/19/31/25/35/19312535_42363832_1000.jpg" alt="">
                <img class="photo"
                src="https://cdn-images.farfetch-contents.com/19/01/52/08/19015208_41569196_1000.jpg" alt="">
                <img class="photo"
                src="https://cdn-images.farfetch-contents.com/17/94/24/03/17942403_38099414_1000.jpg" alt="">
                <img class="photo"
                src="https://cdn-images.farfetch-contents.com/18/91/20/15/18912015_41045939_1000.jpg" alt="">
                <img class="photo"
                src="https://cdn-images.farfetch-contents.com/19/37/17/57/19371757_43386056_1000.jpg" alt="">
                <img class="photo"
                src="https://cdn-images.farfetch-contents.com/19/31/25/35/19312535_42363832_1000.jpg"  id="first-clone" alt="">
            </div>
        </div>
        <button id="prevBtn">Prev</button>
        <button id="nextBtn">Next</button>


    </div>
</template>

<script>
export default {
    name:'MeoneItem'
    
}
</script>

<style scoped>
*{
    text-align: center;
}
.container{
    width: 50%;
    margin: auto;
    border: 5px solid black;
    
}
.photo{
    height: 420px;
    width: auto;
}
.slide{
    display: flex;
    width: 60%;
}

</style>