---
Name: nmap
Description: "Network mapper and port scanner. Used for network reconnaissance, host discovery, service enumeration, and OS detection."
Platform: linux
BinaryPath:
  - /usr/bin/nmap
  - /usr/local/bin/nmap
Category: reconnaissance
MitreID: T1046
Patterns:
  - Pattern: "nma?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'p'"
  - Pattern: "n*p"
    Wildcards: ["*"]
    Notes: "Star matches 'ma'"
  - Pattern: "nm[a]p"
    Wildcards: ["[]"]
    Notes: "Bracket class on third char"
  - Pattern: "n?ap"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'm'"
  - Pattern: "nma[p]"
    Wildcards: ["[]"]
    Notes: "Bracket class on last char"
  - Pattern: "/usr/bin/nma?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/n*p"
    Wildcards: ["?", "*"]
    Notes: "Full path mixed wildcards"
Resources:
  - https://attack.mitre.org/techniques/T1046/
  - https://nmap.org/book/man.html
---
