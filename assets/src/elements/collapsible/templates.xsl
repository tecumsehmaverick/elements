<?xml version='1.0' encoding='utf-8'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template name="collapsible">
    <xsl:param name="node"/>
    <collapsible>
        <h2>Collapsible element</h2>
        <dl>
            <xsl:for-each select="$node/entry">
                <dt><xsl:value-of select="title"/></dt>
                <dd><xsl:value-of select="description"/></dd>
            </xsl:for-each>
        </dl>
    </collapsible>
</xsl:template>

</xsl:stylesheet>