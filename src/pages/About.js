/* eslint-disable react/jsx-no-undef */
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import Image from "next/image";



function About(){
    const router=useRouter();
    console.log('router',router.query)
    return(
        <>
        <Head>
            <title>About</title>
          </Head>
        <div>
            
<h1>About Us</h1>


<p>
Transparent and talented, our strong process keeps our team focused and yours involved. We love the work we do, the clients we work with and the amazing people we work alongside! 
We closely partner with our clients to become a trusted advisor and extension of their business, driving amazing digital results. Our mission is to create stunning websites with exceptional UI/UX and brilliant App Devlopment, MLM Marketing strategies focused on the B2B industry. 
Our company provides an ideal online platform to your business. With which you can spread your business very fast. And as soon as you look at your business, you reach a larger scale.
</p>
<div class="column">
    <div class="text-center">
   <Image src="/images/nwg.png" width={600} height={500} alt="nwg" />
   </div>
   <div class="container">
        <h2>NWG</h2>
       
        <p>NextWebGuru provides IT-related services and advice to businesses and organizations. We have experience working with large and small businesses and are ready to
develop a targeted strategy and plan that’s just right for you.The services include designing and implementing IT infrastructure to provide ongoing support and maintenance. Consulting can cover a wide range of topics, including strategy, operations, and technology.</p>
       
       
      </div>
    </div>
  </div>
        
        

        </>
    )
}

export default About