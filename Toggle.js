// See More Toggle Menu
document.getElementById('seeMore').addEventListener('click', function() {
   const seeMore = document.getElementById('seeMore');
    const toggleMore = document.getElementById('toggleMore');

if (toggleMore.style.display === 'block'){
    toggleMore.style.display = 'none';
}else{
    toggleMore.style.display = 'block';
}
});


// Navigation Selection 
document.querySelectorAll('.navSelect').forEach((navItem, index) => {
    navItem.addEventListener('click', function() {
        const hrElements = document.querySelectorAll('.hr');
        
        // Hide all hr elements first
        hrElements.forEach(hr => {
            hr.style.display = 'none';
        });
        
        // Then display the corresponding hr element
        const hr = hrElements[index];
        hr.style.display = 'block';
    });
});





// const navSelect = document.querySelectorAll('navSelect') 
// const hr = document.querySelectorAll('hr')
//     .addEventListener('click', function(){
//     if(hr.style.display === 'block'){
//         hr.style.display = 'none';
    
// }else{
//     hr.style.display = 'block';
// }
// });




//   // Get all video elements with the class 'videoHover'
//   const videos = document.querySelectorAll('.videoHover');

//   // Loop through each video and add the event listeners
//   videos.forEach(function(video) {
//     // Play the video when the user hovers over it
//     video.addEventListener('mouseenter', function() {
//         window.requestAnimationFrame(() => {
//             video.play();
        
//     });
//     });

//     // Pause the video when the user stops hovering
//     video.addEventListener('mouseleave', function() {
//       video.pause();
//     });
//   });