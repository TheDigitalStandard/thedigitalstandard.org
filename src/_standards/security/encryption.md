---
title: Encryption
standard_category: Data Security
standard_state: '1: Green'
criteria:
  - criteria_summary: >-
      Information I provide is encrypted so that it can't be easily read or used
      by attackers.
    indicators:
      - indicator: >-
          Transmission of user communications or information is encrypted by
          default.
        procedure_html: >-
          <p>Investigation and analysis of publicly available documentation to
          determine what the company clearly discloses.</p>
      - indicator: >-
          Transmission of user communications or information is encrypted using
          unique keys.
        procedure_html: <p>Inspect traffic to determine if SSL encryption is used.</p>
      - indicator: Users can secure their content using end-to-end encryption.
        procedure_html:
      - indicator: End-to-end encryption is enabled by default.
        procedure_html:
      - indicator: >-
          User information and communications are encrypted by default when at
          rest.
        procedure_html:
---

