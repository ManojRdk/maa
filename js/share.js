const shareinstagram = document.getElementById('shareinstagram')

shareinstagram.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.instagram.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});


    //whatsapp
    
const sharewhatsapp = document.getElementById('sharewhatsapp')

sharewhatsapp.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.whatsapp.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

    //twitter
    
const sharetwitter = document.getElementById('sharetwitter')

sharetwitter.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.twitter.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
    //fb
    
const sharefacebook = document.getElementById('sharefacebook')

sharefacebook.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.facebook.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
    //sanpchat
    
const sharesnapchat = document.getElementById('sharesnapchat')

sharesnapchat.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.snapchat.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

// yt

const shareyoutube = document.getElementById('shareyoutube')

shareyoutube.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.youtube.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
// threads

const sharethreads = document.getElementById('sharethreads')

sharethreads.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.threads.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
// telegram

const sharetelegram= document.getElementById('sharetelegram')

sharetelegram.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.telegram.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
// tittok

const sharetiktok = document.getElementById('sharetiktok')

sharetiktok.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.tiktok.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
// messenger

const sharemessenger = document.getElementById('sharemessenger')

sharemessenger.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.messenger.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
// line

const shareline = document.getElementById('shareline')

shareline.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.line.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
// wechat

const sharewechat= document.getElementById('sharewechat')

sharewechat.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.wechat.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//pinterest

const sharepinterest= document.getElementById('sharepinterest')

sharepinterest.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.pinterest.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//skype

const shareskype= document.getElementById('shareskype')

shareskype.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.skype.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//viber

const shareviber= document.getElementById('shareviber')

shareviber.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.viber.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

