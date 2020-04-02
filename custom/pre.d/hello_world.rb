# frozen_string_literal: true

require 'base_process'
require 'utils/paths'
require 'log/log'

module Custom
  module Pre
  class HelloWorld < ::Toolchain::BaseProcess
    def initialize(priority = 100)
      super(priority)
      @testvar = 'test'
    end

    def run
      log('HelloWorld', 'Test Pre Process')
    end
  end
  end
end

::Toolchain::PreProcessManager.instance.register(
  Custom::Pre::HelloWorld.new
)
