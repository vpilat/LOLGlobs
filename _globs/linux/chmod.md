---
Name: chmod
Description: "Change file permissions. Used post-exploitation to make dropped payloads executable."
Platform: linux
BinaryPath:
  - /bin/chmod
  - /usr/bin/chmod
Category: execution
MitreID: T1222.002
Patterns:
  - Pattern: "chmo?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'd'"
  - Pattern: "ch*d"
    Wildcards: ["*"]
    Notes: "Star matches 'mo'"
  - Pattern: "c?mod"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'h'"
  - Pattern: "chm[o]d"
    Wildcards: ["[]"]
    Notes: "Bracket class on fourth char"
  - Pattern: "/bin/chmo?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/chmod"
    Wildcards: ["?"]
    Notes: "Directory obfuscation"
  - Pattern: "c*od"
    Wildcards: ["*"]
    Notes: "Aggressive star wildcard"
  - Pattern: "ch?od"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'm'"
Resources:
  - https://attack.mitre.org/techniques/T1222/002/
---
