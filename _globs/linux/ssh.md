---
Name: ssh
Description: "Secure Shell client. Used for lateral movement, remote command execution, tunneling, and persistence via authorized_keys."
Platform: linux
BinaryPath:
  - /usr/bin/ssh
  - /bin/ssh
Category: lateral-movement
MitreID: T1021.004
Patterns:
  - Pattern: "ss?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'h'"
  - Pattern: "s*h"
    Wildcards: ["*"]
    Notes: "Star matches 's'"
  - Pattern: "s[s]h"
    Wildcards: ["[]"]
    Notes: "Bracket class on second char"
  - Pattern: "ss[h]"
    Wildcards: ["[]"]
    Notes: "Bracket class on last char"
  - Pattern: "/usr/bin/ss?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/ssh"
    Wildcards: ["?"]
    Notes: "Directory obfuscation"
  - Pattern: "/???/???/s*h"
    Wildcards: ["?", "*"]
    Notes: "Full path with mixed wildcards"
Resources:
  - https://attack.mitre.org/techniques/T1021/004/
  - https://man.openbsd.org/ssh
---
