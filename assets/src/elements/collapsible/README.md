# Module Collapsible

Name: Module Collapsible
Version: 0.0.1
Author: Bernardo Dias (@bernardodiasc)
URL: https://github.com/bernardodiasc/elements/tree/master/assets/src/elements/collapsible

Description: This module is a description list with collapsible behavior, when click on the title toggle visibility of the description


## SWIG - How to use:

On https://github.com/bernardodiasc/elements/blob/master/assets/src/elements/collapsible/templates.html



## XSLT - How to use:

File: https://github.com/bernardodiasc/elements/blob/master/assets/src/elements/collapsible/templates.xsl
    <xsl:call-template name="collapsible" />



Copy: `<xsl:apply-templates select="[[ XPATH ]]" mode="collapsible" />`

(((
> currently working with `<xsl:call-template name="collapsible" />`, not the best way to do this.
> `apply-templates` is better because the `select` attribute, this makes able to select the content node 
> to use in this template. the way it is now the 
)))


The API must be like this:

```
<collapsible>
    <entry id="#">
        <title handle="title-copy">Title copy</title>
        <description mode="formatted">
            <p>Text copy</p>
        </description>
    </entry>
</collapsible>
```