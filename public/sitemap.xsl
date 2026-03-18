<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap — Health Supplements Singapore</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 15px;
            color: #1a1a1a;
            background: #fff;
            padding: 40px 24px 80px;
          }
          .wrap { max-width: 860px; margin: 0 auto; }
          h1 { font-size: 22px; font-weight: 700; margin-bottom: 6px; }
          .meta { font-size: 13px; color: #666; margin-bottom: 32px; }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
          }
          thead th {
            text-align: left;
            padding: 10px 14px;
            border-bottom: 2px solid #111;
            font-weight: 600;
            font-size: 13px;
            color: #333;
            white-space: nowrap;
          }
          tbody tr:hover { background: #f7f7f7; }
          tbody td {
            padding: 11px 14px;
            border-bottom: 1px solid #e8e8e8;
            vertical-align: middle;
          }
          a { color: #0b63ce; text-decoration: none; word-break: break-all; }
          a:hover { text-decoration: underline; }
          .badge {
            display: inline-block;
            font-size: 11px;
            padding: 2px 8px;
            border: 1px solid #d0d0d0;
            color: #555;
            white-space: nowrap;
          }
          .num { color: #999; font-size: 13px; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>XML Sitemap</h1>
          <p class="meta">
            <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs —
            Health Supplements Singapore
          </p>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Change Freq</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td class="num"><xsl:number/></td>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                  <td>
                    <span class="badge"><xsl:value-of select="sitemap:changefreq"/></span>
                  </td>
                  <td><xsl:value-of select="sitemap:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
