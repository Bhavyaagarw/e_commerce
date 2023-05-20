import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

function ThankYou(){
    const router=useRouter();
    console.log('router',router.query)
    return(
        <div>
<h1>Thank You for shoping with us</h1>
<div class="text-center">
<Image src="/images/thank.png" width={500} height={600} alt="thank" />
</div>
        </div>
    )
}

export default ThankYou