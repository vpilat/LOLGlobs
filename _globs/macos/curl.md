---
Name: curl
Description: "Transfer data from servers. macOS ships with curl by default. Used for C2, payload download, and exfiltration."
Platform: macos
BinaryPath:
  - /usr/bin/curl
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
    Notes: "Bracket class on third char"
  - Pattern: "c?r?"
    Wildcards: ["?"]
    Notes: "Two wildcards"
  - Pattern: "/usr/bin/cur?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/curl"
    Wildcards: ["?"]
    Notes: "Directory obfuscation"
  - Pattern: "/???/???/c*l"
    Wildcards: ["?", "*"]
    Notes: "Full path with mixed wildcards"
PlatformNotes: |
  zsh (default shell on macOS) has stricter glob behavior than bash. By default, zsh will error if a glob matches no files (`nomatch` error). Use `setopt NO_NOMATCH` or `noglob` prefix to suppress. Also, zsh supports extended globs with `setopt EXTENDED_GLOB`.
Resources:
  - https://attack.mitre.org/techniques/T1105/
  - https://curl.se/docs/manpage.html
---
