//instagram

const instagram= document.getElementById('instagram')

instagram.addEventListener('click', event => {

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

//linkedin

const linkedin= document.getElementById('linkedin')

linkedin.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.linkedin.com/'
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

const pinterest= document.getElementById('pinterest')

pinterest.addEventListener('click', event => {

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
//youtube

const youtube= document.getElementById('youtube')

youtube.addEventListener('click', event => {

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
//tittok

const tiktok= document.getElementById('tiktok')

tiktok.addEventListener('click', event => {

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
//snapchat

const snapchat= document.getElementById('snapchat')

snapchat.addEventListener('click', event => {

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
//whatsapp

const whatsapp= document.getElementById('whatsapp')

whatsapp.addEventListener('click', event => {

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

const twitter= document.getElementById('twitter')

twitter.addEventListener('click', event => {

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

const facebook= document.getElementById('facebook')

facebook.addEventListener('click', event => {

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
//amazonmusic

const amazonmusic= document.getElementById('amazonmusic')

amazonmusic.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.amazonmusic.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//gaana

const gaana= document.getElementById('gaana')

gaana.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.gaana.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//github

const github= document.getElementById('github')

github.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.github.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//line

const line= document.getElementById('line')

line.addEventListener('click', event => {

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
//zomato

const zomato= document.getElementById('zomato')

zomato.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.zomato.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//mesenger

const mesenger= document.getElementById('mesenger')

mesenger.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.mesenger.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//mimus

const mimus= document.getElementById('mimus')

mimus.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.mimusic.com/'
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

const skype= document.getElementById('skype')

skype.addEventListener('click', event => {

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
//spotify

const spotify= document.getElementById('spotify')

spotify.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.spotify.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//telegram

const telegram= document.getElementById('telegram')

telegram.addEventListener('click', event => {

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
//threads

const threads= document.getElementById('threads')

threads.addEventListener('click', event => {

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
//viber

const viber= document.getElementById('viber')

viber.addEventListener('click', event => {

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
//wechat

const wechat= document.getElementById('wechat')

wechat.addEventListener('click', event => {

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
//wynk

const wynk= document.getElementById('wynk')

wynk.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.wynk.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//ytmusic

const ytmusic= document.getElementById('ytmusic')

ytmusic.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.ytmusic.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//hungama

const hungama= document.getElementById('hungama')
hungama.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.hungama.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//musicappstream

const musicappstream= document.getElementById('musicappstream')
musicappstream.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.musicappstream.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//musicplayer

const musicplayer= document.getElementById('musicplayer')
musicplayer.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.musicplayer.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//jiosaavn

const jiosaavn= document.getElementById('jiosaavn')
jiosaavn.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.jiosaavn.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//ressomusic

const ressomusic= document.getElementById('ressomusic')
ressomusic.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.ressomusic.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//sound

const soundcloud= document.getElementById('soundcloud')
soundcloud.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.soundcloud.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//amazon

const amazon= document.getElementById('amazon')
amazon.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.amazon.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//flipkart

const flipkart= document.getElementById('flipkart')
flipkart.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.flipkart.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//meesho

const meesho= document.getElementById('meesho')
meesho.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.meesho.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//myntra

const myntra= document.getElementById('myntra')
myntra.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.myntra.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//ajio

const ajio= document.getElementById('ajio')
ajio.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.ajio.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//snapdeal

const snapdeal= document.getElementById('snapdeal')
snapdeal.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.snapdeal.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//swiggy

const swiggy= document.getElementById('swiggy')
swiggy.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.swiggy.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//bigbasket

const bigbasket= document.getElementById('bigbasket')
bigbasket.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.bigbasket.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//bigbazzar

const bigbazzar= document.getElementById('bigbazzar')
bigbazzar.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.bigbazzar.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//ebay

const ebay= document.getElementById('ebay')
ebay.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.ebay.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//tira

const tira= document.getElementById('tira')
tira.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.tira.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//lenskart

const lenskart= document.getElementById('lenskart')
lenskart.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.lenskart.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//olx

const olx= document.getElementById('olx')
olx.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.olx.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//tatacliq

const oltatacliqx= document.getElementById('tatacliq')
tatacliq.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.tatacliq.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//shopify

const shopify= document.getElementById('shopify')
shopify.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.shopify.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//shoppingzone

const shoppingzone= document.getElementById('shoppingzone')
shoppingzone.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.shoppingzone.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//naaptol

const naaptol= document.getElementById('naaptol')
naaptol.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.naaptol.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//shopsy

const shopsy= document.getElementById('shopsy')
shopsy.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.shopsy.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//max

const max= document.getElementById('max')
max.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.max.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//lazada

const lazada= document.getElementById('lazada')
lazada.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.lazada.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//google

const google= document.getElementById('google')
google.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.google.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//opera

const opera= document.getElementById('opera')
opera.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.opera.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//chromee

const chromee= document.getElementById('chromee')
chromee.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.chromee.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//firefox

const firefox= document.getElementById('firefox')
firefox.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.firefox.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//uc

const uc= document.getElementById('uc')
uc.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.ucbrowser.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//vidmate
const vidmate= document.getElementById('vidmate')
vidmate.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.vidmate.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//microsoft
const microsoft= document.getElementById('microsoft')
microsoft.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.microsoft.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//safari
const safari= document.getElementById('safari')
safari.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.safari.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//internet
const internet= document.getElementById('internet')
internet.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.internet.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//brave
const brave= document.getElementById('brave')
brave.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.brave.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//vivaldi
const vivaldi= document.getElementById('vivaldi')
vivaldi.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.vivaldi.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//duck
const duck= document.getElementById('duck')
duck.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.duck.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//chro
const chro= document.getElementById('chro')
chro.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.chro.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});