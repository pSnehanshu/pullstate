/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
/*const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];*/

const siteConfig = {
  title: "Pullstate", // Title for your website.
  tagline: "Simple state stores using immer and React hooks",
  url: "https://lostpebble.github.io", // Your website URL
  baseUrl: "/pullstate/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "pullstate",
  organizationName: "lostpebble",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [{ doc: "quick-example", label: "Docs" }, { href: 'https://github.com/lostpebble/pullstate', label: 'GitHub' }],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: "img/icon-transparent-ondark-new.png",
  footerIcon: "img/icon-transparent-ondark-new.png",
  favicon: "img/icon-transparent-onlight.png",

  /* Colors for website */
  colors: {
    primaryColor: "#7c8ef1",
    secondaryColor: "#375979",
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Created by Paul Myburgh`,

  /*highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default",
  },*/

  usePrism: ["tsx", "jsx"],

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,
  gaTrackingId: "UA-141547545-1",

  // Open Graph and Twitter card images.
  ogImage: "img/logo-newest.png",
  twitterImage: "img/logo-newest.png",

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
