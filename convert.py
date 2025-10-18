import markdown
import sys
import os.path

filename = sys.argv[1]

with open(filename, "r", encoding="utf-8") as f:
    text = f.read()

html = markdown.markdown(
    text,
    extensions=["pymdownx.arithmatex"],
    extension_configs={"pymdownx.arithmatex": {"generic": True}},
)
html = (
    """
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>
    </head>"""
    "<body>\n" + html + "</body>"
)

out_filename = os.path.splitext(filename)[0] + ".html"
with open(out_filename, "w", encoding="utf-8") as f:
    f.write(html)
