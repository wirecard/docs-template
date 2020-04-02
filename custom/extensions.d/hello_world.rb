# frozen_string_literal: true

require 'extension_manager'
require 'base_extension'
require 'log/log'

module Custom
  class HelloWorld < ::Toolchain::BaseExtension
    def run(adoc)
      log('HelloWorld', "Hello #{adoc.original.attr('docfile')}")
    end
  end
end

::Toolchain::ExtensionManager.instance.register(
  Custom::HelloWorld.new
)
