require "sinatra"
require "slim"

get "/" do
  slim :index
end

get "/cat" do
  slim :cat
end
