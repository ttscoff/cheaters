###Drush commands

####Execute a drush command

| Command | Description |
| ----:|:---- |
| Run `drush help [command]` to view command-specific help | Run `drush topic` to read even more documentation |

####Global options 

(see `drush topic core-global-options` for the full list)

| Command | Description |
| ----:|:---- |
| -d, --debug | Display even more information, including internal messages |
| -h, --help | This help system |
| -n, --no | Assume 'no' as answer to all prompts |
| -r <path>, --root=<path> | Drupal root directory to use (default: current directory) | |
| -s, --simulate | Simulate all relevant actions (don't actually change the system) | |
| -l \<http://examplecom:8888\><br>\-\-uri=\<http://examplecom:8888\> | URI of the drupal site to use (only needed in multisite environments or when running on an alternate port) |
| -v, --verbose | Display extra information about the command |
| -y, --yes | Assume 'yes' as answer to all prompts |

####Core drush commands: (core)

| Command | Description |
| ----:|:---- |
| archive-dump (ard), archive-backup (arb) | Backup your code, files, and database into a single file |
| archive-restore (arr) | Expand a site archive into a Drupal web site |
| browse | Display a link to a given path or open link in a browser |
| core-cli (php) | Open an interactive shell on a Drupal site |
| core-config (conf, config) | Edit drushrc, site alias, and Drupal settingsphp files |
| core-cron (cron) | Run all cron hooks in all active modules for specified site |
| core-execute (exec, execute) | Execute a shell command Usually used with a site alias |
| core-quick-drupal (qd) | Download, install, serve and login to Drupal with minimal configuration and dependencies |
| core-requirements (status-report, rq) | Provides information about things that may be wrong in your Drupal installation, if any |
| core-rsync (rsync) | Rsync the Drupal tree to/from another server using ssh |
| core-status (status, st) | Provides a birds-eye view of the current Drupal installation, if any |
| core-topic (topic) | Read detailed documentation on a given topic |
| drupal-directory (dd) | Return path to a given module/theme directory |
| help | Print this help message See `drush help help` for more options |
| image-derive (id) | Create an image derivative |
| image-flush (if) | Flush all derived images for a given style |
| php-eval (eval, ev) | Evaluate arbitrary php code after bootstrapping Drupal (if available) | |
| php-script (scr) | Run php script(s) | |
| queue-list | Returns a list of all defined queues |
| queue-run | Run a specific queue by name |
| shell-alias (sha) | Print all known shell alias records |
| site-alias (sa) | Print site alias records for all known site aliases and local sites |
| site-install (si) | Install Drupal along with modules/themes/configuration using the specified install profile |
| site-set (use) | Set a site alias to work on that will persist for the current session |
| site-ssh (ssh) | Connect to a Drupal site's server via SSH for an interactive session or to run a shell command |
| test-clean | Clean temporary tables and files |
| test-run | Run tests Note that you must use the --uri option via the CLI or via a site alias |
| updatedb (updb) | Apply any database updates required (as with running updatephp) | |
| updatedb-status (updbst) | List any pending database updates |
| usage-send (usend) | Send anonymous Drush usage information to statistics logging site Usage statistics contain the Drush command name and the Drush option names, but no arguments or option values |
| usage-show (ushow) | Show Drush usage information that has been logged but not sent Usage statistics contain the Drush command name and the Drush option names, but no arguments or option values |
| variable-delete (vdel) | Delete a variable |
| variable-get (vget) | Get a list of some or all site variables and values |
| variable-set (vset) | Set a variable |
| version | Show drush version |

####Runserver commands: (runserver)

| Command | Description |
| ----:|:---- |
| runserver (rs) | Runs a lightweight built in http server for development |

####Tools for auditing a Drupal site: (site_audit)

| Command | Description |
| ----:|:---- |
| audit_all (aa) | Executes every Site Audit Report |
| audit_best_practices (abp) | Audit best practices used |
| audit_block (ab) | Audit Block |
| audit_cache (ac) | Audit Drupal's caching settings |
| audit_codebase (acb) | Audit the codebase |
| audit_content (acn) | Audit content |
| audit_cron (acr) | Audit cron |
| audit_database (ad) | Report information about a site environment's database |
| audit_extensions (ae) | Audit extensions (modules and themes) | |
| audit_insights (agi) | Analyze a site using Google PageSpeed Insights |
| audit_security (asec) | Audit the site for known security vulnerabilities |
| audit_status (as) | Audit Drupal's built-in status report |
| audit_users (au) | Audit Users |
| audit_views (av) | Audit Views |
| audit_watchdog (aw) | Audit the database logs |
| site-audit-version | Show the Site Audit version |

####Cache commands: (cache)

| Command | Description |
| ----:|:---- |
| cache-clear (cc) | Clear a specific cache, or all drupal caches |
| cache-get (cg) | Fetch a cached object and display it |
| cache-rebuild (cr, rebuild) | Rebuild a Drupal 8 site and clear all its caches |
| cache-set (cs) | Cache an object expressed in JSON or `var_export()` format |

####Config commands: (config)

| Command | Description |
| ----:|:---- |
| config-edit (cedit) | Open a config file in a text editor Edits are imported into active configration after closing editor |
| config-export (cex) | Export config from the active directory |
| config-get (cget) | Display a config value, or a whole configuration object |
| config-import (cim) | Import config from a config directory |
| config-list (cli) | List config names by prefix |
| config-set (cset) | Set config value directly in active configuration |

####Field commands: (field)

| Command | Description |
| ----:|:---- |
| field-clone | Clone a field and all its instances |
| field-create | Create fields and instances; returns urls for field editing |
| field-delete | Delete a field and its instances |
| field-info | View information about fields, field_types, and widgets |
| field-update | Return URL for field editing web page |

####Project manager commands: (pm)

| Command | Description |
| ----:|:---- |
| pm-disable (dis) | Disable one or more extensions (modules or themes) | |
| pm-download (dl) | Download projects from drupalorg or other sources |
| pm-enable (en) | Enable one or more extensions (modules or themes) | |
| pm-info (pmi) | Show detailed info for one or more extensions (modules or themes) | |
| pm-list (pml) | Show a list of available extensions (modules and themes) | |
| pm-refresh (rf) | Refresh update status information |
| pm-releasenotes (rln) | Print release notes for given projects |
| pm-releases (rl) | Print release information for given projects |
| pm-uninstall (pmu) | Uninstall one or more modules |
| pm-update (up) | Update Drupal core and contrib projects and apply any pending database updates (Same as pm-updatecode + updatedb) | |
| pm-updatecode (upc) | Update Drupal core and contrib projects to latest recommended releases |
| pm-updatestatus (ups) | Show a report of available minor updates to Drupal core and contrib projects |

####Role commands: (role)

| Command | Description |
| ----:|:---- |
| role-add-perm (rap) | Grant a specified permission to a role |
| role-create (rcrt) | Create a new role |
| role-delete (rdel) | Delete a role |
| role-list (rls) | Display a list of all roles defined on the system If a role name is provided as an argument, then all of the permissions of that role will be listed If a permission name is provided as an option, then all of the roles that have been granted that permission will be listed |
| role-remove-perm (rmp) | Remove a specified permission from a role |  |

####SQL commands: (sql)

| Command | Description |
| ----:|:---- |
| sql-cli (sqlc) | Open a SQL command-line interface using Drupal's credentials |
| sql-connect | A string for connecting to the DB |
| sql-create | Create a database |
| sql-drop | Drop all tables in a given database |
| sql-dump | Exports the Drupal DB as SQL using mysqldump or equivalent |
| sql-query (sqlq) | Execute a query against a database |
| sql-sanitize (sqlsan) | Run sanitization operations on the current database |
| sql-sync | Copy and import source database to target database Transfers via rsync |

####Search commands: (search)

| Command | Description |
| ----:|:---- |
| search-index | Index the remaining search items without wiping the index |
| search-reindex | Force the search index to be rebuilt |
| search-status | Show how many items remain to be indexed out of the total |

####User commands: (user)

| Command | Description |
| ----:|:---- |
| user-add-role (urol) | Add a role to the specified user accounts |
| user-block (ublk) | Block the specified user(s) | |
| user-cancel (ucan) | Cancel a user account with the specified name |
| user-create (ucrt) | Create a user account with the specified name |
| user-information (uinf) | Print information about the specified user(s) | |
| user-login (uli) | Display a one time login link for the given user account (defaults to uid 1) | |
| user-password (upwd) | (Re)Set the password for the user account with the specified name |
| user-remove-role (urrol) | Remove a role from the specified user accounts |
| user-unblock (uublk) | Unblock the specified user(s) | |

####User permission commands: (permissions)

| Command | Description |
| ----:|:---- |
| permissions-list (perl) | List user permissions |
| permissions-user (peru) | Print permissions of the specified user(s) |  |

####Watchdog commands: (watchdog)

| Command | Description |
| ----:|:---- |
| watchdog-delete (wd-del, wd-delete) | Delete watchdog messages |
| watchdog-list (wd-list) | Show available message types and severity levels A prompt will ask for a choice to show watchdog messages |
| watchdog-show (wd-show, ws) | Show watchdog messages |

####All commands in devel: (devel)

| Command | Description |
| ----:|:---- |
| devel-download | Downloads the FirePHP library from http://firephporg/ |
| devel-reinstall (dre) | Disable, Uninstall, and Install a list of projects |
| devel-token (token) | List available tokens |
| fn-hook (fnh, hook) | List implementations of a given hook and explore the source of the selected one |
| fn-view (fnv) | Show the source of specified function or method |

####All commands in devel_generate: (devel_generate)

| Command | Description |
| ----:|:---- |
| generate-content (genc) | Create content |
| generate-menus (genm) | Create menus and menu items |
| generate-terms (gent) | Create terms in specified vocabulary |
| generate-users (genu) | Create users |
| generate-vocabs (genv) | Create vocabularies |

####Other commands

| Command | Description |
| ----:|:---- |
| clean-modules | Find and remove enabled modules that do not exist from the database |
| composer | Perform package management and dependency tracking of your projects and libraries |
| drupalgeddon-test (drugtest) | Check for known indications of Drupalgeddon exploit |
| make | Turns a makefile into a working Drupal codebase |
| make-generate (generate-makefile) | Generate a makefile from the current Drupal site |
| registry-rebuild (rr) | Rebuild the registry table (for classes) and the system table (for module locations) in a Drupal install |
| stripe-download | Downloads the Stripe PHP library from <https://githubcom/stripe/stripe-php> |

(clean_missing_modules, composer, drupalgeddon, make, registry_rebuild, commerce_stripe)

---

Created by Stuart Hertzog
