<template>
    <div class="footer">
        <ul class="container">
            <li>
               <img class="photo"
                src="@/assets/CHANCES.png" alt="">
            </li>
            <li>
                <b class="text"> About CHANCES</b>
                <ul class="seg">
                    <li>
                        <b>About Us</b>
                    </li>
                   <li>
                      <b>Investors & Partners</b> 
                   </li>
                   <li>
                       <b>Discounts</b>
                   </li>
                   <li>
                       <b>Vacancies</b>
                   </li>
                    <li>
                       <b>CHANCES App</b> 
                    </li>
                    
                </ul>
            </li>
            <li>
                <b class="text"> Customer Service</b>
                <ul class="seg">
                    <li>
                        <b>Orders & Shipping</b>
                    </li>
                    <li>
                       <b>Delivery & Tracking</b> 
                    </li>
                   <li>
                      <b>Return Policy</b> 
                   </li>
                   <li>
                       <b>Terms & Conditions</b>
                   </li>
                   <li>
                       <b>Privacy Policy</b>
                   </li>
                    <li>
                       <b>Cookie Policy</b> 
                    </li>
                    
                </ul>
               
            </li>
            <li>
                <b class="text">Follow Us</b>
                <ul class="wrapper">
                    <li>
                        <img class="icon"
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="">
                    </li>
                    <li>
                        <img class="icon"
                        src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png" alt="">
                    </li>
                    <li>
                        <img class="icon"
                        src="https://cdn-icons-png.flaticon.com/512/3536/3536559.png" alt="">
                    </li>
                    <li>
                        <img class="icon"
                        src="https://cdn-icons-png.flaticon.com/512/1384/1384066.png" alt="">
                    </li>
                    <li>
                        <img class="icon"
                        src="https://cdn-icons-png.flaticon.com/512/3938/3938026.png" alt="">
                    </li>
                    <li>
                        <img class="icon"
                        src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt=""> 
                    </li>   
                </ul>
                <b class="text">Payment Methods</b>
                    <ul class="wrapper">
                    <li>
                        <img class="icon"
                        src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png" alt="">
                    </li>
                    <li>
                        <img class="icon"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBidzdP6HJde4ZiTz7DUsaQcsu22Y6qK55RlybN84BcTgKeYCRDiNMhcCQl0nB2rIcu7I&usqp=CAU" alt="">
                    </li>
                    <li>
                        <img class="icon"
                        src="https://www.ideal.nl/img/logo/ideal-logo-1024.png" alt="">
                    </li>
                    <li>
                        <img class="icon"
                        src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/applepay/apple-pay-logo-icon.png" alt="">
                    </li>
                    <li>
                        <img class="icon"
                        src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png" alt="">
                    </li>  
                </ul>
            </li>
        </ul>
        
        <p class="long-text"> ©Copyright 2023 CHANCES | All Rights Reserved</p> 
        
    </div>
</template>

<script>


export default {
    name:'FooterView'
}
</script>

<style scoped>
*{
    margin-top: 40px;
    background-color: #000000;
    margin-bottom: 20px;
    color: #ffffff;

    border-radius: 10px;
}
.container{
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

    list-style: none;
    padding: 0;
    margin: 0;
}
.photo{
    height: 90px;
    padding: 0;
    margin: 0;
}
.seg{
    display: block;
    list-style: none;
    align-items: flex-end;
    margin: 0;
    padding: 0;
}
.seg li{
    padding: 5px;
    margin-top: 8px;
}
.icon{
    padding-top: 0;
    padding-right: 8px;
    margin: 0;
    height: 25px;
}
.text{
    margin:0 ;
    font-size: 22px;
}
.wrapper{
    list-style: none;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
}
.long-text{
    background-color: #4A4B4C;
    color: #ffffff;
    text-align: center;
    margin: 0;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
