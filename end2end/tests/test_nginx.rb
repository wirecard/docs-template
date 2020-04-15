require 'minitest/autorun'
require_relative "../framework.rb"

class TestNginx < Minitest::Test
  def test_nginx
    title = E2ETests.run do |browser|
      browser.navigate.to 'http://nginx/'
      browser.title
    end
    assert_equal('Welcome to nginx!', title)
  end
end
