// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if(license){
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)` 
   }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
`;
}

// module.exports = generateMarkdown;

// Contents.link = (guide, article) => {
//   const guideLink = document.createElement('a'),
//   const articleLink = document.createElement('a'),
//   const articleName = article.innerText,
//   const articleId = article.id || Contents.id(articleName);
 
//   article.id = articleId;
 
//   articleLink.href = '#' + articleId;
 
//   while (article.childNodes.length) {
//     articleLink.appendChild(article.childNodes[0], articleLink);
//   }
 
//   article.appendChild(articleLink);
 
//   guideLink.appendChild(document.createTextNode(articleName));
//   guideLink.href = '#' + articleId;
//   guide.insertBefore(guideLink, guide.firstChild);
// };