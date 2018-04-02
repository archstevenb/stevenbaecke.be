var PagePreview = createClass({
  render: function() {

    // data
    var entry = this.props.entry;
    var layout = entry.getIn(['data', 'layout']);
    var body = this.props.widgetFor('body');
    var images = entry.getIn(['data', 'images']);
    var className = layout;

    // partials
    var aside = "";
    var figures = "";
    var content = h('div', {}, body);

    // figures
    if (images != null) {
        figures = images.map(function(item, index) {
            return h('figure', {},
                h('picture', {className: "preview-img", style: {'background-image': 'url("' + item.get('url') + '")'}}, "")
            );
        });
    }

    // aside
    if (layout == 'page') {
        if (images) {
            aside =  h('aside', {}, figures);
        }
    }

    // card
    if (layout == "frontpage" || layout == "post") {
        className = "card";
    }

    // post
    if (layout == "post") {
        className = "card project";
        var layout = entry.getIn(['data', 'layout']);

        content = h('div', {},
            h('h1', {}, h('strong', {}, entry.getIn(['data', 'subtitle'])), entry.getIn(['data', 'title'])),
            body);

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
