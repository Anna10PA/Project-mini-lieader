const images = 
['https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png',
'https://images.ctfassets.net/4cd45et68cgf/FJLXrcHViY5jAZYJLfXeg/22bb24c10cab4070c92806bbc8935379/Netflix_Games.png',
'https://images.ctfassets.net/4cd45et68cgf/2qNxGDkTwZ7EAzuo82rgN3/b563535b01ad58bd35f23eedfe5dda19/Ads_Plan_Blog_Header_Image_UK.png?w=2000',
'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/08/netflix.jpg',
'https://cdn.alza.cz/Foto/ImgGalery/Image/netflix-title_1.jpg'
];

let img_index = 0;

function changeImage() {
  const imgElement = document.getElementById('img');
  imgElement.classList.remove('active'); // ძველი სურათის გაუჩინარება

  setTimeout(() => {
    img_index = (img_index + 1) % images.length; // მომდევნო სურათის არჩევა
    imgElement.src = images[img_index];
    imgElement.classList.add('active'); // ახალი სურათის გამოჩენა
  }, 1000); // 1 წამი CSS ანიმაციისთვის
}

// ყოველ 10 წამში სურათის შეცვლა
setInterval(changeImage, 4000);


document.getElementById('image').classList.add('active');