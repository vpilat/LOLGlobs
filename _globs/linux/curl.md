---
Name: curl
Description: "Transfer data to or from a server. Commonly used for downloading payloads, exfiltration, and C2 communication."
Platform: linux
BinaryPath:
  - /usr/bin/curl
  - /bin/curl
Category: download
MitreID: T1105
Patterns:
  - Pattern: "cur?"
    Wildcards: ["?"]
    Notes: "Single wildcard replaces 'l'"
  - Pattern: "c*l"
    Wildcards: ["*"]
    Notes: "Star matches 'ur'"
  - Pattern: "cu[r]l"
    Wildcards: ["[]"]
    Notes: "Character class around 'r'"
  - Pattern: "c?r?"
    Wildcards: ["?"]
    Notes: "Two wildcards replace 'u' and 'l'"
  - Pattern: "/usr/bin/cur?"
    Wildcards: ["?"]
    Notes: "Full path, wildcard on last char"
  - Pattern: "/???/bin/curl"
    Wildcards: ["?"]
    Notes: "Obfuscate /usr/ prefix"
  - Pattern: "/usr/*/cur?"
    Wildcards: ["*", "?"]
    Notes: "Combined wildcards on directory and command"
  - Pattern: "cur[l]"
    Wildcards: ["[]"]
    Notes: "Bracket class on final char"
  - Pattern: "c[u]rl"
    Wildcards: ["[]"]
    Notes: "Bracket class on second char"
  - Pattern: "/???/???/c*"
    Wildcards: ["?", "*"]
    Notes: "Full path obfuscation with mixed wildcards"
Resources:
  - https://attack.mitre.org/techniques/T1105/
  - https://curl.se/docs/manpage.html
---
