<template>
    <div class="feedback">
        <h3 class="text"> Feedback</h3>
    </div>
</template>

<script>

export default {
    name:'FeedbackView'
}
</script>

<style scoped>
*{
    position: fixed;
    top: 50%;
    left: 98%;
    background-color: #ffffff; 
}

.text{
    padding: 5px;
    border-radius: 3px;
    transform-origin: 0 0;
    transform: rotate(270deg);
    font-size: 15px;
}
</style>
