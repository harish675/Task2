document.addEventListener("DOMContentLoaded", function () {
    const imageUrls = [
        "https://nack.life/cdn/shop/files/desktopbanner_1280x.jpg?v=1692342864", // Replace with your image URLs
        "https://nack.life/cdn/shop/files/Carousel_Web_Banner_img-01_1280x.jpg?v=1684483241",
        "https://nack.life/cdn/shop/files/Yoga_Day_Journal_Desktop_1280x.jpg?v=1689658304"
    ];
    
    const contentIds = ["content-1", "content-2", "content-3"];
    const rotatingDiv = document.getElementById("changed-background");
    let currentIndex = 0;

    function changeBackgroundImageAndContent() {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        const imageUrl = `url(${imageUrls[currentIndex]})`;
        rotatingDiv.style.backgroundImage = imageUrl;

        contentIds.forEach((contentId) => {
            document.getElementById(contentId).style.display = "none";
        });

        document.getElementById(contentIds[currentIndex]).style.display = "block";
    }

    // Change the background image every 3 seconds (adjust the time interval as needed)
    setInterval(changeBackgroundImageAndContent, 10000);
});
