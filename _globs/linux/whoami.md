---
Name: whoami
Description: "Prints the current user's username. Useful for confirming privilege level after exploitation."
Platform: linux
BinaryPath:
  - /usr/bin/whoami
  - /bin/whoami
Category: discovery
MitreID: T1033
Patterns:
  - Pattern: "w?oami"
    Wildcards: ["?"]
    Notes: "Single char wildcard replaces 'h'"
  - Pattern: "w*i"
    Wildcards: ["*"]
    Notes: "Star matches 'hoam'"
  - Pattern: "who[a]mi"
    Wildcards: ["[]"]
    Notes: "Character class with single correct char"
  - Pattern: "wh?ami"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'o'"
  - Pattern: "/usr/bin/w?oami"
    Wildcards: ["?"]
    Notes: "Full path with single wildcard"
  - Pattern: "/???/???/whoami"
    Wildcards: ["?"]
    Notes: "Directory components obfuscated with ? sequences"
  - Pattern: "/???/b??/w*"
    Wildcards: ["?", "*"]
    Notes: "Combined ? and * across full path"
  - Pattern: "w[ho]*i"
    Wildcards: ["[]", "*"]
    Notes: "Character class plus star for middle"
  - Pattern: "wh[o]am[i]"
    Wildcards: ["[]"]
    Notes: "Multiple character classes, each containing correct char"
  - Pattern: "/usr/*/whoami"
    Wildcards: ["*"]
    Notes: "Wildcard in directory component"
Resources:
  - https://attack.mitre.org/techniques/T1033/
  - https://man7.org/linux/man-pages/man1/whoami.1.html
---
