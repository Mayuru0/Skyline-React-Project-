import React from 'react'

const Economy = () => {
  return (
    <div className=' ml-[250px] '>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./src/assets/Expreience/economy/12.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./src/assets/Expreience/economy/2.jpeg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./src/assets/Expreience/economy/2.jpeg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./src/assets/Expreience/economy/3.jpeg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src=" ./src/assets/Expreience/economy/4.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src=" ./src/assets/Expreience/economy/8.jpg" alt=""/>
        
        </div>
    </div>
    <div class="grid gap-4">
        <div>
        <video autoPlay muted loop class='w-full h-full object-cover max-w-full rounded-lg'>
        <source src="./src/assets/Expreience/economy/v1.mp4" type="video/mp4" />
      
    </video>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./src/assets/Expreience/economy/11.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./src/assets/Expreience/economy/12.jpeg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
        {/* <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>*/}
        <video autoPlay muted loop class='w-full h-full object-cover'>
        <source src="./src/assets/Expreience/economy/v1.mp4" type="video/mp4" />
      
    </video>
        </div>
    </div>
</div>

</div>
    
  )
}

export default Economy