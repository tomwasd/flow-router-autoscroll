Autoscroll for Flow Router
==========================

Based/Forked from [Autoscroll for Iron Router](https://github.com/okgrow/iron-router-autoscroll) by OK GROW!

A [Flow Router](https://atmospherejs.com/kadira/flow-router) enhancement that improves navigation for pages that have more than one screen-ful of content.
It causes the page to scroll to the right place after changing routes (which people are often surprised to find doesn't happen by default with Flow Router).

"The right place" is:

1. The previous position if we're returning via the back button, or
2. The top of page otherwise

Why?
----

In The Old Days™ when you navigated to a new page the browser would unload the current page, load the new page, and position the viewport to the top of the page.

When changing routes using Flow Router the browser doesn't technically load a new page,
it just changes content in the existing page (as far as the browser is concerned) so it doesn't scroll to the top.
The viewport stays in the same place it was already.
So when navigating from a page that's scrolled down already this feels to the user like navigating to a new page and being scrolled partway down, which feels unnatural.

Installation
----------

`meteor add tomwasd:flow-router-autoscroll`


Configuration
-----------

The animation speed defaults to 200 ms.
To change this use:

``` javascript
FlowRouterAutoscroll.animationDuration = 100;
```
