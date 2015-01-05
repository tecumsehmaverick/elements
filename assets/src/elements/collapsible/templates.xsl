<?xml version='1.0' encoding='utf-8'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!--
# Module Collapsible

Name: Module Collapsible
Version: 0.0.1
Author: Bernardo Dias (@bernardodiasc)
URL: https://github.com/bernardodiasc/modules/tree/master/workspace/modules/collapsible

Description: This module is a description list with collapsible behavior, when click on the title toggle visibility of the description

## How to use: 

On your `xsl` template, copy: `<xsl:apply-templates select="data/faq" mode="collapsible" />`

Where the API `data/faq` (`xml`) :

```
<data>
    <faq>
        <entry id="#">
            <title handle="#">Title copy</title>
            <text mode="formatted">
                <p>Text copy</p>
            </text>
        </entry>
    </faq>
</data>
```
-->

<xsl:template name="collapsible">
    <collapsible>
        <h2>Collapsible element</h2>
        <dl>
            <xsl:for-each select="/data/collapsible/entry">
                <dt><xsl:value-of select="title"/></dt>
                <dd><xsl:value-of select="description"/></dd>
            </xsl:for-each>
        </dl>
    </collapsible>
</xsl:template>

</xsl:stylesheet>