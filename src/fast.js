const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function waitForResults(dom) {
  const $ = (...args) => dom.window.document.querySelector(...args);
  const isDone = Boolean($('#speed-value.succeeded'));
  const speed = Number($('#speed-value').textContent);
  const unit = $('#speed-units').textContent.trim();

  if (!isDone) {
    console.log(`~ Speed ${speed} ${unit}`);
    setTimeout(() => waitForResults(dom), 1000);
  } else {
    console.log(`\n= Speed ${speed} ${unit}`);
    dom.window.close();
  }
}

module.exports = function runSpeedTest() {
  console.log('Starting bandwidth test...');
  JSDOM.fromURL('https://fast.com', {
    includeNodeLocations: true,
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    resources: 'usable',
  }).then((dom) => {
    waitForResults(dom);
  }).catch((ex) => { console.error('Error', ex); });
}
