<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="xml"
    doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"
    doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"
    omit-xml-declaration="yes"
    encoding="UTF-8"
    indent="no" />

<xsl:template match="/">
    <html>
        <head>
            <title>Frontend Elements Test Page</title>
            <link rel="stylesheet" href="./assets/dist/css/main.min.css"/>
        </head>
        <body>
            <xsl:apply-templates />
            <script src="./assets/dist/js/main.min.js">
                /* Strange bug if remove inner script-tag content */
            </script>
        </body>
    </html>
</xsl:template>

</xsl:stylesheet>
