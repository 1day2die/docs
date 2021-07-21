---
sidebar_position: 4
---
# Updating
### Enable Maintenance Mode
```bash
cd /var/www/dashboard
sudo php artisan down
```
### Pulling the new files
```bash
sudo git stash
sudo git pull
sudo chmod -R 755 /var/www/dashboard
```

### Update dependencies
```bash
sudo composer install --no-dev --optimize-autoloader
```

### Updating the database
```bash
sudo php artisan migrate --seed --force
```

### Clear Compiled Template Cache
```bash
sudo php artisan view:clear
sudo php artisan config:clear
```

### Set permissions
```bash
# If using NGINX or Apache (not on CentOS):
sudo chown -R www-data:www-data /var/www/dashboard/*

# If using NGINX on CentOS:
sudo chown -R nginx:nginx /var/www/dashboard/*

# If using Apache on CentOS
sudo chown -R apache:apache /var/www/dashboard/*
```
### Restarting Queue Workers
After every update you should restart the queue worker to ensure that the new code is loaded in and used.
```bash
sudo php artisan queue:restart
```

### Disable Maintenance Mode
```bash
sudo php artisan up
```

## Disclaimer
Warning, The dashboard is currently in pre-release and may contain some bugs 🐛 <br/>
Use This dashboard at your own risk.

If you notice any bugs or would like something to be improved or added, let us know by making a [GitHub Issue](https://github.com/ControlPanel-gg/dashboard/issues/new/choose)<br /> for any major security risk contact _AVMG#1234_


