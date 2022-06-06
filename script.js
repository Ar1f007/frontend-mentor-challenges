'use strict';
const parentList = document.querySelector('.projects-list');

const projects = [
  {
    name: 'Tip calculator app',
    img: '	https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/hxkpctp6cd1meeytfdl2.jpg',
    stacks: ['html', 'css', 'Js'],
    level: 'Junior',
    github: 'https://github.com/Ar1f007/fmentor-tip-calculator-app',
    liveSite: 'https://fmentor-tip-calculator-app.vercel.app/',
  },
  {
    name: 'Fylo dark theme landing page',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/mhwyzwfgaii3cw5s6jco.jpg',
    stacks: ['html', 'css', 'Js'],
    level: 'Junior',
    github: 'https://github.com/Ar1f007/fmentor-fylo-dark-theme-landing-page',
    liveSite: 'https://fmentor-fylo-dark-theme-landing-page.vercel.app/',
  },
  {
    name: 'Ping single column coming soon page',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/qjiprcu1e19yvujjrflv.jpg',
    stacks: ['html', 'css', 'Js'],
    level: 'Newbie',
    github: 'https://github.com/Ar1f007/fmentor-Ping-coming-soon-page',
    liveSite: 'https://ping-coming-soon-page-ar1f007.vercel.app/',
  },
  {
    name: 'Huddle landing page with a single introductory section',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/aaykth21moiquxkubywu.jpg',
    stacks: ['html', 'css'],
    level: 'Newbie',
    github: 'https://github.com/Ar1f007/fmentor-huddle-landing-page',
    liveSite: 'https://huddle-landing-page-ar1f007.vercel.app/',
  },
  {
    name: 'Single price grid component',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/i6wu7n5sthrxgfpfibvx.jpg',
    stacks: ['html', 'css'],
    level: 'Newbie',
    github: 'https://github.com/Ar1f007/fmentor-single-price-grid-component',
    liveSite: 'https://single-price-grid-component-ar1f007.vercel.app/',
  },
  {
    name: 'Stats preview card component',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/sucvvhutd4codsxpzvw7.jpg',
    stacks: ['html', 'css'],
    level: 'Newbie',
    github: 'https://github.com/Ar1f007/fmentor-stats-preview-card-component',
    liveSite: 'https://stats-preview-card-component-ar1f007.vercel.app/',
  },
  {
    name: 'Four card feature section',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/a3b5gbgtfbtiqrdawpwp.jpg',
    stacks: ['html', 'css'],
    level: 'Newbie',
    github: 'https://github.com/Ar1f007/fmentor-four-card-feature-section',
    liveSite: 'https://four-card-feature-section-ar1f007.vercel.app/',
  },
  {
    name: 'Social proof section',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/bnjpxmx9fudsmerfj6eo.jpg',
    stacks: ['html', 'css'],
    level: 'Newbie',
    github: 'https://github.com/Ar1f007/fmentor-social-proof-section-master',
    liveSite: 'https://social-proof-section-master-ar1f007.vercel.app/',
  },
  {
    name: '3 column preview card component',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/juir90bwmmvlo86g9paz.jpg',
    stacks: ['html', 'css'],
    level: 'Newbie',
    github: 'https://github.com/Ar1f007/fmentor-3-column-preview-card-component-main',
    liveSite: 'https://3-column-preview-card-component-main-ruby.vercel.app/',
  },

  {
    name: 'Profile Card Component',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/dia0o9uigiiz4gebiqps.jpg',
    stacks: ['html', 'css'],
    level: 'Newbie',
    github: 'https://github.com/Ar1f007/fmentor-profile-card-component-main',
    liveSite: 'https://profile-card-component-main-git-master-ar1f007.vercel.app/',
  },
];
projects.forEach((project) => {
  const html = `
    <li class="project">
                <figure class="card">
                    <img src="${project.img}" alt="img" class="card__img">
                    <h2 class="card__heading">${project.name}</h2>
                    <div class="card__stacks-levels">
                        <ul class="stacks-list">
                        ${project.stacks.map(
                          (stack) =>
                            `<li class='${
                              stack.includes('html') ? 'html' : stack.includes('css') ? 'css' : 'js'
                            } stack'>${stack}</li>`
                        )}
                        </ul>
                        
                        <p class='${project.level.includes('Junior') ? 'junior' : 'newbie'} level'>
                           ${project.level}
                        </p>
                    </div>
                    <ul class="links-list">
                        <li class="link">
                            <a href='${project.liveSite}' target='_blank' title='live site'>
                                <img src="SVG/external-link.svg" alt='url icon'>
                            </a>
                        </li>
                        <li class="link">
                            <a href='${project.github}' target='_blank'  title='source code'>
                                <img src='SVG/github.svg' alt="github icon">
                            </a>
                        </li>
                    </ul>
                </figure>
            </li>    
    `;

  parentList.insertAdjacentHTML('beforeend', html);
});
