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