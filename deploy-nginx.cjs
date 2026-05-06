const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function run() {
  try {
    await ssh.connect({
      host: '31.128.41.93',
      username: 'root',
      privateKeyPath: require('os').homedir() + '/.ssh/vps_begit'
    });
    
    const cmd = `cat << 'EOF' > /etc/nginx/sites-available/alenagotto.ru
server {
    listen 80;
    server_name alenagotto.ru;
    root /var/www/alena;
    index index.html index.htm index.js;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF
ln -sf /etc/nginx/sites-available/alenagotto.ru /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
certbot --nginx -d alenagotto.ru --non-interactive --agree-tos --redirect -m gotovo27@yandex.ru
`;

    console.log('Running commands on VPS...');
    const result = await ssh.execCommand(cmd);
    console.log('STDOUT:', result.stdout);
    console.log('STDERR:', result.stderr);
    
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
