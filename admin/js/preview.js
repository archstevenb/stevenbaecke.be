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
    var wrapper = "article";

    // partials
    var title = "";
    var aside = "";
    var figures = "";
    var pLinks = "";
    var pButtons = "";
    var content = h('div', {}, body);

    // figures
    if (images != null) {
        var figureClass = (layout == "card" && images.size == "1") ? 'wide' : images.size;
        figures = images.map(function(item, index) {
            return h('figure', {className: figureClass},
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


    // projects
    if (layout == "projects") {
        className = "projects";
        wrapper = "section";
        title= h('h1', {}, entry.getIn(['data', 'title']));
    }

    // preview
    return h(wrapper, {"className": className},
      title,
      aside,
      content,
      figures,
    );

  }
});

CMS.registerPreviewTemplate("pages", PagePreview);
CMS.registerPreviewTemplate("posts", PagePreview);
