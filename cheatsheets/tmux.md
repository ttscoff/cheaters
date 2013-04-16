###Tmux

| Command	| Description	|  
|  ------	| ------	|  
| tmux	| start tmux	|  
| tmux new -s *sessionname*	| start tmux with a  new session called *sessionname*	|  
| tmux ls	| get a list of all running sessions	|  
| tmux new -s *sessionname* -d	| Create a new detached session	|  
| tmux attach -t *sessionname*	| Attach to a session by name	|  
| tmux kill-session -t *sessionname*	| Kill a session by name	|  
| tmux new -s *name* -n *command*	| Run *command* in a new window in a new session	|  
[Command Line]

| Command	| Description	|  
|  ------	| ------	|  
| `prefix`[^1] d	| Detach from a session	|  
| `prefix` n 	| Next window in this session	|  
| `prefix` p	| Previous window in this session	|  
| `prefix` ,	| Rename current window	|  
| `prefix` #	| Switch to window `#`	|  
| `prefix` f	| Find a window by name	|  
| `prefix` w	| Display a menu to choose a window	|  
| `prefix` &	| Prompt to kill the window	|  
| `prefix` %	| Divide window vertically into panes	|  
| `prefix` "	| Divide window horizontally into panes	|  
| `prefix` o	| Cycle through panes	|  
| `prefix` *arrow keys*	| Cycle through panes	|  
| `prefix` *spacebar*	| Cycle through pane layouts	|  
| `prefix` x	| Prompt to kill the pane (or window for last pane)	|  
| `prefix` :	| Enter Command Mode	|  
| `prefix` ?	| List all keybindings	| 
[Inside tmux]

| Command	| Default	| Recommended	| command[^2]	|  
|  ------	| ------	| ------	| ------ 	| 
| Prefix	| `ctrl-b`	| `ctrl-a`	| `set -g prefix C-a`[^3]	|  
| Escape Time	| 500	| 1	| `set -s escape-time 1`	|  
[Recommended Configuration Changes]  

Many hints are from *[tmux: Productive Mouse-Free Development](http://pragprog.com/book/bhtmux/tmux)* by Brian P. Hogan.

[^1]: By default `prefix` is mapped to `ctrl-b`. If you haven't remapped your `Caps Lock` key to `ctrl` yet, now would be a good time to do so!

[^2]: This is the line you add to your `.tmux.conf` file

[^3]: You should probably also add a line to unbind the defaults if you bind new keys for things. Just add a line saying `unbind C-b` to unbind the default `prefix` key.