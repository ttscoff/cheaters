{
    "id": "auto",
    "style": "css/h4dark.css",
    "layout": "default"
}
%%%END
### ANSI Escape Sequences

&gt; `"\033[31;1;4mHello\033[0m"`

#### Colors


| Code              | Color   | Example      |
| ---:              | :---    | :---         |
| Foreground colors |         |              |
| 30                | Black   | `\033[30;0m` |
| 31                | Red     | `\033[31;0m` |
| 32                | Green   | `\033[32;0m` |
| 33                | Yellow  | `\033[33;0m` |
| 34                | Blue    | `\033[34;0m` |
| 35                | Magenta | `\033[35;0m` |
| 36                | Cyan    | `\033[36;0m` |
| 37                | White   | `\033[37;0m` |
| Background colors |         |              |
| 40                | Black   | `\033[40;0m` |
| 41                | Red     | `\033[41;0m` |
| 42                | Green   | `\033[42;0m` |
| 43                | Yellow  | `\033[43;0m` |
| 44                | Blue    | `\033[44;0m` |
| 45                | Magenta | `\033[45;0m` |
| 46                | Cyan    | `\033[46;0m` |
| 47                | White   | `\033[47;0m` |

&gt; `"\033[31;1;4mHello\033[0m"`

#### Font Effects

| Code    | Effect                       | Note                                                                   |
| ---:    | :---                         | :---                                                                   |
| 0       | Reset / Normal               | all attributes off                                                     |
| 1       | Bold or increased intensity  |                                                                        |
| 2       | Faint (decreased intensity)  | Not widely supported.                                                  |
| 3       | Italic                       | Not widely supported. Sometimes treated as inverse.                    |
| 4       | Underline                    |                                                                        |
| 5       | Slow Blink                   | less than 150 per minute                                               |
| 6       | Rapid Blink                  | MS-DOS ANSI.SYS; 150+ per minute; not widely supported                 |
| 7       | [[reverse video]]            | swap foreground and background colors                                  |
| 8       | Conceal                      | Not widely supported.                                                  |
| 9       | Crossed-out                  | Characters legible, but marked for deletion.  Not widely supported.    |
| 10      | Primary(default) font        |                                                                        |
| 11-19   | Alternate font               | Select alternate font `n-10`                                           |
| 20      | Fraktur                      | hardly ever supported                                                  |
| 21      | Bold off or Double Underline | Bold off not widely supported; double underline hardly ever supported. |
| 22      | Normal color or intensity    | Neither bold nor faint                                                 |
| 23      | Not italic, not Fraktur      |                                                                        |
| 24      | Underline off                | Not singly or doubly underlined                                        |
| 25      | Blink off                    |                                                                        |
| 27      | Inverse off                  |                                                                        |
| 28      | Reveal                       | conceal off                                                            |
| 29      | Not crossed out              |                                                                        |
| 30-37   | Set foreground color         | See color table below                                                  |
| 38      | Set foreground color         | Next arguments are `5;n` or `2;r;g;b`, see below                       |
| 39      | Default foreground color     | implementation defined (according to standard)                         |
| 40-47   | Set background color         | See color table below                                                  |
| 48      | Set background color         | Next arguments are `5;n` or `2;r;g;b`, see below                       |
| 49      | Default background color     | implementation defined (according to standard)                         |
| 51      | Framed                       |                                                                        |
| 52      | Encircled                    |                                                                        |
| 53      | Overlined                    |                                                                        |
| 54      | Not framed or encircled      |                                                                        |
| 55      | Not overlined                |                                                                        |
| 60      | ideogram underline           | hardly ever supported                                                  |
| 61      | ideogram double underline    | hardly ever supported                                                  |
| 62      | ideogram overline            | hardly ever supported                                                  |
| 63      | ideogram double overline     | hardly ever supported                                                  |
| 64      | ideogram stress marking      | hardly ever supported                                                  |
| 65      | ideogram attributes off      | reset the effects of all of 60-64                                      |
| 90-97   | Set bright foreground color  | aixterm (not in standard)                                              |
| 100-107 | Set bright background color  | aixterm (not in standard)                                              |

#### Cursor Movement

| Code                               | Result                        | Note|
|:---:|:---|:---|
| `Esc[&lt;Line&gt;;&lt;Column&gt;HEsc[&lt;Line&gt;;&lt;Column&gt;f` | **Cursor Position**         | Moves the cursor to the specified position (coordinates). If you do not specify a position, the cursor moves to the home position at the upper-left corner of the screen (line 0, column 0). This escape sequence works the same way as the following Cursor Position escape sequence. |
| `Esc[&lt;Value&gt;A`                       | **Cursor Up**               | Moves the cursor up by the specified number of lines without changing columns. If the cursor is already on the top line, ANSI.SYS ignores this sequence.|
| `Esc[&lt;Value&gt;B`                       | **Cursor Down**             | Moves the cursor down by the specified number of lines without changing columns. If the cursor is already on the bottom line, ANSI.SYS ignores this sequence.|
| `Esc[&lt;Value&gt;C`                       | **Cursor Forward**          | Moves the cursor forward by the specified number of columns without changing lines. If the cursor is already in the rightmost column, ANSI.SYS ignores this sequence. |
| `Esc[&lt;Value&gt;D`                       | **Cursor Backward**         | Moves the cursor back by the specified number of columns without changing lines. If the cursor is already in the leftmost column, ANSI.SYS ignores this sequence.|
| `Esc[s`                            | **Save Cursor Position**    | Saves the current cursor position. You can move the cursor to the saved cursor position by using the Restore Cursor Position sequence.|
| `Esc[u`                            | **Restore Cursor Position** | Returns the cursor to the position stored by the Save Cursor Position sequence.|
| `Esc[2J`                           | **Erase Display**           | Clears the screen and moves the cursor to the home position (line 0, column 0).|
| `Esc[K`                            | **Erase &lt;Line&gt;**              | Clears all characters from the cursor position to the end of the line (including the character at the cursor position).|
