import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";


function Support(){
    const router=useRouter();
    console.log('router',router.query)
    return(
        <div>
           <h1> Help And Support</h1>
           <div class="w3-container w3-teal">
 
</div>
<div class="text-center">
<Image src="/images/E-commerce-support-agency.png" width={1200} height={500} alt="Support" />
</div>
<div class="w3-container">
  <p>What can we help you....</p>

  <form class="example" action="/action_page.php">
  <input type="text" placeholder="Search.." name="search"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>



</div>


        </div>
    )
}

export default Support