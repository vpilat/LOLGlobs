---
Name: find
Description: "Search for files in directory hierarchy. Pivotal for discovery — finding SUID binaries, writable directories, config files with credentials, and more."
Platform: linux
BinaryPath:
  - /usr/bin/find
  - /bin/find
Category: discovery
MitreID: T1083
Patterns:
  - Pattern: "fin?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'd'"
  - Pattern: "f*d"
    Wildcards: ["*"]
    Notes: "Star matches 'in'"
  - Pattern: "fi[n]d"
    Wildcards: ["[]"]
    Notes: "Bracket class on third char"
  - Pattern: "f?nd"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'i'"
  - Pattern: "fin[d]"
    Wildcards: ["[]"]
    Notes: "Bracket class on last char"
  - Pattern: "/usr/bin/fin?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/f*d"
    Wildcards: ["?", "*"]
    Notes: "Full path mixed wildcards"
  - Pattern: "f?n?"
    Wildcards: ["?"]
    Notes: "Two wildcards"
Resources:
  - https://attack.mitre.org/techniques/T1083/
  - https://man7.org/linux/man-pages/man1/find.1.html
---
