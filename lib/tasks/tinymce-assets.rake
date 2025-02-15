namespace :assets do
  task :tinymce => :environment do
    require "tinymce/rails/asset_installer"
    
    assets = Pathname.new(File.expand_path(File.dirname(__FILE__) + "/../../vendor/assets/javascripts/tinymce"))
    
    config   = Rails.application.config
    target   = File.join(Rails.public_path, config.assets.prefix)
    manifest = config.assets.manifest
    
    installer = TinyMCE::Rails::AssetInstaller.new(assets, target, manifest)
    installer.log_level = Logger::INFO
    installer.strategy = config.tinymce.install
    installer.install
  end
end

assets_task = 'assets:precompile'

Rake::Task[assets_task].enhance do
  Rake::Task["assets:tinymce"].invoke
end
