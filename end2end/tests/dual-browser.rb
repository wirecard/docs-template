require "selenium-webdriver"

chrome_capabilities = Selenium::WebDriver::Remote::Capabilities.chrome
firefox_capabilities = Selenium::WebDriver::Remote::Capabilities.firefox

chrome = Selenium::WebDriver.for(:remote,
  :url => 'http://localhost:4444/wd/hub',
  :desired_capabilities => chrome_capabilities)
firefox = Selenium::WebDriver.for(:remote,
  :url => 'http://localhost:4444/wd/hub',
  :desired_capabilities => firefox_capabilities)

[firefox, chrome].each do |browser|
  browser.navigate.to "http://google.com"

  element = browser.find_element(name: 'q')
  element.send_keys "Hello WebDriver!"
  element.submit

  puts "#{browser} -> #{browser.title}"

  browser.quit
end

