###Tmux

| Command	| Description	|  
|  ------	| ------	|  
| tmux	| Start tmux	|  
| tmux new -s *sessionname*	| Start tmux with a  new session called *sessionname*	|  
| tmux ls	| Get a list of all running sessions	|  
| tmux new -s *sessionname* -d	| Create a new detached session	|  
| tmux attach -t *sessionname*	| Attach to a session by name	|  
| tmux kill-session -t *sessionname*	| Kill a session by name	|  
| tmux new -s *name* -n *command*	| Run *command* in a new window in a new session	|  
[Command Line]

| Command   | Description   |  
|  ------   | ------    |  
| `prefix`[^1] **d**	| Detach from a session	|  
| `prefix` **c**    | Create a new window |
| `prefix` **n** 	| Next window in this session	|  
| `prefix` **p**	| Previous window in this session	|  
| `prefix` **,**	| Rename current window	|  
| `prefix` **#**	| Switch to window `#`	|  
| `prefix` **f**	| Find a window by name	|  
| `prefix` **w**	| Display a menu to choose a window	|  
| `prefix` **&**	| Prompt to kill the window	|  
| `prefix` **%**	| Divide window vertically into panes	|  
| `prefix` **"**	| Divide window horizontally into panes	|  
| `prefix` **o**	| Cycle through panes	|  
| `prefix` ***arrow keys***	| Cycle through panes	|  
| `prefix` ***spacebar***	| Cycle through pane layouts	|  
| `prefix` **x**	| Prompt to kill the pane (or window for last pane)	|  
| `prefix` **:**	| Enter Command Mode	|  
| `prefix` **?**	| List all keybindings	|  
| `prefix` **[**	| Enter Copy Mode	|  
| `prefix` **]**	| Paste from Copy Mode	| 
[Inside tmux]

| Command	| Description	|  
|  ------	| ------	|  
| `Space`	| Start copy	|  
| *movement keys*	| Expand your selection	|  
| ?	| Start backward search through buffer	|  
| /	| Start forward search through buffer	|  
| f  *character*	| Move to next occurrence of *character*	|  
| F *character*	| Move to previous occurrence of *character*	|   
| `Enter`	| End copy	|  
[Copy Mode Keys]

| Setting	| Default	| Recommended	| command[^2]	|  
|  ------	| ------	| ------	| ------ 	| 
| `Prefix`	| `ctrl-b`	| `ctrl-a`	| `set -g prefix C-a`[^3]	|  
| Escape Time	| 500	| 1	| `set -s escape-time 1`	|  
| Split window into two vertical panes	| `prefix` %	| `prefix |`	| `bind | split-window -h`	|  
| Split window into two horizontal panes	| `prefix` "	| `prefix -`	| `bind - split-window -v`	|  
| Use vi-style bindings in Copy Mode	| N/A	| hjkl  for moving around	| `sets -g mode-keys vi`	| 
[Recommended Configuration Changes]  

*Many of these hints are from [tmux: Productive Mouse-Free Development](http://pragprog.com/book/bhtmux/tmux) by Brian P. Hogan.*

[^1]: By default `prefix` is mapped to `ctrl-b`. If you haven't remapped your `Caps Lock` key to `ctrl` yet, now would be a good time to do so!

[^2]: This is the line you add to your `.tmux.conf` file

[^3]: You should probably also add a line to unbind the defaults if you bind new keys for things. Just add a line saying `unbind C-b` to unbind the default `prefix` key.
