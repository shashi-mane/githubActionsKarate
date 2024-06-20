function fn() {
  var env = karate.env; // get system property 'karate.env'
  // karate.log('karate.env system property was:', env);
  var browser = karate.properties['browser'] || 'chromedriver';
  karate.log('the browser set is: ' + browser + ', default: "chrome"');

  var config = {
    env: env,
    browser:browser,
    myVarName: 'someValue',
    baseUrl:  'https://www.saucedemo.com/',
    driver: {
      type: 'chrome',
      executable: "C://Program Files//Google//Chrome//Application//chrome.exe" // Specify ChromeDriver path if needed
    }
    // locators: read('classpath:UI_Automation_Project/login/locators.json'),
    // testData: read('classpath:UI_Automation_Project/login/testData.json')
  }
  if (!env) {
    env = 'dev';
  }
  
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
    config.baseUrl =  "https://www.saucedemo.com/"
    config.homepageUrl = "https://www.saucedemo.com/inventory.html"
  } else if (env == 'e2e') {
    // customize
  }
  // config.locators = read('file:UI_Automation_Project/src/test/java/UI_Automation_Project/login/locators.json');
  config.locators = read('file:UI_Automation_Project/login/locators.json');
  config.testData = read('file:UI_Automation_Project/login/testData.json');

  return config;
}
