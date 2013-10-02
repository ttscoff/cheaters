Support Cheaters by contributing to my [GitTip fund](https://www.gittip.com/ttscoff/) or [making a donation](http://brettterpstra.com/donate/).

![Cheat Sheets Header](http://brettterpstra.com/uploads/2012/03/Cheat-Sheets-Header.jpg)

[macdrifter]: http://www.macdrifter.com/2012/02/markdown-cheat-sheets-and-marked/
[gather]: http://brettterpstra.com/introducing-gather-a-cocoa-markdownifier/
[te]: http://smilesoftware.com/TextExpander/
[marky]: http://markdownrules.com/
[demo]: http://ttscoff.github.io/cheaters/cheat.html

First and foremost, this is a total ripoff of an idea by Gabe Weatherhead [over at Macdrifter][macdrifter]. I just expanded on the idea a little bit.

Cheaters is a collection of HTML-based cheat sheets meant for display in an Automator-based popup browser which can float on your screen while you work in other apps ([demo the web version][demo]). Most of the time I create [TextExpander][te] snippets for commonly-forgotten formats, but having an overall reference can be handy. I've included a collection of hastily made sheets as examples for you to create your own. Sheets are easy to create with minimal markup and are, for the most part, automatically styled and made to fit in with Cheaters overall aesthetic.


![Cheat Sheets wide](http://brettterpstra.com/uploads/2012/03/Cheat-Sheets-wide.jpg)

### Using Cheaters

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

### Customizing

If you know a little HTML, adding and editing sheets is easy. Take a look at the existing documents in the included **cheatsheets** folder. The markup varies but a lot of cases are already handled by the CSS. I stole most of the included cheat sheets from existing web sources (credits at the bottom of each). Some of them I just ripped the HTML out of directly, some I [converted][marky] [to Markdown][gather] and then to HTML to get cleaner output. The HTML in the cheat sheets does not need a head, body or containing div, just the markup that goes inside the container in the index.html file.

#### The menu

The index file for Cheaters loads each cheat sheet dynamically into its own markup (using jQuery). To add a new sheet to the menu (or remove/rearrange existing sheets), just edit the unordered list in the #nav ul. The order of the list is the order of the menu items, and the first one in the list is loaded by default. If you only ever want one cheat sheet, just make it the only one in the list. New cheat sheets should be stored as HTML files in the **cheatsheets** folder, and referenced from the links in the #nav list with the relative path `cheatsheets/filename.html`.

#### The look

![Narrow, high contrast](http://brettterpstra.com/uploads/2012/03/Cheat-Sheets-narrow-high-contrast.jpg)

If you run into markup that isn't handled by the CSS, just wrap it in a div with a unique ID and add specific styles in the main CSS file to override or augment default styles. You can, of course, completely replace that stylesheet if you want an entirely different look. I promise not to be offended.

There's also a contrast icon in the upper right, which you can use to flip between light-on-dark and dark-on-light. You can make this change permanent by editing the body class in index.html. Adding a class of "inverted" will set it to be light-on-dark by default; without that class it's dark-on-light automatically.

#### Using PDFs

![Cheat Sheets with image](http://brettterpstra.com/uploads/2012/03/Cheat-Sheets-Wide-Image.jpg)

If you find a PDF cheat sheet that's ideal for this type of display, you'll need to convert it to an image (gif, jpg or png) first. Make it large, between 800px and 1024px wide. Cheaters will automatically scale it to your browser width, and when your browser width gets small enough that the image would be unreadable, it shows it full size and lets you scroll around within the viewport. See the CSS3 cheat sheet markup for an example of using an image; it's just an image tag in an html file. Easy as pie.

If you create some great cheat sheets, fork this and send a pull request. Just [let me know](http://brettterpstra.com/contact) if you need a hand!

