---
Name: cat
Description: "Concatenate and display file contents. Used for reading sensitive files like /etc/passwd, /etc/shadow, SSH keys, and configuration files."
Platform: linux
BinaryPath:
  - /bin/cat
  - /usr/bin/cat
Category: discovery
MitreID: T1083
Patterns:
  - Pattern: "ca?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 't'"
  - Pattern: "c*t"
    Wildcards: ["*"]
    Notes: "Star matches 'a'"
  - Pattern: "c[a]t"
    Wildcards: ["[]"]
    Notes: "Bracket class on second char"
  - Pattern: "ca[t]"
    Wildcards: ["[]"]
    Notes: "Bracket class on last char"
  - Pattern: "/bin/ca?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/cat"
    Wildcards: ["?"]
    Notes: "Obfuscate /bin/ prefix"
  - Pattern: "/b?n/cat"
    Wildcards: ["?"]
    Notes: "Wildcard in bin directory"
  - Pattern: "c?t"
    Wildcards: ["?"]
    Notes: "Middle wildcard"
Resources:
  - https://attack.mitre.org/techniques/T1083/
---
