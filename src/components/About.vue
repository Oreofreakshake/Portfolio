<template>

<div class="flex flex-col justify-start md:justify-center md:h-screen py-14 md:py-0 w-full">
    <div class="flex items-center w-full pb-4 ">
        
            <div class="text-xl font-mono text-green">
            about me
    </div>
        </div>
        
        <div>
            <div>
                <div class="flex flex-col md:flex-row">
                    <p class="flex-1 pr-8 text-lg tracking-wider md:text-justify text-lightslate">I was introduced to programming ever since  I was 9. I started off with
                        <a href="/blogs" class="font-mono text-slate font-bold link-underline link-underline-black"> learning</a> 
                    the basics of networking,
                        <!-- <span class=" text-slate font-bold">(there's </span>
                        <a href="/blogs" class="font-mono text-slate font-bold link-underline link-underline-black"> story </a> 
                        <span class=" text-slate font-bold">behind it).</span> -->
                        
                    Then after a few years I was introduced to 
                        <span class="font-mono text-white"> python </span>
                    and I've been using <span class="font-mono text-white"> python </span>ever since to this day. In 2017 I was interested by web development so, I started off with a few static websites and finally in 2020, during the COVID-19, I started exploring frameworks and got intrested by the
                        <span class=" text-white font-mono">MERN</span> stack.
                    Soon after I realized that I really don't enjoy building websites as much I used to, I explored mobile development. I was hooked. Fast-forward today, I'm fluent in
                        <span class=" text-white font-mono">Flutter, </span>
                        <span class=" text-white font-mono">ReactJS, </span>and
                        <span class=" text-white font-mono">Django. </span>and
                    Currently, I'm learning 
                        <span class=" text-white font-mono">Rust</span> and
                        <span class=" text-white font-mono">Image-processing.</span>
                    I've played around with Machine learning and I'm hoping to be well versed in that as well.    
                    </p>
                    <div class="flex w-full lg:w-72 h-72 bg-lightnavy mt-8 lg:mt-1"></div>
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