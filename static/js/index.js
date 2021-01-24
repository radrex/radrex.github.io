import Home from './views/Home.js';
import Work from './views/Work.js';
import Project from './views/Project.js';
import Contact from './views/Contact.js';
import Experience from './views/Experience.js';

const pathToRegex = path => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + "$");
const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }));

};

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

//--------- Client-side Router ---------
const router = async () => {
  const routes = [
    { path: '/', view: Home },
    { path: '/work', view: Work },
    { path: '/project/:id', view: Project },
    { path: '/experience', view: Experience },
    { path: '/contact', view: Contact },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);  //Current selected match/URL
  if (!match) { // if undefined (invalid url)
    match = {
      route: routes[0], // home page //TODO add 404 path and use it in this case
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));
  let mainElement = document.querySelector('#app');
  mainElement.className = `${location.pathname === '/' ? 'home' : location.pathname.includes('project/') ? 'project' : location.pathname.slice(1)}`; /* setting class for the current page (for easier CSS styling) */
  mainElement.innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  //-------------------------- NAVIGATION EVENT LISTENER ------------------------------------
  document.body.addEventListener('click', evt => {
    if (evt.target.matches('[data-link]')) { // if clicked link has data-link attribute, prevent its default <a> behavior and navigateTo(href)
      evt.preventDefault();
      navigateTo(evt.target.href);
      window.scrollTo(0, 0); // Scroll to top after render

      //------------ Select item in menu for current page ------------
      let menu = document.getElementById('menu');
      menu.querySelector('.active').classList.remove('active');
      menu.querySelector(`a[href="${location.pathname.includes('project') ? '/work' : `${location.pathname}`}"]`).classList.add('active');
      document.getElementById('menu-toggler').checked = false;
    }
  });

  //-------------------------- CONTACT FORM EVENT LISTENER ------------------------------------
  document.body.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    let data = new FormData(document.forms['send-message-form']);

    let messageData = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    }

    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (messageData.name === '') {
      displayError("⛔ What's your name again? 🤨", 'invalid-name');
    } else if (messageData.name.length > 25) {
      displayError("⛔ Just pick a nickname 😑", 'invalid-name');
    } else if (messageData.email === '') {
      displayError("⛔ How Am I supposed to reach you? 📭", 'invalid-email');
    } else if (!regex.test(messageData.email)) {
      displayError("⛔ Don't try to hack me, that's my job 🐱‍👤", 'invalid-email');
    } else if (messageData.message === '') {
      displayError("⛔ Go on, say something... It`s not that hard 🎙️", 'invalid-message');
    } else {
      await fetch('https://formspree.io/f/xvovdlno', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify(messageData),
      })
      .then(displayInfo('Me when I receive message from you 👁️👄👁️', 'successfully-send'))
      .catch(err => console.log(err)); //TODO handle error with a notification or something
  
      navigateTo('/contact');
    }
  });

  router();
});

//------------------------- NOTIFICATIONS -----------------------------------
function displayError(message, id) {
  //TODO - font-size and transitions for higher resolutions (media-queries)
  let errorBox = document.getElementById(id);
  let oldPlaceholder = errorBox.placeholder;

  errorBox.style.fontSize = '70%';
  errorBox.value = '';
  errorBox.placeholder = message;

  setTimeout(() => {
    errorBox.style.fontSize = '100%';
    errorBox.placeholder = oldPlaceholder;
  }, 2000);
}

function displayInfo(message, id) {
  //TODO - font-size and transitions for higher resolutions (media-queries)
  let infoBox = document.getElementById(id);
  let oldValue = infoBox.value;
  infoBox.style.fontSize = '70%';

  infoBox.value = message;
  setTimeout(() => {
    infoBox.style.fontSize = '100%';
    infoBox.value = oldValue;
  }, 5000);
}