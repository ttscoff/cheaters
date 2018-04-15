Support Cheaters by [making a donation](http://brettterpstra.com/donate/) to my coffee fund.

![Cheat Sheets Header](http://brettterpstra.com/uploads/2012/03/Cheat-Sheets-Header.jpg)

[macdrifter]: http://www.macdrifter.com/2012/02/markdown-cheat-sheets-and-marked/
[gather]: http://brettterpstra.com/introducing-gather-a-cocoa-markdownifier/
[te]: http://smilesoftware.com/TextExpander/
[marky]: http://markdownrules.com/
[demo]: http://ttscoff.github.io/cheaters/cheaters/cheat.html

First and foremost, this is a total ripoff of an idea by Gabe Weatherhead [over at Macdrifter][macdrifter]. I just expanded on the idea a little bit.

Cheaters is a collection of HTML-based cheat sheets meant for display in an Automator-based popup browser which can float on your screen while you work in other apps ([demo the web version][demo]). Most of the time I create [TextExpander][te] snippets for commonly-forgotten formats, but having an overall reference can be handy. I've included a collection of hastily made sheets as examples for you to create your own. Sheets are easy to create with minimal markup and are, for the most part, automatically styled and made to fit in with Cheaters overall aesthetic.

Be sure to check out the [built-in Markdown conversion](http://brettterpstra.com/2014/01/26/cheaters-2-dot-0-5-cheating-gets-easier/) for easy cheatsheet creation, and [check here](http://brettterpstra.com/2014/01/21/cheaters-2-dot-0-more-and-faster/) for info on the fast switcher, deep linking and a JavaScript API.

![Cheat Sheets wide](http://brettterpstra.com/uploads/2012/03/Cheat-Sheets-wide.jpg)


### Using Cheaters 

For Cheaters to work, you need to be serving the files on a local server. This can be done with something like MAMP, or using the built in Apache server in macOS. If you don't know how to work with either of these, the best bet might be to run the `cheat.sh` script found in the `cheatsheets` folder. That will launch Python's simpleHTTPServer in that directory with an address of `http://localhost:4000` (which you can then plug into Fluid or Automator).

If you want to set this up to run with launchd, it would probably be wise to add a `cd /path/to/cheaters` line in before the python command.

#### with Fluid

You can use the instructions below if you're a cheapskate, but for $5 you can use [Fluid](http://fluidapp.com/) and create a menu bar app that's much more full-featured and usable than the Automator action. Seriously. Do it.

Under images/fluid/CheatersIcon.png you can find a nice Icon to use for Cheaters.

***Don't forget to "Allow browsing to any URL" in the Whitelist section of Fluid preferences.***

#### with Automator

The most useful way to use Cheaters is with an Automator Application.

![Cheaters Automator Application setup](http://brettterpstra.com/uploads/2012/03/Cheaters-Automator.jpg)

1. Download the Zip file above and put it anywhere on your computer (I keep mine in Dropbox so that my cheat sheets are available on other machines). 
2. Open Automator in your Applications folder. 
3. Create a new project with the type "Application." You can also use a Workflow, which can be launched easily from the command line, but I'm using an Application for now because it's easiest to launch with a hotkey program.
4. Drag two actions from the library on the left into the blank area on the right: **Get Specified URLs** and **Website Popup**, in that order. You can find them quickly by selecting "Library" on the left and using the filter to locate them.
5. Double click the default URL in the **Get Specified URLs** action and set it to the file path to your Cheaters folder. This will be in the format `file:///Users/yourusername/path/to/Cheaters/index.html`.
6. Set a size in the **Website Popup** action. I'm using a custom size of 700x800, which works well on my setup with two large monitors. The popup is resizable after opening, so it's not critical. Cheaters has a responsive design that will mutate into a single column with a dropdown menu at smaller sizes, so if you have a small screen, use the iPhone preset.
7. Save the application to your /Applications folder (or ~/Applications).

You can add a hotkey or other launch method using Launchbar, Keyboard Maestro, Alfred, Apptivator, etc. Lots of choices. When the application launches, it automatically becomes a floating HUD, and you can dismiss it by focusing it and using Escape or ⌘Q.

You can also use Cheaters in a web browser, just put it on your disk and point your browser to the `file:///...` location.

### Deep linking

As of a recent update, Cheaters can now handle linking directly to a specific cheat sheet using url hashes. You can use a zero-index number to link to a page if you know the order (index.html#3 to link to the fourth item), but because the order is configurable and subject to change, it also supports name matching. For example, if you want to link the Siri cheat sheet directly, you can use `[your_url_or_path]/index.html#siri`.

The hash-matching is case-insensitive and will go to the first menu item whose text matches the hash (in whole or in part, whitespace is ignored). This means that if you have a menu item for "CSS 3 Selectors" followed by "CSS Animation," `#css` will go to "CSS 3 Selectors." To target "CSS Animation," you'd want a url like `#cssanim` or the full `#cssanimation`.

This is primarily geared toward building more complex workflows using tools like Alfred 2.

### Adding Sheets

If you know a little Markdown or HTML, adding and editing sheets is easy. Take a look at the existing documents in the included **cheatsheets** folder. The markup varies but a lot of cases are already handled by the Cheaters script and styles. Most of the included cheat sheets are clipped from existing web sources (credits at the bottom of each) or submitted by users. 

Dropping markdown, html, or image files into the `cheatsheets` folder will make them available to the index.html menu (see below).

#### Markdown

Cheaters can render Markdown directly, so this is the easiest way to build a cheat sheet. MMD tables will work, sections can be created by using h4 (`####`) headers, and all standard Markdown elements should be automatically styled. You can also include custom HTML within the Markdown document, though it's not recommended.


#### HTML

HTML based cheat sheets should not include a head, body or containing div, just the markup that goes inside the container in the index.html file. It's preferred that the title be an `h3` and section headers be either `h4` or `captions` elements in tables.

#### Using Images/PDFs

![Cheat Sheets with image](http://brettterpstra.com/uploads/2012/03/Cheat-Sheets-Wide-Image.jpg)

Cheaters will automatically scale images to your browser width, and when your browser width gets small enough that the image would be unreadable, it shows it full size and lets you scroll around within the viewport. See the CSS3 cheat sheet markup for an example of using an image; it's just an image tag in an html file. Easy as pie.

If you find a PDF cheat sheet that's ideal for this type of display, you'll need to convert it to an image (gif, jpg or png) first. Make it large, at _least_ 1024px wide.

If you create some great cheat sheets, fork this and send a pull request. Just [let me know](http://brettterpstra.com/contact) if you need a hand!


#### Metadata

Cheaters allows for a metadata block at the top of a cheatsheet that alters its behavior/appearance. Right now there are only 3 keys in use, but extra ones can be added and handled over time.

Keys and values are specified in JSON format. 

__In Markdown files__, this is just a block at the very top ending with `%%%END`.

    {
        "id": "bt_js",
        "style": "css/JavaScript.css",
        "layout": "multicolumn"
    }
    %%%END

__In HTML files__ this gets wrapped in an HTML comment:

    <!--
    {
        "id": "bt_js",
        "style": "css/JavaScript.css",
        "layout": "multicolumn"
    }
    %%%END-->

##### Available keys:

id
: Specifies an id applied to the body when the cheat sheet is active. By default the filename is used, e.g. "jquery19_md", but with this key you can make it whatever you want, allowing custom CSS to avoid any namespacing issues.

style
: A pointer to a CSS file. The base is the cheatsheets folder. Custom styles should be saved in the `cheatsheets/css` folder, and referenced with the leading `css/`, e.g. `"style": "css/selectors.css"`. This feature allows for custom styles per cheat sheet, without having to alter the main CSS.

layout
: Currently only recognizes "multicolumn" as anything that changes behavior. Including `"layout": "multicolumn"` in the metadata will change the scrolling behavior and shortcut keys to work with a horizontal format, as well as adding a "multicolumn" class to the body tag that invokes CSS3 column layout.




#### The menu

The index file for Cheaters loads each cheat sheet dynamically into its own markup (using jQuery). To add a new sheet to the menu (or remove/rearrange existing sheets), just edit the unordered list in the #nav ul. The order of the list is the order of the menu items, and the first one in the list is loaded by default. If you only ever want one cheat sheet, just make it the only one in the list. New cheat sheets should be stored as HTML files in the **cheatsheets** folder, and referenced from the links in the #nav list with the relative path `cheatsheets/filename.html`.

#### The look

![Narrow, high contrast](http://brettterpstra.com/uploads/2012/03/Cheat-Sheets-narrow-high-contrast.jpg)

There's also a contrast icon in the upper right, which you can use to flip between light-on-dark and dark-on-light. You can make this change permanent by editing the body class in index.html. Adding a class of "inverted" will set it to be light-on-dark by default; without that class it's dark-on-light automatically.

If you run into markup that isn't handled by the CSS, use metadata (as detailed above) to specify a unique ID and add a custom CSS file to `cheatsheets/css` to handle it.


### Fast switcher

The most important addition is the new fast switcher, triggered with the "f" key. Just type "f" and the first letter of the title of the menu item you want to switch to and it will jump. If there are two sheets with the same letters, just keep typing until it can tell the difference. It's a fuzzy match, so if you have "HTML" and "HTML5," you can type "h5" to jump to the latter. Note that if "HTML5" comes before "HTML" in the menu, it will be more difficult to select the "HTML" one as "HTML5" will match first. The system will work with whatever cheat sheets you load.

You can also use the fast switcher with numbers. 1-9 will jump to the first nine sheets, with the first sheet being 1. 0 will jump to the last sheet.

### Search shortcuts

Just in case you're looking for something that you don't have on your cheat sheet, the fast search also works for web searching! You can type "f" to bring it up, then type "?" to start a search. Anything after the "?" will be searched on [DuckDuckGo](https://duckduckgo.com/). Using DuckDuckGo means that you can also use "bang searches," so you can start a query with "?!" and any of DuckDuckGo's [search shortcuts](https://duckduckgo.com/bang.html).

There are a couple of shortcuts built in: "?so {query}" will search Stack Overflow, and "?gh {query}" will search GitHub. "?g {query}" will do a Google search instead of DuckDuckGo.

If you're using Fluid, you can easily jump back to your cheat sheets by hitting "Command-Shift-H" for "home." This brings me to another big improvement: your active page and "contrast" settings are preserved, even between launches. Cheaters will remember where you were at and what colors it was using.

### Table of contents

Typing "t" will bring up a table of contents for the current cheat sheet. It will be based off of tags `h1`-`h4`, plus tables with `caption`s or `th` (whichever has an `id` attribute). For most sheets, this should automatically generate a good navigation structure. A filter field is automatically focused when it pops up. Typing performs a fuzzy search on the available titles, and if it narrows down to one, hitting enter will jump to that section, closing the TOC in the process.

In Fluid's menu bar mode, the Tab key behaves differently, so tabbing from the filter input to the menu items doesn't work. If you hit enter the first one is selected, in which case you can hit enter again (but not tab to the next). For now, this circumstance requires a mouse click if there is more than one result.

Escape will close the TOC popup at any time.


### Keyboard shortcuts

Command-I will now toggle the "contrast" mode, inverting your colors for a dark-on-light or light-on-dark setup.

In addition to normal web page scrolling keys, you can also navigate using vim-like keys. "j" and "k" will move up and down, and "J" and "K" will do it faster (u/d will also move up and down by half pages). "G" will jump to the bottom, and "gg" will jump to the top. Also, you can use "." (period) and "," (comma) to navigate by section header.

### Advanced

For scripters, there's a JavaScript command you can call externally to switch between cheat sheets: `Cheaters.switchTo()`. The parameter for it is any string or single digit. If you call `Cheaters.switchTo('git')`, it will find the first page matching "git" and switch to it. You can jump to a numbered page using `Cheaters.switchTo(3)`. These numbers are 1-indexed and correlate with the keyboard shortcuts in the fast switcher. You can also retrieve the current index from the variable `Cheaters.activeItem`, but note that the result of that is 0-index, so it's 0-8 instead of 1-9. 

These commands are useful if you're using Fluid and want to control it with AppleScript. Just use something like `tell app "Cheaters" to do javascript "Cheaters.switchTo('jquery')"`. You can pass it a variable using any kind of launcher you can script.
