<template>
    <div class="navbar">

        <nav>
            <router-link to="/">
                <img class="photo"
                src="@/assets/CHANCES.png" alt="">
            </router-link>
            
            <ul class="wrapper">
                
                <li class="text">
                    <router-link to="/mens">
                        MENS
                    </router-link>
                </li>
               
                <li>
                    <router-link to="/womens">
                        WOMEN
                    </router-link>
                </li>
                <li>
                    <router-link to="/trends">
                        TRENDS
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>


export default {
    name: 'NavbarView'
}
</script>

<style scoped>
*{
    background-color: #ffffff;
}
nav{
    position: fixed;
    display: flex;
    align-items: center;

    border-radius: 5px;
}
.photo{
    height: 100px;
    padding: 5px;
}
.wrapper{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    gap:var(--gap, 1.5rem);
    padding-right: 8px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 1s;
}

.wrapper a{
    color: #000000;
    text-decoration: none;
    transition: color 1s;
}

.wrapper :hover{
    border-bottom:1px solid #8a8a8a;
}

.wrapper a:hover{
    color: #8a8a8a;
}

</style>
