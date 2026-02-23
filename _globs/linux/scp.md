---
Name: scp
Description: "Secure Copy Protocol. Used for file transfer between hosts over SSH — exfiltration, payload staging, or lateral file movement."
Platform: linux
BinaryPath:
  - /usr/bin/scp
  - /bin/scp
Category: exfiltration
MitreID: T1048.002
Patterns:
  - Pattern: "sc?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'p'"
  - Pattern: "s*p"
    Wildcards: ["*"]
    Notes: "Star matches 'c'"
  - Pattern: "s[c]p"
    Wildcards: ["[]"]
    Notes: "Bracket class on second char"
  - Pattern: "sc[p]"
    Wildcards: ["[]"]
    Notes: "Bracket class on last char"
  - Pattern: "/usr/bin/sc?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/scp"
    Wildcards: ["?"]
    Notes: "Directory obfuscation"
Resources:
  - https://attack.mitre.org/techniques/T1048/002/
---
