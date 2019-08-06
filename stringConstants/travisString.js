const travisStringNoDeployment = () => `language: node_js
node_js:
  - 'stable'
cache:
  directories:
    - node_modules
script:
  - npm test
  - npm run build
on:
  branch: master`;

const travisStringWithDeployment = url => `language: node_js
node_js:
  - 'stable'
cache:
  directories:
    - node_modules
script:
  - npm test
  - npm run build
deploy:
  provider: surge
  skip_cleanup: true
  domain: ${url}
  project: ./build/
after_success:
  - surge --project ./build --domain ${url}
on:
  branch: master`;

module.exports = { travisStringNoDeployment, travisStringWithDeployment };
