<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>My CD Collection</h2>
  <table border="1">
    <tr>
      <th>App Name</th>
      <th>Publisher Name</th>
      <th>Category</th>
      <th>Rating</th>
    </tr>
    <xsl:for-each select="catalog/app">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="publisher"/></td>
      <td><xsl:value-of select="category"/></td>
      <td><xsl:value-of select="rating"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>