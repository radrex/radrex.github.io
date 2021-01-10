import Home from './views/Home.js';
import Work from './views/Work.js';
import Project from './views/Project.js';
import Contact from './views/Contact.js';

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
  mainElement.className = `${location.pathname == '/' ? 'home' : location.pathname.slice(1)}`; /* setting class for the current page (for easier CSS styling) */
  mainElement.innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', evt => {
    if (evt.target.matches('[data-link]')) { // if clicked link has data-link attribute, prevent its default <a> behavior and navigateTo(href)
      evt.preventDefault();
      navigateTo(evt.target.href);
    }
  });

  router();
});

//------------------------- HAMBURGER MENU -----------------------------------
document.getElementById('menu').addEventListener('click', function(evt) {
  if (evt.target && evt.target.nodeName === 'A') {
    evt.currentTarget.getElementsByClassName('active')[0].classList.remove('active');
    evt.target.classList.add('active');
    document.getElementById('menu-toggler').checked = false;
  }
});