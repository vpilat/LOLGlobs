---
Name: rsync
Description: "Fast, versatile file copying tool. Supports remote file sync over SSH — useful for exfiltration, payload staging, and lateral file movement."
Platform: linux
BinaryPath:
  - /usr/bin/rsync
  - /usr/local/bin/rsync
Category: exfiltration
MitreID: T1048
Patterns:
  - Pattern: "rsyn?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'c'"
  - Pattern: "r*c"
    Wildcards: ["*"]
    Notes: "Star matches 'syn'"
  - Pattern: "rs[y]nc"
    Wildcards: ["[]"]
    Notes: "Bracket class on third char"
  - Pattern: "r?ync"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 's'"
  - Pattern: "rsyn[c]"
    Wildcards: ["[]"]
    Notes: "Bracket class on last char"
  - Pattern: "/usr/bin/rsyn?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/r*c"
    Wildcards: ["?", "*"]
    Notes: "Full path mixed wildcards"
Resources:
  - https://attack.mitre.org/techniques/T1048/
  - https://linux.die.net/man/1/rsync
---
