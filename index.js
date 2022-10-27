#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");

const y = chalk.yellow;
const g = chalk.green;
const c = chalk.cyan;
const b = chalk.bold;
const i = chalk.italic;

const cardOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "blue",
    title: `${b("Sam Bellen")} - ${i("Principal Developer Advocate at Auth0")}`,
    titleAlignment: 'center'
};

const content = `${b("Social links")}

${g("Twitter")}            ${y("https://twitter.com/sambego")}
${g("GitHub")}             ${y("https://github.com/sambego")}
${g("Website")}            ${y("https://sambego.tech")}
${g("LinkedIn")}           ${y("https://linkedin.com/in/sambellen/")}

${b("Slides")}

${g("JSON Web Tokens")}    ${y("https://jwt.sambego.tech")}
${g("Passwordless")}       ${y("https://1990.sambego.tech")}
${g("Webauthn")}           ${y("https://webauthn.sambego.tech")}
${g("Web Cryptography")}   ${y("https://jose.sambego.tech")}
${g("Access Control")}     ${y("https://ac.sambego.tech")}

${g("Web Audio")}          ${y("https://audio.sambego.tech")}
${g("Web APIs")}           ${y("https://go-web.sambego.tech")}
${g("Web APIs")}           ${y("https://meow.sambego.tech")}

${b("Experiments")}

${g("RSA Playground")}      ${y("https://rsa.sambego.tech")}
${g("DPOP Playground")}     ${y("https://dpop.sambego.tech")}`;

const slidesContent = ``;

const card = boxen(content, cardOptions);

console.log(card);