<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="../layout/master.xsl"/>
<xsl:import href="../../elements/collapsible/templates.xsl"/>

<xsl:template match="/data">
    <xsl:call-template name="collapsible" />
</xsl:template>

</xsl:stylesheet>
