# frozen_string_literal: true

require 'base_process'
require 'utils/paths'
require 'log/log'

module Custom
  module Post
    class HelloWorld < ::Toolchain::BaseProcess
      def initialize(priority = 100)
        super(priority)
        @testvar = 'test'
      end

      def run
        log('HelloWorld', 'Test Post Process')
      end
    end
  end
end

::Toolchain::PostProcessManager.instance.register(
  Custom::Post::HelloWorld.new
)
