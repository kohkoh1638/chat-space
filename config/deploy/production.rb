server '54.65.199.203', user: 'ec2-user', roles: %w{app db web}

set :ssh_options, {
  port: 22,　#XXXにポート番号
  keys: [File.expand_path('~/.ssh/id_rsa')],　#'~/.ssh/id_rsa'部分をローカル環境の鍵のパスに
  forward_agent: true,
  auth_methods: %w(publickey)
}