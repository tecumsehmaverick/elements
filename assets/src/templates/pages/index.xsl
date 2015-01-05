<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="../../elements/collapsible/templates.xsl"/>
<xsl:import href="../../elements/slideshow/templates.xsl"/>

<xsl:template match="/data">
    <xsl:apply-templates select="data/faq" mode="collapsible" />
    <xsl:apply-templates select="data/gallery" mode="slideshow" />
</xsl:template>

</xsl:stylesheet>
