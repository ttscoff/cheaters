# jQuery 1.9
## Selectors ##
### Basics ###
* *
* .class
* element
* \#id
* selector1, selectorN, ...

### Hierarchy ###
* parent &gt; child
* ancestor descendant
* prev + next
* prev ~ siblings

### Basic Filters ###
* :animated
* :eq()
* :even
* :first
* :gt()
* :header
* :lang()
* :last
* :lt()
* :not()
* :odd
* :root
* :target

### Content Filters ###
* :contains()
* :empty
* :has()
* :parent

### Visibility Filters ###
* :hidden
* :visible
### Attribute ###
* [name|="value"]
* [name*="value"]
* [name~="value"]
* [name$="value"]
* [name="value"]
* [name!="value"
* [name^="value"]
* [name]
* [name="value"][name2="value2"]

### Child Filters ###
* :first-child
* :first-of-type
* :last-child
* :last-of-type
* :nth-child()
* :nth-last-child()
* :nth-last-of-type()
* :nth-of-type()
* :only-child
* :only-of-type()
### Forms ###
* :button
* :checkbox
* :checked
* :disabled
* :enabled
* :focus
* :file
* :image
* :input
* :password
* :radio
* :reset
* :selected
* :submit
* :text
## Attributes / CSS ##
### Attributes ###
* .attr()
* .prop()
* .removeAttr()
* .removeProp()
* .val()

### CSS ###
* .addClass()
* .css()
* jQuery.cssHooks
* .hasClass()
* .removeClass()
* .toggleClass()
### Dimensions ###
* .height()
* .innerHeight()
* .innerWidth()
* .outerHeight()
* .outerWidth()
* .width()

### Offset ###
* .offset()
* .offsetParent()
* .position()
* .scrollLeft()
* .scrollTop()

### Data ###
* jQuery.data()
* .data()
* jQuery.hasData()
* jQuery.removeData()
* .removeData()
## Manipulation ##
### Copying ###
* .clone()

### DOM Insertion, Around ###
* .wrap()
* .wrapAll()
* .wrapInner()

### DOM Insertion, Inside ###
* .append()
* .appendTo()
* .html()
* .prepend()
* .prependTo()
* .text()
### DOM Insertion, Outside ###
* .after()
* .before()
* .insertAfter()
* .insertBefore()

### DOM Removal ###
* .detach()
* .empty()
* .remove()
* .unwrap()

### DOM Replacement ###
* .replaceAll()
* .replaceWith()
## Traversing ##
### Filtering ###
* .eq()
* .filter()
* .first()
* .has()
* .is()
* .last()
* .map()
* .not()
* .slice()

### Miscellaneous Traversing ###
* .add()
* .andSelf()
* .contents()
* .each()
* .end()
### Tree Traversal ###
* .addBack()
* .children()
* .closest()
* .find()
* .next()
* .nextAll()
* .nextUntil()
* .parent()
* .parents()
* .parentsUntil()
* .prev()
* .prevAll()
* .prevUntil()
* .siblings()
## Events ##
### Browser Events ###
* .error()
* .resize()
* .scroll()

### Document Loading ###
* .holdReady()
* .load()
* .ready()
* .unload()

### Event Handler Attachment ###
* .bind()
* .delegate()
* .die()
* .live()
* .off()
* .on()
* .one()
* .trigger()
* .triggerHandler()
* .unbind()
* .undelegate()

### Form Events ###
* .blur()
* .change()
* .focus()
* .select()
* .submit()

### Keyboard Events ###
* .keydown()
* .keypress()
* .keyup()
### Mouse Events ###
* .click()
* .dblclick()
* .focusin()
* .focusout()
* .hover()
* .mousedown()
* .mouseenter()
* .mouseleave()
* .mousemove()
* .mouseout()
* .mouseover()
* .mouseup()
* .toggle()

### Event Object ###
* event.currentTarget
* event.data
* event.isDefaultPrevented()
* event.isImmediatePropagationStopped()
* event.isPropagationStopped()
* event.namespace
* event.pageX
* event.pageY
* event.preventDefault()
* event.relatedTarget
* event.result
* event.stopImmediatePropagation()
* event.stopPropagation()
* event.target
* event.timeStamp
* event.type
* event.which
## Effects ##
### Basics ###
* .hide()
* .show()
* .toggle()

### Custom ###
* .animate()
* .clearQueue()
* .delay()
* .dequeue()
* jQuery.dequeue()
* .finish()
* jQuery.fx.interval
* jQuery.fx.off
* .queue()
* jQuery.queue()
* .stop()
### Fading ###
* .fadeIn()
* .fadeOut()
* .fadeTo()
* .fadeToggle()

### Sliding ###
* .slideDown()
* .slideToggle()
* .slideUp()
## Ajax ##
### Global Ajax Event Handlers ###
* .ajaxComplete()
* .ajaxError()
* .ajaxSend()
* .ajaxStart()
* .ajaxStop()
* .ajaxSuccess()

### Helper Functions ###
* jQuery.param()
* .serialize()
* .serializeArray()
### Low-Level Interface ###
* jQuery.ajax()
* jQuery.ajaxSetup()

### Shorthand Methods ###
* jQuery.get()
* jQuery.getJSON()
* jQuery.getScript()
* .load()
* jQuery.post()
## Core ##
### jQuery Object ###
* jQuery()
* jQuery.noConflict()
* jQuery.sub()
* jQuery.when()

### Utilities ###
* jQuery.boxModel
* jQuery.browser
* jQuery.contains()
* jQuery.each()
* jQuery.extend()
* jQuery.globalEval()
* jQuery.grep()
* jQuery.inArray()
* jQuery.isArray()
* jQuery.isEmptyObject()
* jQuery.isFunction()
* jQuery.isNumeric()
* jQuery.isPlainObject()
* jQuery.isWindow()
* jQuery.isXMLDoc()
* jQuery.makeArray()
* jQuery.map()
* jQuery.merge()
* jQuery.noop()
* jQuery.now()
* jQuery.parseHTML()
* jQuery.parseJSON()
* jQuery.parseXML()
* jQuery.proxy()
* jQuery.support
* jQuery.trim()
* jQuery.type()
* jQuery.unique()
### DOM Element Methods ###
* .get()
* .index()
* .size()
* .toArray()

### Internals ###
* .jquery
* .context
* jQuery.error()
* .length
* .pushStack()
* .selector

### Deferred Object ###
* deferred.always()
* deferred.done()
* deferred.fail()
* deferred.isRejected()
* deferred.isResolved()
* deferred.notify()
* deferred.notifyWith()
* deferred.pipe()
* deferred.progress()
* deferred.promise()
* deferred.reject()
* deferred.rejectWith()
* deferred.resolve()
* deferred.resolveWith()
* deferred.state()
* deferred.then()
* .promise()
### Callbacks Object ###
* jQuery.Callbacks()
* callbacks.add()
* callbacks.disable()
* callbacks.empty()
* callbacks.fire()
* callbacks.fired()
* callbacks.fireWith()
* callbacks.has()
* callbacks.lock()
* callbacks.locked()
* callbacks.remove()

> Taken from the Oscar Otero's jQuery cheat sheet.
