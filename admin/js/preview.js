var PagePreview = createClass({
  render: function() {

    // data
    var entry = this.props.entry;
    var layout = entry.getIn(['data', 'layout']);
    var body = this.props.widgetFor('body');
    var images = entry.getIn(['data', 'images']);
    var links = entry.getIn(['data', 'links']);
    var buttons = entry.getIn(['data', 'buttons']);
    var className = layout;

    // partials
    var aside = "";
    var figures = "";
    var pLinks = "";
    var pButtons = "";
    var content = h('div', {}, body);

    // figures
    if (images != null) {
        figures = images.map(function(item, index) {
            return h('figure', {},
                h('picture', {className: "preview-img", style: {'background-image': 'url("' + item.get('url') + '")'}}, "")
            );
        });
    }

    // links
    if (links != null) {
        cLinks  = links.map(function(item, index) {
            return h('li', {},
                h('a', {}, item.get('title'))
            )
        });
        pLinks = h('ul', {className: "unstyled links"}, cLinks);
    }

    // links
    if (buttons != null) {
        cButtons  = buttons.map(function(item, index) {
            return  h('a', {className: "button"}, item.get('title'))
        });
        pButtons = h('div', {className: "buttons"}, cButtons);
    }

    // aside
    if (layout == 'page') {
        if (images) {
            aside =  h('aside', {}, figures);
        }
    }

    // card
    if (layout == "card" || layout == "post") {
        className = "card";
    }

    // post
    if (layout == "post") {
        className = "card project";
        var layout = entry.getIn(['data', 'layout']);

        content = h('div', {},
            h('h1', {}, h('strong', {}, entry.getIn(['data', 'subtitle'])), entry.getIn(['data', 'title'])),
            body, pLinks, pButtons);

    }
    else {
       content = h('div', {}, body, pLinks, pButtons);
    }

    // preview
    return h('article', {"className": className},
      aside,
      content,
      figures,
    );

  }
});

CMS.registerPreviewTemplate("pages", PagePreview);
CMS.registerPreviewTemplate("posts", PagePreview);
