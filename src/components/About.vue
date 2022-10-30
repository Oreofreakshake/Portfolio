<template>

<div class="flex flex-col justify-start md:justify-center md:h-screen py-14 md:py-0 w-full">
    <div class="flex items-center w-full pb-4 ">
        
            <div class="typing font-mono text-xl text-green">
            about me
    </div> <div class="cursor">|</div>
        </div>
        
        <div>
            <div>
                <div class="flex flex-col md:flex-row">
                    <p class="flex-1 pr-8 text-xl tracking-wider md:text-justify text-lightslate font-mukta md:font-poppins md:text-lg">I started off with
                        <a href="/blogs" class=" text-slate font-bold link-underline link-underline-black font-mukta">learning</a> 
                    the basics of networking
                        <!-- <span class=" text-slate font-bold">(there's </span>
                        <a href="/blogs" class="font-mono text-slate font-bold link-underline link-underline-black"> story </a> 
                        <span class=" text-slate font-bold">behind it).</span> -->
                        
                    not long before I was introduced to programming. It was
                        <span class="font-mukta text-white">python</span> that took the position of my first language.
                    And in 2017 I was interested by web development so, I started off with a few static websites soon exploring frameworks during the COVID-19 and got intrested by the
                        <span class=" text-white font-mukta">MERN</span> stack.
                    although I really don't enjoy building websites, I started exploring mobile development and I was hooked! Fast-forward today, I'm fluent in
                        <span class=" text-white font-mukta">Flutter</span>,
                        <span class=" text-white font-mukta">ReactJS</span> and
                        <span class=" text-white font-mukta">Django.</span>
                    Currently, I'm learning 
                        <span class=" text-white font-mukta">Rust</span> and
                        <span class=" text-white font-mukta">Image-processing.</span>
                    I've also played around with Machine learning and I'm hoping to be well versed in that as well.    
                    </p>
                    <img class="flex w-full lg:w-72 h-90 md:h-72 bg-lightnavy mt-8 lg:mt-1" src="../assets/me.png" alt="hello">
                    <img src="" alt="">
                </div>
            </div>
        </div>
        

    
</div>
    
</template>

<script>
 export default {
    name:"about",
    
    data(){
        return{
            stuff: null
        }
    }
 }


</script>


<style scoped>

.typing{
  white-space: nowrap;
  overflow: hidden;
  width: 5em;
  animation: type 1s steps(50, end); 
}

.typing:nth-child(2){
  animation: type2 4s steps(40, end);
}

.cursor{
  font-weight: 900;
  animation: blink 1s infinite;
  color:#a8b2d1
}

@keyframes type{ 
  from { width: 0; } 
} 

@keyframes type2{
  0%{width: 0;}
  50%{width: 0;}
  100%{ width: 100; } 
} 

@keyframes blink{
  from{opacity: 1;}
  to{opacity: .0;}
}

	.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 1px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size .5s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(rgb(255, 255, 255), rgb(237, 235, 241))
	}

	.link-underline:hover {
		background-size: 100% 1px;
		background-position: 0 100%
	}

</style>